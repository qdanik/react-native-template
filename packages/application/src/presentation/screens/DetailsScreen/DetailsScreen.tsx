import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS, ScreensNavigationProp } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function DetailsScreen() {
  const navigation = useNavigation<ScreensNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate(SCREENS.Home);
        }}
      />
    </View>
  );
}
