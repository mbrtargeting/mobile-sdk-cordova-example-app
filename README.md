## How to develop plugin with intelisense

You should prepare your example app to have proper platform by running `npm run prepare:android` (it will create `/platform/android` folder) before trying to link plugin.
- You don't have to run it if you already have platform folder
---
It is expected that plugin is in seperate folder named `mobile-sdk-cordova-plugin`. Scripts in `package.json` rely on this folder structure:
```
[some-path]/mobile-sdk-cordova-example-app
    |------/mobile-sdk-cordova-plugin
```
---
- If your plugin is already added to the example app run `npm run rm-plugin` to remove it and then run `npm run link-plugin` (in verbose message you should see that your folders are Linked) to add plugin to example app and link it with source folder `/mobile-sdk-cordova-plugin`. After linking the plugin you can open `/mobile-sdk-cordova-example-app/platforms/android` folder in Android Studio and make your changes with full intelisense. When you are done with changes go to the plugin folder and commit/push.
    - If you have nothing to commit after you made changes then the symlink probably does not work. Maybe try again to remove and link, look for `Linking` in the verbose message. If it is not there, something is wrong and you have to investigate.
- If you want to see the changes in emulated device run `npm run run:android` instead of `npm run buildnrun:android` (this would remove your /platforms, /plugins folders and you would lose symlinks)