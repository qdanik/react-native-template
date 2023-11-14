import 'core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { KeyboardWrapper } from './components';
import { AppNavigator, ThemeProvider } from './presentation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  return (
    <KeyboardWrapper>
      <GestureHandlerRootView style={styles.container}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </GestureHandlerRootView>
    </KeyboardWrapper>
  );
}

export default App;
