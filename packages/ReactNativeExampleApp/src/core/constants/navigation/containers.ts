import { createNavigationContainerRef } from '@react-navigation/native';

import { ScreensParamList } from './screens';

export const navigationContainerRef = createNavigationContainerRef<ScreensParamList>();

export const navigationContainerQueue: Set<() => void> = new Set();
