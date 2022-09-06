import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const sc=Dimensions.get('window').width;
export default StyleSheet.create(
  
  {
  background: {
    height:'100%',
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
  },
 
  //Welcome Page

  contentHeads:{
    marginTop:'30%',
    alignItems:'center',
  },
  mainHead: {
    justifyContent:'center',
    alignItems:'center',
    color: '#2c6b82',
    fontWeight: 'bold',
    fontSize: 60
  },
  subHead: {
    alignItems:'center',
    color: '#2c6b82',
    fontWeight:'bold',
    fontSize:20
  },
  buttonforward: {
    width:72,
    height:72,
    marginTop:'110%',
    borderRadius:50,
    backgroundColor:'#fff',
  },
  //LoginScreenMain
  CCtext:{
    color:'#2c6b82',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  },
  input: {
    margin: 15,
    width:'90%',
    height: '6%',
    borderWidth:1,
    textAlign:'center',
    borderRadius:25,
    borderColor: 'black',
    backgroundColor:'white',
 },
 createCenter:{
    marginTop:'90%'
 },
 //create
createHead:{
  alignItems:'center',
  color: '#2c6b82',
  fontWeight: 'bold',
  fontSize: 40,
  marginBottom:'8%'
},
createInputField:{
  width:'100%',
  height:'100%',
  alignItems:'center'
},
createInput: {
  width:'90%',
  height: '6%',
  borderWidth:1,
  textAlign:'left',
  borderRadius:10,
  borderColor: 'black',
  backgroundColor:'white',
  padding:20,
  marginTop:'3%',
  marginBottom:'6%'
 },
 buttonField:{
  marginTop:'18%',
  flexDirection:'row',
  width:'100%', 
 },
 CCButton: {
  width:80,
  padding:10,
  borderRadius:50,
  borderWidth:1,
  backgroundColor:'#fff',
  flex:1,
  margin:'6%'
  
},
buttonText:{
  color:'#2c6b82',
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center',
},
textContent:{
  marginTop:'25%',
},
//DoctorMenu
inputSearch:{
    
    marginTop:'2%',
    marginBottom:'5%',
    width:'90%',
    height: '6%',
    paddingLeft:'5%',
    paddingRight:'5%',
    borderWidth:1,
    textAlign:'left',
    borderRadius:25,
    borderColor: 'black',
    backgroundColor:'white',

},

cardView:{
  height:'100%',
  width:'100%'
},

textProf:{
  color:'#fff',
  fontSize:25,
  fontWeight:'bold',
  textAlign:'center',
},
  button: {
    top:50,
    width: 50,
    height: 50,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius:50,
    backgroundColor: '#2c6b82',
  },
  buttonStyle: {
    marginTop:'20%',
    width:'90%',
    height:'15%',
    paddingTop:'11%',
    paddingBottom:'11%',
    alignItems: "center",
    backgroundColor:'#2c6b82',
    borderRadius:13,
    borderWidth:1,
    borderColor: '#fff'
  },
  
  submitButton: {
   marginTop:40,
   width:90,
   height:45,
   paddingTop:10,
   paddingBottom:25,
   alignItems: "center",
   backgroundColor:'#2c6b82',
   borderRadius:25,
   borderColor: '#fff',
   alignItems:'center'
 },




  buttonback: {
    width:62,
    height:62,
    padding:5,
    borderRadius:50,
    backgroundColor:'white',
  },
  text:{
   color:'white',
   fontSize:15,
   fontWeight:'bold',
   textAlign:'center',
},
//create patient
APButton:{
  width:80,
  padding:10,
  borderRadius:50,
  borderWidth:1,
  backgroundColor:'#fff',
  flex:1,
  margin:'6%',
  marginBottom:'50%'
},

APButtonField:{
  marginTop:'1%',
  flexDirection:'row',
},

addInput: {
  width:'90%',
  height: 60,
  borderWidth:1,
  textAlign:'left',
  borderRadius:10,
  borderColor: 'black',
  backgroundColor:'white',
  padding:'3%',
  marginTop:'3%',
  marginBottom:'6%'
 },
 
 FamAddInput: {
  width:'90%',
  height: 60,
  borderWidth:1,
  textAlign:'left',
  borderRadius:10,
  borderColor: '#000',
  backgroundColor:'#fff',
  padding:'3%',
  marginTop:'1%',
  marginBottom:'6%'
 },
text3:{
    color:'black',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
}, 

});