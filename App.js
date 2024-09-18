import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Styles from './Styles';
import Components from './components';

const App = () => {
  const { Main } = Styles;
  const { Header, History, Cards, Latest, Payment } = Components;
  return (
    <SafeAreaView style={Main.safeAreaContainer}>
      <Header/>
      <History/>
      <Cards/>
      <Latest/>
      <Payment/>
    </SafeAreaView>
  );
};

export default App;
