import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme';
import { genres } from '../data/songs';

export default function GenreModal({ visible, selected, onSelect, onClose }) {
  return <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
    <Pressable style={s.backdrop} onPress={onClose}>
      <Pressable style={s.sheet} onPress={() => {}}>
        <View style={s.handle} />
        <View style={s.head}><Text style={s.title}>Find your vibe ✨</Text><Pressable onPress={onClose}><Ionicons name="close" size={23} color={C.ink}/></Pressable></View>
        <Text style={s.sub}>Choose a genre for your next little soundtrack.</Text>
        <View style={s.grid}>{genres.map(g => <Pressable key={g} onPress={() => onSelect(g)} style={[s.chip, selected===g && s.active]}><Text style={[s.chipText, selected===g && s.activeText]}>{g}</Text></Pressable>)}</View>
        <Pressable style={s.done} onPress={onClose}><Text style={s.doneText}>Show me the music</Text></Pressable>
      </Pressable>
    </Pressable>
  </Modal>;
}
const s = StyleSheet.create({
  backdrop:{ flex:1, backgroundColor:'#2B1D3580', justifyContent:'flex-end' },
  sheet:{ backgroundColor:C.bg, borderTopLeftRadius:28, borderTopRightRadius:28, padding:23, paddingBottom:36 },
  handle:{ width:42, height:5, borderRadius:5, backgroundColor:'#E4D6E8', alignSelf:'center', marginBottom:22 },
  head:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  title:{ fontSize:21, fontWeight:'900', color:C.ink },
  sub:{ color:C.muted, fontSize:12, marginTop:7, marginBottom:20 },
  grid:{ flexDirection:'row', flexWrap:'wrap', gap:10 },
  chip:{ borderWidth:1, borderColor:C.line, paddingHorizontal:17, paddingVertical:11, borderRadius:20, backgroundColor:'#FFFFFF' },
  active:{ backgroundColor:C.deepPurple, borderColor:C.deepPurple },
  chipText:{ color:C.ink, fontWeight:'700', fontSize:12 },
  activeText:{ color:'#FFFFFF' },
  done:{ backgroundColor:C.deepPurple, padding:16, borderRadius:17, alignItems:'center', marginTop:24 },
  doneText:{ color:'#FFFFFF', fontWeight:'800' }
});