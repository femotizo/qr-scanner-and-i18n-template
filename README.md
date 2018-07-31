# qr-scanner-and-i18n-template
A QR code scanner + i18n.js template for React Native


Please note, this will also function as a generic barcode scanner by the virtue of the above module supporting barcode scanning, however, this module was initially built as a QR code scanner.

## Getting started

### Requirements

#### iOS 10

With iOS 10 and higher you need to add the "Privacy - Camera Usage Description" key to the info.plist of your project. This should be found in 'your_project/ios/your_project/Info.plist'.  Add the following code:
  ```
  <key>NSCameraUsageDescription</key>
  <string>Your message to user when the camera is accessed for the first time</string>

  <!-- Include this only if you are planning to use the camera roll -->
  <key>NSPhotoLibraryUsageDescription</key>
  <string>Your message to user when the photo library is accessed for the first time</string>

  <!-- Include this only if you are planning to use the microphone for video recording -->
  <key>NSMicrophoneUsageDescription</key>
  <string>Your message to user when the microsphone is accessed for the first time</string>
```

#### Android 7

With Android 7 and higher you need to add the "Vibration" permission to your AndroidManifest.xml of your project. This should be found in your `android/app/src/main/AndroidManifest.xml` Add the following:

```
<uses-permission android:name="android.permission.VIBRATE"/>
```

### Needs link react-native-qrcode-scanner:
```
npm install react-native-qrcode-scanner --save

```
react-native link
react-native link react-native-camera
react-native link react-native-qrcode-scanner
react-native link react-native-permissions
```

## Thanks to
[react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)
[react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)

This QR code scanner was inspired by the QR code scanner within [Whatsapp](https://www.whatsapp.com/).

### To do
- Document other complex examples
- Add some tests
