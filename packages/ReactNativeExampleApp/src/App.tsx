import './core/i18n';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { initializeNotifications, logger } from './core';
import { AppNavigator, KeyboardWrapper, ThemeProvider } from './presentation';
import { persistor, store } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  useEffect(() => {
    initializeNotifications().catch(logger.error);
  });

  return (
    <KeyboardWrapper>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
              <AppNavigator />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </KeyboardWrapper>
  );
}

export default App;
