import * as React from 'react';
import { Button, TextInput, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

//CREATE A CENTER FROM 1ST LOGIN PAGE
const CreateCenter = ({ navigation }) => {
  const [centerId, setCenterId] = useState('');
  const [centerName, setCenterName] = useState('');
  const [place, setPlace] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setPassword] = useState('');
  const [ConPassword, setConPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const myDoc = doc(db, 'CenterAuth', `${user.uid}`);
        const docData = {
          uid: `${user.uid}`,
          email,
          centerName,
          centerId,
        };
        setDoc(myDoc, docData);
        // ...
      })
      .then(() => {
        alert('A Center is created');
        navigation.navigate('LoginScreenMain');
      })
      .catch((error) => {
        alert(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error ${errorCode} : ${errorMessege} `);
        // ..
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.textContent}>
        <Text style={styles.createHead}>Create a Center</Text>
      </View>

      <TextInput
        style={styles.addInput}
        placeholder="Center ID"
        autoCapitalize="none"
        value={centerId}
        onChangeText={(text) => setCenterId(text)}
      />
      <TextInput
        style={styles.addInput}
        placeholder="Name of the center"
        value={centerName}
        onChangeText={(text) => setCenterName(text)}
      />
      {/* <TextInput style = {styles.createInput}
                placeholder = "Place"
                onChangeText={place => setPlace(place)}
             /> 
                 <TextInput style = {styles.createInput}
                placeholder = "PinCode"
                onChangeText={pincode => setPincode(pincode)}
             />  */}
      <TextInput
        style={styles.addInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.addInput}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* <TextInput
        style={styles.addInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={ConPassword}
        onChangeText={(text) => setConPassword(text)}
      /> */}

      <View style={styles.buttonField}>
        <TouchableOpacity
          style={styles.CCButton}
          onPress={() => navigation.navigate('LoginScreenMain')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.CCButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateCenter;
