import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Message} from '../Message';
export function MessageList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message />
      <Message />
      <Message />
      <Message />
    </ScrollView>
  );
}