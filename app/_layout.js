import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppState } from 'react-native';
import { MusicProvider } from '../context/MusicContext';
import { prepareNotifications } from '../utils/notifications';

export default function RootLayout() {
  useEffect(() => {
    prepareNotifications();
    const subscription = AppState.addEventListener('change', state => {
      console.log(`Melody AppState: ${state}`);
      if (state === 'active') console.log('Welcome back to Melody 💗');
    });
    return () => subscription.remove();
  }, []);

  return <MusicProvider>
    <StatusBar style="dark" />
    <Stack screenOptions={{ headerShown:false, contentStyle:{ backgroundColor:'#FFF8FC' } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="player/[id]" options={{ presentation:'card', animation:'slide_from_bottom' }} />
      <Stack.Screen name="playlist/[id]" options={{ animation:'slide_from_right' }} />
    </Stack>
  </MusicProvider>;
}