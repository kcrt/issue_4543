import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Select, Text } from 'native-base';

export default function App() {
  return (
  <NativeBaseProvider>
    <SafeAreaView>
      <Text>Select:</Text>
      <Select>
        <Select.Item key="1" label="1" value="1" />
      </Select>
    </SafeAreaView>
  </NativeBaseProvider>
  );
}
