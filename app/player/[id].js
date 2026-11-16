import React, { useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import { C } from '../../theme';

export default function PlayerScreen() {
  const { id }=useLocalSearchParams();
  const router=useRouter();
  const { songs,currentSong,playSong,isPlaying,togglePlay,nextSong,previousSong,currentTime,duration,seekTo,isShuffle,setIsShuffle,repeat,setRepeat,favorites,toggleFavorite }=useMusic();
  useEffect(()=>{const found=songs.find(s=>s.id===String(id));if(found&&found.id!==currentSong.id)playSong(found);},[id]);
  const song=currentSong;
  const fmt=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
  return <View style={s.page}>
    <View style={s.top}><Pressable onPress={()=>router.back()} style={s.back}><Ionicons name="chevron-down" size={24} color={C.ink}/></Pressable><View style={{alignItems:'center'}}><Text style={s.over}>NOW PLAYING</Text><Text style={s.from}>from your little world</Text></View><Pressable onPress={()=>router.back()}><Ionicons name="ellipsis-horizontal" size={22} color={C.ink}/></Pressable></View>
    <View style={s.artWrap}><Image source={{uri:song.cover}} style={s.art}/><View style={s.sticker}><Ionicons name="sparkles" size={18} color="#FFFFFF"/></View></View>
    <View style={s.songLine}><View style={{flex:1}}><Text numberOfLines={1} style={s.title}>{song.title}</Text><Text style={s.artist}>{song.artist} · {song.album}</Text></View><Pressable onPress={()=>toggleFavorite(song)}><Ionicons name={favorites.includes(song.id)?'heart':'heart-outline'} size={27} color={C.hotPink}/></Pressable></View>
    <View style={s.sliderWrap}><Slider value={Math.min(currentTime,duration)} minimumValue={0} maximumValue={Math.max(duration,1)} onSlidingComplete={seekTo} minimumTrackTintColor={C.hotPink} maximumTrackTintColor="#E9DDF1" thumbTintColor={C.deepPurple}/><View style={s.times}><Text>{fmt(currentTime)}</Text><Text>{fmt(duration)}</Text></View></View>
    <View style={s.controls}><Pressable onPress={()=>setIsShuffle(!isShuffle)}><Ionicons name="shuffle" size={22} color={isShuffle?C.hotPink:C.muted}/></Pressable><Pressable onPress={previousSong}><Ionicons name="play-skip-back" size={29} color={C.ink}/></Pressable><Pressable onPress={togglePlay} style={s.play}><Ionicons name={isPlaying?'pause':'play'} size={31} color="#FFFFFF"/></Pressable><Pressable onPress={nextSong}><Ionicons name="play-skip-forward" size={29} color={C.ink}/></Pressable><Pressable onPress={()=>setRepeat(!repeat)}><Ionicons name="repeat" size={22} color={repeat?C.hotPink:C.muted}/></Pressable></View>
    <View style={s.bottom}><Ionicons name="musical-notes" size={16} color={C.purple}/><Text style={s.bottomText}>A little melody for every mood</Text><Ionicons name="heart" size={14} color={C.hotPink}/></View>
  </View>;
}
const s=StyleSheet.create({
  page:{flex:1,backgroundColor:C.bg,padding:23,paddingTop:20,justifyContent:'space-between'},
  top:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},back:{width:40,height:40,borderRadius:14,backgroundColor:'#F1E8FA',alignItems:'center',justifyContent:'center'},
  over:{fontSize:10,color:C.purple,fontWeight:'900',letterSpacing:1.8},from:{fontSize:10,color:C.muted,marginTop:4},
  artWrap:{alignSelf:'center',width:'86%',aspectRatio:1,marginTop:15,marginBottom:15},art:{width:'100%',height:'100%',borderRadius:28,backgroundColor:C.lavender,elevation:8},
  sticker:{position:'absolute',right:-9,bottom:22,width:45,height:45,borderRadius:16,backgroundColor:C.hotPink,alignItems:'center',justifyContent:'center'},
  songLine:{flexDirection:'row',alignItems:'center',gap:12,marginTop:5},title:{fontSize:22,color:C.ink,fontWeight:'900'},artist:{fontSize:12,color:C.muted,marginTop:5},
  sliderWrap:{marginTop:13},times:{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:3},timesText:{color:C.muted,fontSize:10},
  controls:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:8},
  play:{width:68,height:68,borderRadius:24,backgroundColor:C.deepPurple,alignItems:'center',justifyContent:'center',shadowColor:C.deepPurple,shadowOpacity:.25,shadowRadius:12,elevation:5},
  bottom:{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:9,backgroundColor:'#F2EAFB',padding:13,borderRadius:16,marginTop:10},
  bottomText:{color:C.muted,fontSize:11,fontWeight:'700'}
});