import React, { useState, useEffect } from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './LoginScreenMain';

//DISPLAY FULL DETAILS OF CENTER ON PREOFILE SCREEN
const CreateCenter = ({ navigation }) => {
  const [onLoad, setOnLoad] = useState(true);
  const [center, setCenter] = useState([]);
  const currentUser = useAuth();

  const centerData = async () => {
    const q = query(collection(db, 'CenterAuth'));
    querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCenter(data);
    setOnLoad(false);
  };
  useEffect(() => {
    centerData();
  }, []);

  return (
    <>
      {onLoad ? (
        <>
          <View style={{ backgroundColor: '#2c6b82', alignItems: 'center' }}>
            <View style={styles.page}>
              <Text
                style={{
                  marginTop: '15%',
                  alignItems: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  marginBottom: '8%',
                }}
              >
                Center Details
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </>
      ) : (
        <ScrollView>
          <View style={{ backgroundColor: '#2c6b82', alignItems: 'center' }}>
            <View style={styles.page}>
              <Text
                style={{
                  marginTop: '15%',
                  alignItems: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  marginBottom: '8%',
                }}
              >
                Center Details
              </Text>
            </View>
          </View>

          {center.map((value, k) => {
            if (currentUser.uid === value.uid)
              return (
                <CollapseBody key={k}>
                  <Text style={{ backgroundColor: '#fff', padding: 10 }}>
                    Center Id:{value.centerId}
                  </Text>
                  <Text style={{ backgroundColor: '#fff', padding: 10 }}>
                    Center Name:{value.centerName}
                  </Text>
                  <Text style={{ backgroundColor: '#fff', padding: 10 }}>
                    Email:{value.email}
                  </Text>
                  <Text style={{ backgroundColor: '#fff', padding: 10 }}>
                    Uid:{value.uid}
                  </Text>
                </CollapseBody>
              );
          })}
          <Button
            title="back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </ScrollView>
      )}
    </>
  );
};

export default CreateCenter;
