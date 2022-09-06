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
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore';

//DOCTOR-->ADD DETAILS
const AddDetailsDoctor = ({ navigation, route }) => {
  const d = new Date();
  const name = route.params.value.name;
  const age = route.params.value.age;
  const [date, setDate] = useState(
    `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`
  );
  const [docName, setDocName] = useState('');
  const [teamMemb, setTeamMemb] = useState('');
  const [complaints, setComplaints] = useState('');
  const [medicines, setMedicines] = useState('');
  const [food, setFood] = useState('');
  const [blader, setBlader] = useState('');
  const [sleep, setSleep] = useState('');
  const [bath, setBath] = useState('');
  const [exercise, setExercise] = useState('');
  const [leisure, setLeisure] = useState('');
  const [state, setState] = useState('');
  const [clean, setClean] = useState('');
  const [pulse, setPulse] = useState('');
  const [bp, setBp] = useState('');
  const [temp, setTemp] = useState('');
  const [mExam, setMExam] = useState('');
  const [discussion, setDiscussion] = useState('');

  const onPressAdd = () => {
    const myDoc = collection(db, 'visitDoc');
    const docData = {
      pid: `${route.params.value.pid}`,
      date,
      name,
      age,
      docName,
      teamMemb,
      complaints,
      medicines,
      food,
      blader,
      sleep,
      bath,
      exercise,
      leisure,
      state,
      clean,
      pulse,
      bp,
      temp,
      mExam,
      discussion,
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

        <View style={styles.createInputField}>
          <TextInput
            style={styles.addInput}
            placeholder={date}
            onChangeText={(text) => setDate(text)}
          />
          {/* <Text>Upload Photo</Text> */}
          <TextInput
            style={styles.addInput}
            placeholder="Doctor name"
            value={docName}
            onChangeText={(text) => setDocName(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Other Team Members"
            value={teamMemb}
            onChangeText={(text) => setTeamMemb(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Major events since last visit and Present complaints"
            value={complaints}
            onChangeText={(text) => setComplaints(text)}
          />
          <Text style={{ fontSize: 25 }}>Current Medicines</Text>
          <TextInput
            style={styles.addInput}
            placeholder="Medicines"
            value={medicines}
            onChangeText={(text) => setMedicines(text)}
          />

          {/* <View style={{width:'90%',backgroundColor:'#e5e5e5',alignItems:'center',justifyContent:'center',borderRadius:20,height:'20%'}}>

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
             <View></View>
              <View style={styles.APButtonField} >

               <TouchableOpacity   style={styles.APButton}>
                   <Text style={styles.buttonText}>Add</Text>
               </TouchableOpacity>
               </View>
               
             
          </View> */}

          <Text style={{ fontSize: 25 }}>Primary Needs</Text>
          <TextInput
            style={styles.addInput}
            placeholder="Food and fluids"
            value={food}
            onChangeText={(text) => setFood(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Blader and Bowel"
            value={blader}
            onChangeText={(text) => setBlader(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Sleep"
            value={sleep}
            onChangeText={(text) => setSleep(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Bath and Cleaning"
            value={bath}
            onChangeText={(text) => setBath(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Exercise"
            value={exercise}
            onChangeText={(text) => setExercise(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Leisure Activities"
            value={leisure}
            onChangeText={(text) => setLeisure(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Perseption about Present State"
            value={state}
            onChangeText={(text) => setState(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Cleanliness of Surroundings"
            value={clean}
            onChangeText={(text) => setClean(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Pulse"
            vlaue={pulse}
            onChangeText={(text) => setPulse(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Bp"
            vlaue={bp}
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
            placeholder="Medical Examination"
            value={mExam}
            onChangeText={(text) => setMExam(text)}
          />
          <TextInput
            style={styles.addInput}
            placeholder="Discussion and Management"
            value={discussion}
            onChangeText={(text) => setDiscussion(text)}
          />

          <View style={styles.APButtonField}>
            <TouchableOpacity
              style={styles.APButton}
              onPress={() => {
                navigation.navigate('MenuScreenDoctor');
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

    //  <ScrollView>
    // <View style={styles.background}>
    //    <Text>Name</Text>
    //    <Text>Age</Text>
    //    <TextInput style = {styles.addInput}
    //           placeholder = "Date"
    //           autoCapitalize = "none"
    //           onChangeText={text => setText(text)}
    //       />
    //         <TextInput style = {styles.addInput}
    //           placeholder = "Doctor's Name"
    //           onChangeText={text => setText(text)}
    //        />
    //            <TextInput style = {styles.addInput}
    //           placeholder = "Other Team Members"
    //           onChangeText={text => setText(text)}
    //        />
    //            <TextInput style = {styles.addInput}
    //           placeholder = "Major events since last visit & Present complaints"
    //           value={number}
    //           onChangeText={onChangeNumber}
    //        />
    //        <Text style={{color:'#504C4C',fontSize:40}}>Current Medicines</Text>
    //            <TextInput style = {styles.addInput}
    //           placeholder = "Medicines"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Dose"
    //           onChangeText={text => setText(text)}
    //        />
    //        <Text>Primary Needs</Text>
    //            <TextInput style = {styles.addInput}
    //           placeholder = "Food and Fluids"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Bladder and Bowel"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Sleep"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Bath and Cleaning"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Exercise"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Leisure Activities"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Perseption about Present State"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Cleanliness of Surroundings"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Pulse"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "BP"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Temperature"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Medical Examination"
    //           onChangeText={text => setText(text)}
    //        />
    //           <TextInput style = {styles.addInput}
    //           placeholder = "Discussion and Management"
    //           onChangeText={text => setText(text)}
    //        />

    //        <View style={{flexDirection:"row"}}>
    //          <View style={styles.container2}>
    //           <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('MenuScreenDoctor')}>
    //               <Text style={styles.text2}>Submit</Text>
    //           </TouchableOpacity>
    //           </View>
    //             <View style={styles.container2}>
    //           <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('MenuScreenDoctor')}>
    //              <Text style={styles.text2}>Back</Text>
    //           </TouchableOpacity>
    //           </View>
    //           </View>
    //   </View>
    //   </ScrollView>
  );
};

export default AddDetailsDoctor;
