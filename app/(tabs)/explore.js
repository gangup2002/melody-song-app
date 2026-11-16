import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import SongRow from '../../components/SongRow';
import GenreModal from '../../components/GenreModal';
import { C } from '../../theme';

export default function ExploreScreen() {
  const router = useRouter();
  const { songs, playSong } = useMusic();
  const [query,setQuery] = useState('');
  const [genre,setGenre] = useState('All');
  const [modal,setModal] = useState(false);
  const filtered = useMemo(()=>songs.filter(s=>(genre==='All'||s.genre===genre) && `${s.title} ${s.artist} ${s.album}`.toLowerCase().includes(query.toLowerCase())),[songs,genre,query]);
  const open = song => { playSong(song); router.push(`/player/${song.id}`); };
  return <View style={s.page}>
    <Text style={s.kicker}>FIND YOUR FEELING ✨</Text><Text style={s.title}>Explore</Text><Text style={s.subtitle}>What sounds like you today?</Text>
    <View style={s.search}><Ionicons name="search" size={19} color={C.purple}/><TextInput value={query} onChangeText={setQuery} placeholder="Songs, artists, albums..." placeholderTextColor="#B3A7B9" style={s.input}/>{query.length>0&&<Pressable onPress={()=>setQuery('')}><Ionicons name="close-circle" size={18} color={C.muted}/></Pressable>}</View>
    <View style={s.filterLine}><Text style={s.results}>{filtered.length} songs for you</Text><Pressable onPress={()=>setModal(true)} style={s.filter}><Ionicons name="options-outline" size={16} color={C.deepPurple}/><Text style={s.filterText}>{genre==='All'?'Genres':genre}</Text></Pressable></View>
    <FlatList data={filtered} keyExtractor={x=>x.id} renderItem={({item})=><SongRow song={item} onPress={()=>open(item)}/>} ListEmptyComponent={<View style={s.empty}><Text style={{fontSize:32}}>🎧</Text><Text style={s.emptyTitle}>No songs found</Text><Text style={s.subtitle}>Try another search or genre.</Text></View>} showsVerticalScrollIndicator={false}/>
    <GenreModal visible={modal} selected={genre} onSelect={setGenre} onClose={()=>setModal(false)}/>
  </View>;
}
const s=StyleSheet.create({
  page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:22},
  kicker:{color:C.hotPink,fontSize:10,fontWeight:'900',letterSpacing:1.5},title:{fontSize:30,fontWeight:'900',color:C.ink,marginTop:5},subtitle:{color:C.muted,fontSize:12,marginTop:4},
  search:{height:52,backgroundColor:'#FFFFFF',borderRadius:17,marginTop:20,marginBottom:18,paddingHorizontal:15,flexDirection:'row',alignItems:'center',gap:10,borderWidth:1,borderColor:C.line},
  input:{flex:1,color:C.ink,fontSize:13},filterLine:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:8},
  results:{color:C.muted,fontSize:11,fontWeight:'700'},filter:{flexDirection:'row',alignItems:'center',gap:6,backgroundColor:'#EEE7FC',paddingHorizontal:13,paddingVertical:9,borderRadius:15},
  filterText:{color:C.deepPurple,fontSize:11,fontWeight:'800'},empty:{alignItems:'center',paddingTop:90,gap:8},emptyTitle:{fontSize:17,fontWeight:'900',color:C.ink}
});