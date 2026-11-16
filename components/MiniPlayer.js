import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMusic } from '../context/MusicContext';
import { C } from '../theme';

export default function MiniPlayer({ onOpen }) {
  const { currentSong, isPlaying, togglePlay, nextSong, currentTime, duration } = useMusic();
  const progress = Math.min(1, currentTime / Math.max(duration, 1));
  return (
    <Pressable onPress={onOpen} style={s.wrap}>
      <View style={[s.progress, { width:`${progress*100}%` }]} />
      <Image source={{ uri:currentSong.cover }} style={s.cover} />
      <View style={s.info}>
        <Text numberOfLines={1} style={s.title}>{currentSong.title}</Text>
        <Text numberOfLines={1} style={s.artist}>{currentSong.artist}</Text>
      </View>
      <Pressable onPress={(e) => { e.stopPropagation(); togglePlay(); }} hitSlop={10} style={s.btn}>
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={22} color={C.deepPurple} />
      </Pressable>
      <Pressable onPress={(e) => { e.stopPropagation(); nextSong(); }} hitSlop={10} style={s.btn}>
        <Ionicons name="play-skip-forward" size={21} color={C.deepPurple} />
      </Pressable>
    </Pressable>
  );
}
const s = StyleSheet.create({
  wrap:{ height:66, marginHorizontal:12, marginBottom:7, paddingHorizontal:10, flexDirection:'row', alignItems:'center', backgroundColor:'#F7EAFB', borderRadius:18, borderWidth:1, borderColor:'#E9DDF6', gap:10, overflow:'hidden' },
  progress:{ position:'absolute', left:0, top:0, height:3, backgroundColor:C.hotPink },
  cover:{ width:43, height:43, borderRadius:11 },
  info:{ flex:1, gap:3 },
  title:{ color:C.ink, fontWeight:'800', fontSize:12 },
  artist:{ color:C.muted, fontSize:10 },
  btn:{ padding:5 }
});