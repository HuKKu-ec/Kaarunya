import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


import { collection,getDocs ,query} from 'firebase/firestore';
import { db} from '../firebase/config';

const NursePager = ({navigation,route}) => {
  const [visitVol,setVisitVol]=useState([])

  const VolVisitData=async()=>{
    const q=query(collection(db,'visitVol'));
    querySnapshot=await getDocs(q)
    const data=querySnapshot.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id
    }));
    setVisitVol(data)
  }
  useEffect(()=>{
    
    VolVisitData()
   
  },[])
  
  return (
    <View style={{ flex: 1 }}>
    
      <PagerView style={styles.viewPager} initialPage={0}>
      <ScrollView>  
        <View style={styles.page} key="1">
        <Text style={{marginTop:'15%',alignItems:'center',color: '#2c6b82',fontWeight: 'bold',fontSize: 40,marginBottom:'8%'}}>Volunteer</Text>
        {/* start */}
        <View style={{flexDirection:'row'}}>
         <Text style={{marginRight:'55%'}}>Name:{route.params.value.name}</Text>
         <Text>Age:{route.params.value.age}</Text>
      </View>
        {visitVol.map((value,k)=>{
          if(value.pid==route.params.value.pid)
          return(
          <View key={k} style={{marginTop:5,width:'90%'}}>
      <Collapse>
    <CollapseHeader>
      <View style={{backgroundColor:'#2c6b82',padding:10}}>
        <Text style={{color:'#fff'}}>Visited date: {value.date}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>Volunteer Name:{value.volName}</Text>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>Ecconomical:{value.ecconomical}</Text>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>Educational:{value.educational}</Text>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>Mental Condition:{value.mental}</Text>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>Caring of Patient:{value.caring}</Text>
    </CollapseBody>
</Collapse>
</View>
        )})}
        </View></ScrollView>
        <ScrollView>
        <View style={{backgroundColor:'#2c6b82'}}>
        <View style={{width:'90%',margin:20}}  key="2">
          <View style={styles.page} >
        <Text style={{marginTop:'15%',alignItems:'center',color: '#fff',fontWeight: 'bold',fontSize: 40,marginBottom:'8%'}}>Profile</Text>
        </View>
        <CollapseBody>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Name:{route.params.value.name}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Age:{route.params.value.age}</Text>

      <Text style={{backgroundColor:'#fff',padding:10,}}>Gender:{route.params.value.gender}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Phone:{route.params.value.name}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Address:{route.params.value.address}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Panchayath:{route.params.value.panchayath}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Ward Number:{route.params.value.ward}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Guardian Name:{route.params.value.gname}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Guardian Phone Number:{route.params.value.gphone}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Hobbies:{route.params.value.hobbies}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Ration Card:{route.params.value.cardColor}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Pension:{route.params.value.pension}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Insurance Details:{route.params.value.inshurance}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Other:{route.params.value.other}</Text>
      <Text style={{backgroundColor:'#fff',padding:10,}}>Nurse Note:{route.params.value.nurseNote}</Text>
    </CollapseBody>
        </View>
          </View></ScrollView>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    
    alignItems: 'center',
  },
});

export default NursePager;