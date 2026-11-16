import React from 'react';
import { Tabs, usePathname, useRouter } from 'expo-router';
import { View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../../theme';
import { useMusic } from '../../context/MusicContext';
import MiniPlayer from '../../components/MiniPlayer';

function TabShell() {
  const router = useRouter();
  const path = usePathname();
  const { currentSong } = useMusic();
  const hideMini = path.includes('/player/') || path.includes('/playlist/');
  return <View style={{ flex:1, backgroundColor:C.bg }}>
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:C.deepPurple,
      tabBarInactiveTintColor:'#A99DB0',
      tabBarStyle:{ height:Platform.OS==='ios'?86:68, paddingTop:9, paddingBottom:Platform.OS==='ios'?25:10, backgroundColor:'#FFFFFF', borderTopColor:'#F1E7F2', elevation:0 },
      tabBarLabelStyle:{ fontSize:10, fontWeight:'700' }
    }}>
      <Tabs.Screen name="index" options={{ title:'Home', tabBarIcon:({color,size})=><Ionicons name="home" size={size} color={color}/> }} />
      <Tabs.Screen name="explore" options={{ title:'Explore', tabBarIcon:({color,size})=><Ionicons name="search" size={size} color={color}/> }} />
      <Tabs.Screen name="playlists" options={{ title:'Playlists', tabBarIcon:({color,size})=><Ionicons name="albums" size={size} color={color}/> }} />
      <Tabs.Screen name="favorites" options={{ title:'Liked', tabBarIcon:({color,size})=><Ionicons name="heart" size={size} color={color}/> }} />
      <Tabs.Screen name="profile" options={{ title:'You', tabBarIcon:({color,size})=><Ionicons name="person" size={size} color={color}/> }} />
    </Tabs>
    {!hideMini && <MiniPlayer onOpen={() => router.push(`/player/${currentSong.id}`)} />}
  </View>;
}
export default function TabLayout() { return <TabShell />; }