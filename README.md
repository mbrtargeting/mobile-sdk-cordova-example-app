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

## Problems with building cordova admob plus plugin

### Application fails on: No class found for Plugin
You have to enable kotlin for Cordova in `config.xml` for Android platform
```
    <platform name="android">
        <preference name="GradlePluginKotlinEnabled" value="true" />
        ....
    </platform>
```

### Build fails on: The binary version of its metadata is x.x.x, expected version is y.y.y.
I haven't found good solution. It is probably some problem with caching in Gradle. You can add specific kotlin x.x.x version to `config.xml` for Android platform
```
    <platform name="android">
        <preference name="GradlePluginKotlinVersion" value="x.x.x" />
        ....
    </platform>

```
If your kotlin version is > 1.7.21 than the build will start failing again because of some deprecated kotlin extension. You have to go to `/platforms/android/app/build.gradle` and edit
```
    if (cordovaConfig.IS_GRADLE_PLUGIN_KOTLIN_ENABLED) {
        apply plugin: 'kotlin-android'
        apply plugin: 'kotlin-android-extensions' //remove this line
    }

    android {
        //add to android section
        buildFeatures {
            viewBinding true
        }

        ....
    }

```
After this change you have to deploy app to emulator by running `npm run run:android`.