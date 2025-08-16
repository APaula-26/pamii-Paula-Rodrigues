import React from 'react';
import {StyleSheet, Text, TextInput, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <div>
        <Text style={styles.text}>
          Inspiração
        </Text>
        </div>
        <div>
        <Text style={styles.text}>
          <h1>Inspire-se e defina seu estilo!</h1> 

          Encontre o estilo do casamento dos seus sonhos 
        </Text>
        </div>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#ffff',
  },
  text: {
    fontSize: 20,
    padding: 12,
  },
});

export default App;