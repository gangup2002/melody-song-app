import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { songs } from '../data/songs';
import { sendLocalNotification } from '../utils/notifications';

const MusicContext = createContext(null);
export const useMusic = () => {
  const value = useContext(MusicContext);
  if (!value) throw new Error('useMusic must be used inside MusicProvider');
  return value;
};

export function MusicProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [favorites, setFavorites] = useState(['3', '4']);
  const [playlists, setPlaylists] = useState([
    { id:'p1', name:'soft sunday', songIds:['1','3','4'], subtitle:'slow mornings & soft feelings', tint:'#F6D6E5' },
    { id:'p2', name:'main character energy', songIds:['2','5','7'], subtitle:'your little movie soundtrack', tint:'#DED4FF' }
  ]);
  const [recent, setRecent] = useState(['2','4','1']);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const player = useAudioPlayer(songs[0].audioUrl);
  const status = useAudioPlayerStatus(player);

  const isPlaying = !!status.playing;
  const currentTime = status.currentTime || 0;
  const duration = status.duration || currentSong.duration || 1;

  const playSong = async (song) => {
    if (!song) return;
    setCurrentSong(song);
    setRecent(prev => [song.id, ...prev.filter(id => id !== song.id)].slice(0, 8));
    try {
      await player.replace(song.audioUrl);
      player.play();
    } catch (e) {
      console.log('Audio playback error:', e?.message || e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) player.pause();
    else player.play();
  };

  const nextSong = () => {
    const index = songs.findIndex(s => s.id === currentSong.id);
    const next = isShuffle
      ? songs[Math.floor(Math.random() * songs.length)]
      : songs[(index + 1) % songs.length];
    playSong(next);
  };

  const previousSong = () => {
    if (currentTime > 3) {
      player.seekTo(0);
      return;
    }
    const index = songs.findIndex(s => s.id === currentSong.id);
    playSong(songs[(index - 1 + songs.length) % songs.length]);
  };

  const toggleFavorite = async (song) => {
    const exists = favorites.includes(song.id);
    setFavorites(prev => exists ? prev.filter(id => id !== song.id) : [...prev, song.id]);
    if (!exists) await sendLocalNotification('Added to your little collection 💗', `${song.title} is now in your favourites.`);
  };

  const createPlaylist = async (name) => {
    const clean = name.trim();
    if (!clean) return;
    setPlaylists(prev => [...prev, { id:`p${Date.now()}`, name:clean, songIds:[], subtitle:'a playlist made by you', tint:'#F7D5E8' }]);
    await sendLocalNotification('Playlist created ✨', `${clean} is ready for your songs.`);
  };

  const addCurrentToPlaylist = (playlistId) => {
    setPlaylists(prev => prev.map(p => p.id === playlistId && !p.songIds.includes(currentSong.id)
      ? { ...p, songIds:[...p.songIds, currentSong.id] } : p));
  };

  const seekTo = (seconds) => player.seekTo(seconds);
  const value = useMemo(() => ({
    songs, currentSong, favorites, playlists, recent, isPlaying, currentTime, duration,
    isShuffle, repeat, playSong, togglePlay, nextSong, previousSong, toggleFavorite,
    createPlaylist, addCurrentToPlaylist, setIsShuffle, setRepeat, seekTo
  }), [currentSong, favorites, playlists, recent, isPlaying, currentTime, duration, isShuffle, repeat]);

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}