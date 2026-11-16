import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme';
import { useMusic } from '../context/MusicContext';

export default function SongRow({ song, onPress, showFavorite = true }) {
  const { favorites, toggleFavorite, currentSong, isPlaying } = useMusic();
  const active = currentSong?.id === song.id;
  return (
    <Pressable style={s.row} onPress={onPress}>
      <Image source={{ uri:song.cover }} style={s.cover} />
      <View style={s.info}>
        <Text numberOfLines={1} style={[s.title, active && { color:C.purple }]}>{song.title}</Text>
        <Text numberOfLines={1} style={s.artist}>{song.artist} · {song.genre}</Text>
      </View>
      {active && isPlaying ? <Ionicons name="volume-high" size={19} color={C.purple} /> : null}
      {showFavorite && <Pressable hitSlop={10} onPress={() => toggleFavorite(song)} style={s.heart}>
        <Ionicons name={favorites.includes(song.id) ? 'heart' : 'heart-outline'} size={21} color={favorites.includes(song.id) ? C.hotPink : C.muted} />
      </Pressable>}
      <Text style={s.time}>{Math.floor(song.duration/60)}:{String(song.duration%60).padStart(2,'0')}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  row:{ flexDirection:'row', alignItems:'center', paddingVertical:9, gap:12 },
  cover:{ width:52, height:52, borderRadius:13, backgroundColor:C.surface2 },
  info:{ flex:1, gap:4 },
  title:{ color:C.ink, fontSize:14, fontWeight:'700' },
  artist:{ color:C.muted, fontSize:11 },
  heart:{ paddingHorizontal:2 },
  time:{ color:C.muted, fontSize:10 }
});