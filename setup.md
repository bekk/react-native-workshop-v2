# React-native setup
Please follow Facebooks guide for [getting started](https://facebook.github.io/react-native/docs/getting-started.html)

**!!IMPORTANT**
Developing React Native projects requires:
 - Java 1.7 or later (for android)
 - Git
 - npm v4
 - Node 4 or greater. (I use node 5.9.1 and it works)



## node
To manage node versions you can use [n](https://www.npmjs.com/package/n)

## Android
Development for android devices requires the Android SDK, [download Android Studio or the Android SDK](http://developer.android.com/sdk/index.html).

The setup for windows was more tedious than on OSX, we therefore recommend using OSX if possible.
Notes we took from our troubleshooting during the setup-process on windows and OSX can be found here;

* [Windows](trouble-windows-android.md)
* [OSX](trouble-osx-android.md)

1. Ensure that you got the Android SDK installed and ANDROID_HOME pointing to the SDK.
2. Configure the SDK, download these packages with API-level 23 or higher;
    * Android SDK tools
    * Android SDK Platform-tools
    * Android SDK Build-tools
    * SDK Platform
    * Intel x86 Atom_64 System Image
    * Intel x86 Atom System Image
    * Local Maven repository for Support Libraries
3. Configure an emulator image (Tip: Set Back Camera to Webcam to be able to take pictures during the workshop)
4. Start the emulator
5. Clone the repository; `git clone git@github.com:bekk/react-native-workshop-v2.git`
6. Run `npm install && npm install react-native-cli -g` to install dependencies

### Windows
1. Run `react-native start`
2. Run `react-native run-android` in another shell, if this fails try `cd android && ./gradlew installDebug`
3. Verify that the app is running in the emulator

If you have any trouble check [this](trouble-windows-android.md)

### OSX
1. Run `bash android/run.sh`, this checks your configuration and starts react-native
2. Verify that the app is running in the emulator

If you have any trouble check [this](trouble-osx-android.md)

## IOS
Devlopment for IOS devices requires XCode (>8.x.x) to be installed, find it in the [App Store](https://itunes.apple.com/no/app/xcode/id497799835).

1. Clone the repository; `git clone git@github.com:bekk/react-native-workshop-v2.git`
2. Run `npm install && npm install react-native-cli -g` to install dependencies
3. Run `react-native run-ios`
4. Verify that the app is running in the simulator

If steps 3 returns an error, try starting XCode and start an emulator before
