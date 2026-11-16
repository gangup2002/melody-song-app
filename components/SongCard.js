import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { C, shadow } from '../theme';

export default function SongCard({ song, onPress, width=142 }) {
  return (
    <Pressable onPress={onPress} style={[s.card, { width }]}>
      <Image source={{ uri:song.cover }} style={[s.cover, { width, height:width }]} />
      <Text numberOfLines={1} style={s.title}>{song.title}</Text>
      <Text numberOfLines={1} style={s.artist}>{song.artist}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  card:{ marginRight:14 },
  cover:{ borderRadius:20, backgroundColor:C.lavender, ...shadow },
  title:{ color:C.ink, fontSize:13, fontWeight:'800', marginTop:9 },
  artist:{ color:C.muted, fontSize:11, marginTop:3 }
});