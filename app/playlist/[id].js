import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import SongRow from '../../components/SongRow';
import { C } from '../../theme';

export default function PlaylistDetail() {
  const {id}=useLocalSearchParams(); const router=useRouter();
  const {playlists,songs,playSong,addCurrentToPlaylist,currentSong}=useMusic();
  const playlist=playlists.find(p=>p.id===String(id));
  if(!playlist) return <View style={s.page}><Text style={s.title}>Playlist not found</Text></View>;
  const list=playlist.songIds.map(sid=>songs.find(song=>song.id===sid)).filter(Boolean);
  const open=song=>{playSong(song);router.push(`/player/${song.id}`);};
  return <View style={s.page}>
    <Pressable onPress={()=>router.back()} style={s.back}><Ionicons name="chevron-back" size={23} color={C.ink}/><Text style={s.backText}>Playlists</Text></Pressable>
    <View style={[s.art,{backgroundColor:playlist.tint||'#E9DDFB'}]}><Ionicons name="musical-notes" size={60} color="#FFFFFF"/></View>
    <Text style={s.title}>{playlist.name}</Text><Text style={s.sub}>{playlist.subtitle} · {list.length} songs</Text>
    <Pressable style={s.add} onPress={()=>addCurrentToPlaylist(playlist.id)}><Ionicons name="add" size={18} color="#FFFFFF"/><Text style={s.addText}>Add current song · {currentSong.title}</Text></Pressable>
    <FlatList data={list} keyExtractor={x=>x.id} renderItem={({item})=><SongRow song={item} onPress={()=>open(item)}/>} ListEmptyComponent={<Text style={s.sub}>Your playlist is waiting for its first song.</Text>}/>
  </View>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:22},back:{flexDirection:'row',alignItems:'center',gap:5},backText:{color:C.ink,fontWeight:'700'},art:{width:170,height:170,borderRadius:27,alignSelf:'center',marginTop:25,marginBottom:20,alignItems:'center',justifyContent:'center'},title:{fontSize:25,color:C.ink,fontWeight:'900',textAlign:'center'},sub:{color:C.muted,fontSize:12,textAlign:'center',marginTop:6},add:{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:6,backgroundColor:C.deepPurple,padding:12,borderRadius:14,marginVertical:20},addText:{color:'#FFFFFF',fontWeight:'800',fontSize:11}});