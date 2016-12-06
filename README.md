# ionic-hideYourSecrets
Ionic2 application for android using Fingerprint-Authentication

Requirements for successful use: 
**Android device with fingerprint sensor**

The purpose of this application is providing an example app for using Ionic 2 with Android's Fingerprint-Authentication.
It is based on the standard tabs Ionic 2 app.
The app hides its content behind a Fingerprint-Authentication screen. Only the owner of the smartphone is able to get to the Todo-like pages behind it.

To achieve this the app uses the cordova plugin: https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth

The Todo-like pages are created based on the tutorial: http://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/


## Installationguide

### Download this repository

### Install a recent version of Node.js
https://nodejs.org/en/

### Install cordova and the Ionic CLI
    $ npm install -g ionic cordova

### Test in Browser: 
    $ ionic serve

### Install the cordova Android Platform Guide
https://cordova.apache.org/docs/en/latest/guide/platforms/android/

### Build the app on your android device
    $ ionic run android
