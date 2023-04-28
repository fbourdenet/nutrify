import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MMKV } from 'react-native-mmkv'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

export const storage = new MMKV()

storage.set('user.name', 'Marc')

export default function App() {
  const [username, setUsername] = useState<string | undefined>();

  useEffect(() => {
    storage.set('user.name', 'Marc')
    setUsername(storage.getString('user.name'))// 'Marc'
  }, [])

  return (
    <NavigationContainer>
      <StatusBar style='light'></StatusBar>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
