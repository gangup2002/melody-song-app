import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import SongRow from '../../components/SongRow';
import { C } from '../../theme';

export default function FavoritesScreen() {
  const router=useRouter();
  const { songs,favorites,playSong }=useMusic();
  const liked=songs.filter(song=>favorites.includes(song.id));
  const open=song=>{playSong(song);router.push(`/player/${song.id}`);};
  return <View style={s.page}>
    <Text style={s.kicker}>YOUR HEART KNOWS 💗</Text><Text style={s.title}>Liked songs</Text><Text style={s.sub}>{liked.length} songs saved in your little collection</Text>
    <FlatList data={liked} keyExtractor={x=>x.id} renderItem={({item})=><SongRow song={item} onPress={()=>open(item)}/>} ListEmptyComponent={<View style={s.empty}><Text style={{fontSize:42}}>♡</Text><Text style={s.emptyTitle}>Your favourites live here</Text><Text style={s.sub}>Tap the heart on any song to save it.</Text></View>} contentContainerStyle={{paddingTop:20,paddingBottom:20}}/>
  </View>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:22},kicker:{color:C.hotPink,fontWeight:'900',fontSize:10,letterSpacing:1.4},title:{fontSize:29,fontWeight:'900',color:C.ink,marginTop:6},sub:{color:C.muted,fontSize:12,marginTop:5},empty:{alignItems:'center',paddingTop:100,gap:8},emptyTitle:{color:C.ink,fontWeight:'900',fontSize:17}});