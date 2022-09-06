import * as React from 'react';
import { useState } from "react";
import { Button,TouchableOpacity,Text, View } from 'react-native';
import styles from './styles';
import {useAuth} from './LoginScreenMain'

const ProfileScreen=({ navigation })=> {
  const currentUser=useAuth();
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={()=> navigation.navigate('CenterDetails')} >
      <Text style={{marginTop:50,backgroundColor:'#206A8A',color:'#fff',padding:10,borderRadius:5}}>Center Details</Text>
      </TouchableOpacity>
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('MenuScreenDoctor')}>
          <Text style={styles.textProf}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('MenuScreenNurse')}>
          <Text style={styles.textProf}>Nurse</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('MenuScreenVol')}>
          <Text style={styles.textProf}>Volunteer</Text>
        </TouchableOpacity>
       
    </View>
  );
}

export default ProfileScreen;