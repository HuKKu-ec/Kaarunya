import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ProfileScreen from './ProfileScreen';
import { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import {
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { Button, Card } from 'react-native-elements';
import CreatePatient from './CreatePatient';
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebase/config';
import { collection, doc, getDocs, query, deleteDoc } from 'firebase/firestore';
import LoginScreenMain from './LoginScreenMain';
import { useAuth } from './LoginScreenMain';
import Delete from '../assets/Delete.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuScreenNurse = ({ navigation }) => {
  const [onLoad, setOnLoad] = useState(true);
  const [Patient, setPatient] = useState([]);
  const [PreviosDeleteId, setPreviosDeleteId] = useState('');
  const currentUser = useAuth();
  const deleteHandler = (id) => {
    Alert.alert('Alert', 'Do you want to delete this Patient', [
      {
        text: 'ok',
        onPress: async () => {
          await deleteDoc(doc(db, 'CreatePatient', `${id}`));
          setPreviosDeleteId(id);
        },
      },
      {
        text: 'cancel',
        onPress: () => {
          alert('canceled');
        },
      },
    ]);
  };

  const patientData = async () => {
    const q = query(collection(db, 'CreatePatient'));
    querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPatient(data);
    setOnLoad(false);
  };
  useEffect(() => {
    patientData();
  }, [Patient, PreviosDeleteId]);
  LogBox.ignoreAllLogs();

  return (
    <>
      {onLoad ? (
        <View
          style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.background}>
          {/* <TextInput style = {styles.inputSearch}
              placeholder = "Search"
              autoCapitalize = "none"
              onChangeText={Search => {setSearch(Search)}}
              defaultValue={Saerch}
          /> */}
          <ScrollView>
            <View style={styles.cardView}>
              {Patient.map((value, i) => {
                if (value.currentUser == `${currentUser.uid}`)
                  return (
                    <Card key={i} Style={styles.cardModel}>
                      <TouchableOpacity
                        onPress={() => {
                          deleteHandler(value.id);
                        }}
                      >
                        <Image style={{ marginLeft: '90%' }} source={Delete} />
                      </TouchableOpacity>

                      <View
                        style={{
                          margin: 20,
                          width: '100%',
                          flexDirection: 'row',
                        }}
                      >
                        <Text>Name:{value.name}</Text>
                        <Text style={{ marginLeft: '25%' }}>
                          Age:{value.age}
                        </Text>
                      </View>
                      <View
                        style={{
                          margin: 20,
                          width: '100%',
                          flexDirection: 'row',
                        }}
                      >
                        <Button
                          buttonStyle={{
                            marginRight: '25%',
                          }}
                          title="show"
                          onPress={() =>
                            navigation.navigate('NursePager', { value })
                          }
                        />

                        <Button
                          buttonStyle={{
                            marginLeft: '25%',
                          }}
                          title="add details"
                          onPress={() => {
                            navigation.navigate('AddDetailsNurse', { value });
                          }}
                        />
                      </View>
                    </Card>
                  );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};
const NurseDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="MenuScreenNurse">
      <Drawer.Screen name="Nurse" component={MenuScreenNurse} />
      <Drawer.Screen name="Create Patient" component={CreatePatient} />
      <Drawer.Screen
        name="Log Out"
        component={LoginScreenMain}
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default NurseDrawer;
