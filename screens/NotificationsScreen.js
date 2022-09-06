import React from 'react';
import { Button, View } from 'react-native';

const NotificationsScreen=({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default NotificationsScreen;