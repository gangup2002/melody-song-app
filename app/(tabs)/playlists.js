import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Modal, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMusic } from '../../context/MusicContext';
import PlaylistCard from '../../components/PlaylistCard';
import { C } from '../../theme';

export default function PlaylistsScreen() {
  const router=useRouter();
  const { playlists,createPlaylist }=useMusic();
  const [visible,setVisible]=useState(false);
  const [name,setName]=useState('');
  const create=()=>{if(name.trim()){createPlaylist(name);setName('');setVisible(false);}};
  return <View style={s.page}>
    <View style={s.header}><View><Text style={s.kicker}>YOUR OWN LITTLE MIXES</Text><Text style={s.title}>Playlists</Text></View><Pressable style={s.add} onPress={()=>setVisible(true)}><Ionicons name="add" size={23} color="#FFFFFF"/></Pressable></View>
    <Text style={s.sub}>Collections for every version of you.</Text>
    <FlatList data={playlists} numColumns={2} columnWrapperStyle={{justifyContent:'space-between'}} keyExtractor={x=>x.id} renderItem={({item})=><PlaylistCard playlist={item} onPress={()=>router.push(`/playlist/${item.id}`)}/>} contentContainerStyle={{paddingTop:22,paddingBottom:30}} ListEmptyComponent={<Text style={s.sub}>Create your first playlist ✨</Text>}/>
    <Modal transparent visible={visible} animationType="fade" onRequestClose={()=>setVisible(false)}>
      <View style={s.backdrop}><View style={s.modal}><Text style={s.modalTitle}>A new little world 💜</Text><Text style={s.sub}>Give your playlist a name.</Text><TextInput value={name} onChangeText={setName} placeholder="e.g. late night feelings" placeholderTextColor="#B3A7B9" style={s.input} autoFocus/><View style={s.actions}><Pressable onPress={()=>setVisible(false)} style={s.cancel}><Text style={s.cancelText}>Cancel</Text></Pressable><Pressable onPress={create} style={s.create}><Text style={s.createText}>Create</Text></Pressable></View></View></View>
    </Modal>
  </View>;
}
const s=StyleSheet.create({
  page:{flex:1,backgroundColor:C.bg,padding:20,paddingTop:22},header:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  kicker:{color:C.hotPink,fontWeight:'900',fontSize:10,letterSpacing:1.4},title:{color:C.ink,fontSize:29,fontWeight:'900',marginTop:6},
  add:{width:43,height:43,borderRadius:15,backgroundColor:C.deepPurple,alignItems:'center',justifyContent:'center'},sub:{color:C.muted,fontSize:12,marginTop:5},
  backdrop:{flex:1,backgroundColor:'#2B1D3580',justifyContent:'center',padding:24},modal:{backgroundColor:C.bg,borderRadius:25,padding:22},
  modalTitle:{fontSize:20,color:C.ink,fontWeight:'900'},input:{height:50,borderRadius:14,backgroundColor:'#FFFFFF',borderWidth:1,borderColor:C.line,paddingHorizontal:14,marginTop:18,color:C.ink},
  actions:{flexDirection:'row',justifyContent:'flex-end',gap:10,marginTop:20},cancel:{padding:13},cancelText:{color:C.muted,fontWeight:'700'},create:{backgroundColor:C.deepPurple,paddingHorizontal:22,paddingVertical:13,borderRadius:14},createText:{color:'#FFFFFF',fontWeight:'800'}
});