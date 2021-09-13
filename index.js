/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

 messaging().onMessage(async remoteMessage => {
    alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

messaging().setBackgroundMessageHandler(async remoteMessage => {


    console.log('Message handled in the background!', remoteMessage);
    var Sound = require('react-native-sound');
    var whoosh = new Sound('test.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  });
  


AppRegistry.registerComponent(appName, () => App);
