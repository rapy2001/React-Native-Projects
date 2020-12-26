import React from "react";
import {View} from "react-native";
import {AppLoading} from 'expo';
import * as Font from "expo-font";
import styles from "./public/style";
import Header from "./components/Header";
import Items from './components/Items';
import Footer from './components/Footer';
const loadFont = () => {
  return Font.loadAsync({
    'quicksand-bold':require('../../assets/Fonts/Quicksand-Bold.ttf')
  })
}
const App = () => {
  const [isLoading,setIsLoading] = React.useState(false);
  // if(isLoading)
  // {
  //   return (
  //     <View style = {styles.container}>
  //       <Header />
  //     </View>
  //   )
  // }
  // else {
  //   return (
  //     <AppLoading
  //       startAsync = {loadFont}
  //       onFinish = {() => setIsLoading(true)} 
  //     />
  //   )
  // }
  return (
    <View styles = {styles.container}>
      <Header />
      <Items />
      <Footer />
    </View>
  )
}


export default App;