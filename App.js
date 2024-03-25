import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';


const ArrowUP = require("./assets/ArrowUP.png");
const right = require("./assets/Arrow DOWN.png");
const left = require("./assets/Arrows LEFT.png");
const down = require("./assets/Arrow RIGHT.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Jaydrians Robot</Text>
      
      <StatusBar style="auto" />

    <View style={{ flex:"1", backgroundcolor: "blue", padding: 60}}>
      <Image source={ArrowUP} />
    </View>

<Button 
  onPress={() => Alert.alert('move forward')}
  title="Moveforward"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button 
  onPress={() => Alert.alert('move back')}
  title="Move back"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
// hi