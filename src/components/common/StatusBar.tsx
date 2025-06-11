import React from 'react';
import {Platform, StatusBar as RNStatusBar} from 'react-native';

type StatusBarProps = {
  backgroundColor?: string;
  translucent?: boolean;
  barStyle?: 'default' | 'light-content' | 'dark-content';
};

export default function StatusBar({
  backgroundColor = '#dc2626',
  translucent = false,
  barStyle = 'light-content',
}: StatusBarProps) {
  return (
    <>
      {Platform.OS === 'android' ? (
        <RNStatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColor}
          translucent={translucent}
        />
      ) : (
        <RNStatusBar barStyle="light-content" backgroundColor="transparent" />
      )}
    </>
  );
}
