/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
  SafeAreaView,
  StyleSheet,
  View
 } from 'react-native';

 // Pages
 import CategoryDetail from './src/pages/CategoryDetail'

 const App = () => {

   return (
     <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <CategoryDetail />
        </View>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 5
   }
 })

 export default App;
