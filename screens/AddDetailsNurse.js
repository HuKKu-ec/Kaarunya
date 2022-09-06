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

//NURSE-->ADD DETAILS
const AddDetailsNurse = ({ navigation, route }) => {
  const d = new Date();
  const name = route.params.value.name;
  const age = route.params.value.age;
  const [date, setDate] = useState(
    `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`
  );
  const [nurseName, setNurseName] = useState('');
  const [teamMemb, setTeamMemb] = useState('');
  const [medicines, setMedicines] = useState('');
  const [badHabit, setBadHabit] = useState('');
  const [primary, setPrimary] = useState('');
  const [pulse, setPulse] = useState('');
  const [bp, setBp] = useState('');
  const [temp, setTemp] = useState('');
  const [clean, setClean] = useState('');
  const [phyIssue, setPhyIssue] = useState('');
  const [phyCond, setPhyCond] = useState('');
  const [illness, setIllness] = useState('');
  const [hygience, setHygience] = useState('');

  const onPressAdd = () => {
    const myDoc = collection(db, 'visitNurse');
    const docData = {
      pid: `${route.params.value.pid}`,
      date,
      nurseName,
      name,
      age,
      teamMemb,
      medicines,
      badHabit,
      primary,
      pulse,
      bp,
      temp,
      clean,
      phyIssue,
      phyCond,
      illness,
      hygience,
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
      <View style={styles.background} styles={{ marginTop: '25%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: '5%' }}>Name:{name}</Text>
          <Text style={{ marginLeft: '10%' }}>Age:{age}</Text>
        </View>

        <View style={styles.createInputField}>
          <TextInput
            style={styles.addInput}
            placeholder="Date"
            value={date}
            editable={false}
            onChangeText={(text) => setDate(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Nurse Name"
            value={nurseName}
            onChangeText={(text) => setNurseName(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Team Members"
            value={teamMemb}
            onChangeText={(text) => setTeamMemb(text)}
          />
          <Text style={{ fontSize: 25 }}>Current Medicines</Text>

          {/* <View style={{width:'90%',backgroundColor:'#e5e5e5',alignItems:'center',justifyContent:'center',borderRadius:20,paddingTop:'25%'}}>
<TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Dose"
      onChangeText={text => setText(text)}
   /> 
             <TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Medicine"
      onChangeText={text => setText(text)}
   /> 
                <TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Availablity"
      onChangeText={text => setText(text)}
   /> 
   
    <View style={styles.APButtonField} >

     <TouchableOpacity   style={styles.APButton}>
         <Text style={styles.buttonText}>Add</Text>
     </TouchableOpacity>
     </View>
     </View> */}
          <TextInput
            style={styles.addInput}
            placeholder="Medicines"
            value={medicines}
            onChangeText={(text) => setMedicines(text)}
          />

          <TextInput
            style={styles.addInput}
            placeholder="Bad Habits"
            value={badHabit}
            onChangeText={(text) => setBadHabit(text)}
          />
          <Text style={{ fontSize: 25 }}>Primary Condition </Text>
          <TextInput
            style={styles.addInput}
            placeholder="Primary Condition Details"
            value={primary}
            onChangeText={(text) => setPrimary(text)}
          />

          <Text style={{ fontSize: 25 }}>Physical Condition </Text>
          <TextInput
            style={styles.addInput}
            placeholder="Pulse"
            value={pulse}
            onChangeText={(text) => setPulse(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="BP"
            value={bp}
            onChangeText={(text) => setBp(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Temperature"
            value={temp}
            onChangeText={(text) => setTemp(text)}
          />

          <TextInput
            style={styles.addInput}
            placeholder="Cleanliness"
            value={clean}
            onChangeText={(text) => setClean(text)}
          />
          <Text style={{ fontSize: 25 }}>Summary </Text>
          <TextInput
            style={styles.addInput}
            placeholder="Major Physical Issues"
            value={phyIssue}
            onChangeText={(text) => setPhyIssue(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Physical Condition"
            value={phyCond}
            onChangeText={(text) => setPhyCond(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Awareness of illness"
            value={illness}
            onChangeText={(text) => setIllness(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Hygience"
            value={hygience}
            onChangeText={(text) => setHygience(text)}
          />

          <View style={styles.APButtonField}>
            <TouchableOpacity
              style={styles.APButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.APButton} onPress={onPressAdd}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddDetailsNurse;
