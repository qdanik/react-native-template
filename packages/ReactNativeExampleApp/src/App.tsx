import './core/i18n';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { AppNavigator, KeyboardWrapper, ThemeProvider } from './presentation';
import { store } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  return (
    <KeyboardWrapper>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </Provider>
      </GestureHandlerRootView>
    </KeyboardWrapper>
  );
}

export default App;
