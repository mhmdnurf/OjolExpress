import React from 'react';
import {Platform, StatusBar as RNStatusBar} from 'react-native';

type StatusBarProps = {
  backgroundColor?: string;
  translucent?: boolean;
};

export default function StatusBar({
  backgroundColor = '#dc2626',
  translucent = false,
}: StatusBarProps) {
  return (
    <>
      {Platform.OS === 'android' ? (
        <RNStatusBar
          barStyle="light-content"
          backgroundColor={backgroundColor}
          translucent={translucent}
        />
      ) : (
        <RNStatusBar barStyle="light-content" backgroundColor="transparent" />
      )}
    </>
  );
}
