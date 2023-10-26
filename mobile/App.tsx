import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  
  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <Text className="text-zinc-50 text-4xl font-bold font-alt">
        essas papagaiada AE
      </Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
