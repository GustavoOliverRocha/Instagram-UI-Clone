import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import Routes from './Routes.js';


;

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#458612'/>
      <Routes/>
    </>
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
