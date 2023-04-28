import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

storage.set('user.name', 'Marc')

export default function App() {
  const [username, setUsername] = useState<string | undefined>();

  useEffect(() => {
    storage.set('user.name', 'Marc')
    setUsername(storage.getString('user.name'))// 'Marc'
  }, [])

  return (
    <View style={styles.container}>
      {username &&
        <Text>Welcome back {username} !</Text>
      }
      <StatusBar style="auto" />
    </View>
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
