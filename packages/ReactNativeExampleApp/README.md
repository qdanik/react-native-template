### React Native Template

This React Native template is designed to help you quickly get started with building a mobile app using React Native. It comes with Lerna, a popular tool for managing multi-package repositories, which makes it easy to manage dependencies across multiple packages in your project.

In addition to Lerna, the template includes a basic setup for common features like a splash screen, theme, router, i18next, and Redux. These features are essential for building a high-quality mobile app, and the template provides a solid foundation for you to build upon.

### TodoList

- [] Verify that the app works on iOS and Android
- [] Rename Monorepo (see `How to rename a Monorepo?`)
- [] Add App Icon (see `How to add an App Icon?`)
- [] Add Splash Screen (see `How to add a Splash Screen?`)

#### How to rename a Monorepo?

- rename the package name in package.json and all existing `@my-app` packages (prettier/eslint config, etc.)
- correct and execute `yarn rename`. Make sure that `self.moduleName = @"ReactNativeExampleApp";` is correct in AppDelegate.m
- find `<key>CFBundleDisplayName</key>` in `ios/ReactNativeExampleApp/Info.plist` and change the value to `${APP_NAME}`

#### How to add an App Icon?

- Replace the icon to `/packages/ReactNativeExampleApp/src/core/theme/global/icons/logo/app-logo.svg`
- run `yarn run app-icon`
- verify that the icon is correct in Xcode/Android Studio

#### How to add a Splash Screen?
- Replace the splash screen to `/packages/ReactNativeExampleApp/src/core/theme/global/icons/logo/splash-screen.svg`
- run `yarn run bootsplash`
- verify that the splash screen is correct in Xcode/Android Studio