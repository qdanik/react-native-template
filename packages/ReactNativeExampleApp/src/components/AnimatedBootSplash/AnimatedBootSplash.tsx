import React, { memo, useCallback, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import BootSplash from 'react-native-bootsplash';

const AnimatedBootSplashComponent = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const onAnimationEnd = useCallback(() => {
    setIsAppReady(true);
  }, []);

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('../../resources/bootsplash/bootsplash_manifest.json'),
    logo: require('../../resources/bootsplash/bootsplash_logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const { height } = Dimensions.get('window');

      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return isAppReady ? null : (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image {...logo} style={[logo.style, { transform: [{ translateY }] }]} />
    </Animated.View>
  );
};

export const AnimatedBootSplash = memo(AnimatedBootSplashComponent);
