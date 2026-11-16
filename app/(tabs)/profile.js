import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMusic } from '../../context/MusicContext';
import { C } from '../../theme';

export default function ProfileScreen() {
  const {favorites,playlists,recent}=useMusic();
  return <View style={s.page}>
    <Text style={s.kicker}>A LITTLE ABOUT YOU</Text><Text style={s.title}>Your space</Text>
    <View style={s.profile}><View style={s.avatar}><Ionicons name="person" size={37} color={C.deepPurple}/></View><Text style={s.name}>Music Lover</Text><Text style={s.handle}>@yourlittlemelody</Text><Text style={s.note}>Collecting songs & little moments ✨</Text></View>
    <View style={s.stats}><Stat value={favorites.length} label="Liked songs"/><Stat value={playlists.length} label="Playlists"/><Stat value={recent.length} label="Recently played"/></View>
    <View style={s.card}><Ionicons name="heart" size={21} color={C.hotPink}/><View style={{flex:1}}><Text style={s.cardTitle}>Your music, your mood</Text><Text style={s.cardSub}>Every playlist tells a little story.</Text></View><Ionicons name="sparkles" size={19} color={C.purple}/></View>
    <Text style={s.footer}>MELODY · YOUR MUSIC, YOUR LITTLE WORLD 💗</Text>
  </View>;
}
function Stat({value,label}) { return <View style={s.stat}><Text style={s.statValue}>{value}</Text><Text style={s.statLabel}>{label}</Text></View>; }
const s=StyleSheet.create({
  page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:22},kicker:{color:C.hotPink,fontSize:10,fontWeight:'900',letterSpacing:1.4},title:{fontSize:29,color:C.ink,fontWeight:'900',marginTop:6},
  profile:{alignItems:'center',paddingVertical:32},avatar:{width:92,height:92,borderRadius:32,backgroundColor:'#E7DCFF',alignItems:'center',justifyContent:'center',marginBottom:13},
  name:{fontSize:21,color:C.ink,fontWeight:'900'},handle:{fontSize:12,color:C.purple,marginTop:4},note:{fontSize:12,color:C.muted,marginTop:9},
  stats:{flexDirection:'row',backgroundColor:'#FFFFFF',borderRadius:20,paddingVertical:19,borderWidth:1,borderColor:C.line},
  stat:{flex:1,alignItems:'center',gap:5},statValue:{fontSize:21,color:C.deepPurple,fontWeight:'900'},statLabel:{fontSize:10,color:C.muted},
  card:{flexDirection:'row',alignItems:'center',gap:13,backgroundColor:'#F5EDFF',borderRadius:18,padding:17,marginTop:22},
  cardTitle:{fontSize:13,color:C.ink,fontWeight:'900'},cardSub:{fontSize:11,color:C.muted,marginTop:4},footer:{textAlign:'center',color:'#B6A8BC',fontSize:9,fontWeight:'800',letterSpacing:1.2,marginTop:35}
});