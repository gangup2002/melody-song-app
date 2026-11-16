import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C, shadow } from '../theme';

export default function PlaylistCard({ playlist, onPress }) {
  const colors = [playlist.tint, '#EADFFF', '#F9DCEB', '#D9E8F1'];
  return (
    <Pressable onPress={onPress} style={s.card}>
      <View style={[s.art, { backgroundColor:playlist.tint || colors[0] }]}>
        <Ionicons name="musical-notes" size={42} color="#FFFFFF" />
        <View style={s.spark}><Ionicons name="sparkles" size={18} color="#FFFFFF" /></View>
      </View>
      <Text style={s.name} numberOfLines={1}>{playlist.name}</Text>
      <Text style={s.sub} numberOfLines={1}>{playlist.subtitle || `${playlist.songIds.length} lovely songs`}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  card:{ width:'48%', marginBottom:18 },
  art:{ height:145, borderRadius:20, alignItems:'center', justifyContent:'center', ...shadow },
  spark:{ position:'absolute', right:17, top:17 },
  name:{ color:C.ink, fontWeight:'800', fontSize:14, marginTop:10 },
  sub:{ color:C.muted, fontSize:11, marginTop:4 }
});