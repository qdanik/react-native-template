### React Native Template

This React Native template is designed to help you quickly get started with building a mobile app using React Native. It comes with Lerna, a popular tool for managing multi-package repositories, which makes it easy to manage dependencies across multiple packages in your project.

In addition to Lerna, the template includes a basic setup for common features like a splash screen, theme, router, i18next, and Redux. These features are essential for building a high-quality mobile app, and the template provides a solid foundation for you to build upon.

### TodoList

- [] Verify that the app works on iOS and Android
- [] Rename Monorepo (see `How to rename a Monorepo?`)
- [] Add App Icon (see `How to add an App Icon?`)
- [] Add Splash Screen

#### How to rename a Monorepo?

- rename the package name in package.json and all existing packages with @my-app
- correct and execute `yarn rename`. Make sure that `self.moduleName = @"ReactNativeExampleApp";` is correct in AppDelegate.m 

#### How to add an App Icon?

- Replace the icon to `/packages/ReactNativeExampleApp/src/resources/app-logo.svg`
- run `yarn run app-icon`
- verify that the icon is correct in Xcode/Android Studio
