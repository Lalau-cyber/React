// src/App.jsx
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default function App() {
  const [page, setPage] = useState('home');

  return (
   <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" />
      <Header />
      
      <View style={styles.nav}>
        <Button title="Início" onPress={() => setPage('home')} color="#444" />
        <Button title="Filmes" onPress={() => setPage('movies')} color="#444" />
      </View>

      <View style={{ flex: 1 }}>
        {page === 'home' ? <Home /> : <Movies />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#ddd',
  }
});