import * as React from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

//VOLUNTEERE-->ADD DETAILS
const AddDetailsVol = ({ navigation, route }) => {
  const d = new Date();
  const name = route.params.value.name;
  const age = route.params.value.age;
  const [date, setDate] = useState(
    `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`
  );
  const [ecconomical, setEcconomical] = useState('');
  const [educational, setEducational] = useState('');
  const [mental, setMental] = useState('');
  const [volName, setVolName] = useState('');
  const [caring, setCaring] = useState('');

  const onPressAdd = () => {
    const myDoc = collection(db, 'visitVol');
    const docData = {
      pid: `${route.params.value.pid}`,
      date,
      volName,
      name,
      age,
      ecconomical,
      educational,
      mental,
      caring,
    };

    addDoc(myDoc, docData)
      .then(() => {
        alert('Added');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={{ marginTop: '25%', flexDirection: 'row' }}>
          <Text style={{ marginRight: '55%' }}>Name:{name}</Text>
          <Text>Age:{age}</Text>
        </View>

        <TextInput
          style={styles.addInput}
          placeholder="Date"
          value={date}
          editable={false}
          onChangeText={(text) => setDate(text)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Volunteer Name"
          value={volName}
          onChangeText={(text) => setVolName(text)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Ecconomical"
          value={ecconomical}
          onChangeText={(text) => setEcconomical(text)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Educational"
          vlaue={educational}
          onChangeText={(text) => setEducational(text)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Mental Condition"
          value={mental}
          onChangeText={(text) => setMental(text)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Caring of the Patient"
          value={caring}
          onChangeText={(text) => setCaring(text)}
        />

        <View style={styles.APButtonField}>
          <TouchableOpacity
            style={styles.APButton}
            onPress={() => {
              navigation.navigate('MenuScreenVol');
            }}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.APButton} onPress={onPressAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddDetailsVol;
//family status
