import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function prepareNotifications() {
  try {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'Melody updates',
        importance: Notifications.AndroidImportance.DEFAULT
      });
    }
    const current = await Notifications.getPermissionsAsync();
    if (current.status !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
  } catch (e) {
    console.log('Notification permission setup:', e?.message || e);
  }
}

export async function sendLocalNotification(title, body) {
  try {
    const permission = await Notifications.getPermissionsAsync();
    if (permission.status !== 'granted') {
      const requested = await Notifications.requestPermissionsAsync();
      if (requested.status !== 'granted') return;
    }
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: null
    });
  } catch (e) {
    console.log('Could not send notification:', e?.message || e);
  }
}