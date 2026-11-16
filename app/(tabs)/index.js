import React from 'react';
import { ScrollView, View, Text, Image, Pressable, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import SongCard from '../../components/SongCard';
import SongRow from '../../components/SongRow';
import { C, shadow } from '../../theme';

export default function HomeScreen() {
  const router = useRouter();
  const { songs, playSong, recent } = useMusic();
  const open = song => { playSong(song); router.push(`/player/${song.id}`); };
  const featured = songs[3];
  const recentSongs = recent.map(id => songs.find(s => s.id===id)).filter(Boolean);
  return <ScrollView style={s.page} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
    <View style={s.top}><View><Text style={s.hello}>MONDAY MOOD ☁️</Text><Text style={s.heading}>Hey, music lover <Text>💗</Text></Text><Text style={s.caption}>A little music for your little world.</Text></View><View style={s.avatar}><Ionicons name="headset" size={23} color={C.deepPurple}/></View></View>
    <Pressable onPress={() => open(featured)} style={s.hero}>
      <Image source={{uri:featured.cover}} style={s.heroImage}/>
      <View style={s.heroShade}/>
      <View style={s.heroText}><Text style={s.eyebrow}>YOUR DAILY DAYDREAM</Text><Text style={s.heroTitle}>A softer kind{'\n'}of soundtrack.</Text><Text style={s.heroSub}>A dreamy mix picked for you</Text><View style={s.listen}><Text style={s.listenText}>Listen now</Text><Ionicons name="play" size={13} color={C.deepPurple}/></View></View>
    </Pressable>
    <Section title="Recently played" action="See all" onAction={()=>router.push('/(tabs)/explore')}/>
    <FlatList horizontal data={recentSongs} keyExtractor={x=>x.id} renderItem={({item})=><SongCard song={item} onPress={()=>open(item)} />} showsHorizontalScrollIndicator={false} />
    <Section title="Made for your mood" action="Explore" onAction={()=>router.push('/(tabs)/explore')}/>
    <FlatList horizontal data={songs.slice(0,7)} keyExtractor={x=>x.id} renderItem={({item})=><SongCard song={item} onPress={()=>open(item)} />} showsHorizontalScrollIndicator={false}/>
    <Section title="Little songs to love" />
    {songs.slice(7,12).map(song=><SongRow key={song.id} song={song} onPress={()=>open(song)}/>)}
    <View style={{height:20}}/>
  </ScrollView>;
}
function Section({title,action,onAction}) { return <View style={s.sectionHead}><Text style={s.sectionTitle}>{title}</Text>{action && <Pressable onPress={onAction}><Text style={s.action}>{action}</Text></Pressable>}</View>; }
const s = StyleSheet.create({
  page:{ flex:1, backgroundColor:C.bg }, content:{ padding:20, paddingTop:18, paddingBottom:12 },
  top:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:22 },
  hello:{ color:C.hotPink, fontWeight:'900', fontSize:10, letterSpacing:1.6 },
  heading:{ color:C.ink, fontWeight:'900', fontSize:25, marginTop:6 },
  caption:{ color:C.muted, fontSize:12, marginTop:5 },
  avatar:{ width:48,height:48,borderRadius:17,backgroundColor:'#EDE3FF',alignItems:'center',justifyContent:'center' },
  hero:{ height:210,borderRadius:25,overflow:'hidden',marginBottom:26,backgroundColor:C.lavender,...shadow },
  heroImage:{ width:'100%',height:'100%',position:'absolute' }, heroShade:{...StyleSheet.absoluteFillObject,backgroundColor:'#34224A70'},
  heroText:{ padding:20, flex:1, justifyContent:'center' }, eyebrow:{ color:'#FFE5F1',fontSize:9,fontWeight:'900',letterSpacing:1.8 },
  heroTitle:{ color:'#FFFFFF',fontSize:27,fontWeight:'900',marginTop:9,lineHeight:31 }, heroSub:{ color:'#F8EAF5',fontSize:11,marginTop:7 },
  listen:{ flexDirection:'row',alignItems:'center',gap:8,backgroundColor:'#FFFFFF',alignSelf:'flex-start',paddingHorizontal:15,paddingVertical:9,borderRadius:18,marginTop:13 },
  listenText:{ color:C.deepPurple,fontSize:11,fontWeight:'900' },
  sectionHead:{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5,marginBottom:14 },
  sectionTitle:{ color:C.ink,fontSize:18,fontWeight:'900' }, action:{ color:C.purple,fontSize:11,fontWeight:'800' }
});