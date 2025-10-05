/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {QueryProvider} from './src/providers/QueryProvider';
import {MarketsScreen} from './src/screens/MarketsScreen';

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={'dark-content'} />
        <MarketsScreen />
      </SafeAreaView>
    </QueryProvider>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
});

export default App;
