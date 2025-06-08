import React from 'react';
import {Platform, StatusBar as RNStatusBar} from 'react-native';

export default function StatusBar() {
  return (
    <>
      {Platform.OS === 'android' ? (
        <RNStatusBar
          barStyle="light-content"
          backgroundColor="#dc2626"
          translucent={false}
        />
      ) : (
        <RNStatusBar barStyle="light-content" backgroundColor="transparent" />
      )}
    </>
  );
}
