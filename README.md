# Melody 🎧

**Your music, your little world.**

Melody is a pastel pink and lavender music discovery/player demo built with React Native, Expo and Expo Router.

## Features
- Home feed with featured tracks and recommendations
- Explore screen with live title/artist search and genre filters
- Favorites with shared state
- Playlists screen with playlist creation and adding the current track
- Now Playing screen with play/pause, next/previous, seek, shuffle and repeat controls
- Persistent mini-player while browsing
- Local notifications for favorites and playlist creation
- AppState background/foreground listener

## Tech stack
- React Native + JavaScript
- Expo Router (file-based tabs and nested stack)
- React Context + useState for shared music state
- `expo-audio` for audio playback
- `expo-notifications` for local notifications
- `FlatList`, `Modal`, `Pressable`, `Image`, `View`, and `Text`

## Run locally
1. Install Node.js LTS.
2. Extract the ZIP.
3. Open a terminal in the `Melody` folder.
4. Run:
   ```bash
   npm install
   npx expo install --check
   npx expo start
   ```
5. Open with iOS Simulator (`i`) or Expo Go where supported.

If Expo reports that an Expo-managed package version is mismatched, run `npx expo install expo-audio expo-notifications expo-router @expo/vector-icons` and then restart.

## Audio note
The sample tracks use public demo audio URLs from SoundHelix. Playback requires an internet connection. Replace `audioUrl` values in `data/songs.js` with audio files you own or are licensed to use for a production release.

## Notification note
Allow notification permissions when prompted. Local notification behavior may differ between physical devices, simulators and web. Test notifications on a supported device.

## AppState
The root layout listens for React Native `AppState` changes and records foreground/background transitions in the console.

## Student details
- Name:J A G D Perera
- Student ID: PS/2022/102

