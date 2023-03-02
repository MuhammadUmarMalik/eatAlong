import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'
import React,{useState,useEffect, useRef} from 'react'
import * as EmailValidator from 'email-validator'
import {Camera,CameraType} from'expo-camera'


const Form = () => {
useEffect(() => {
handleValidate()
 
}, [email,password]);
const [isvaild,setIsvalid]=useState(false)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [type,setType]=useState(CameraType.back)
const [permission,requestPermission]=Camera.useCameraPermissions()

// requestPermission()
//hello
// reference hook
const cameraRef=useRef()
const [profilePicUri,setProfilePicUri]=useState('')


// handle camera capturing function
const handleCamera=()=>{
    // if the camera is not working properly
    if(cameraRef===undefined)
    {
        return
    }
    
    cameraRef.current.takePictureAysnc().then((response)=>{
        if(response!==undefined)
        {
            console.log(response)
            if(response.uri!==undefined){
                setProfilePicUri(response.uri);
            }

        }
    }).catch((error)=>{alert(error.message)});

    };




//validation function
const handleValidate=()=>{
    if(email===''|| password==='')
    {
        setIsvalid(false)
        alert('fill all the field')
        return
    }
    if(EmailValidator.validate(email)===false){
        setIsvalid(false)
        Alert.alert('email is not in correct format')
        return
    }
    setIsvalid(true)

}



  return (
    <View style={style.Container}>
        
      <View style={style.box}>
        <TextInput placeholder='Email' style={style.field} onChangeText={setEmail}/>
        <TextInput placeholder='Password' style={style.field} secureTextEntry={setPassword} onChangeText={setPassword} />
        <TouchableOpacity style={style.btn} onPress={handleValidate}>
            <Text style={style.title}>Submit</Text>
        </TouchableOpacity>
      </View>
       
      <Camera ref={cameraRef}style={style.camera} type={type}>
        <TouchableOpacity onPress={handleCamera} style={style.Btn}>
        <View style={style.cameraButton} />
        </TouchableOpacity>
      </Camera>


<Image source={{uri:profilePicUri}}/>

    </View>
  ); 
}

export default Form

const style = StyleSheet.create({
Container:{
    flex:1,
    backgroundColor:'#a234fe',
    justifyContent:'center',
    alignItems:'center'
},
box:{
    width:'80%',
    backgroundColor:'#fff',
    padding:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
},
field:{
    width:'100%',
    borderWidth:1,
    borderColor:'black',
    padding:10,
    margin:5,
    borderRadius:10
},
btn:{
    width:'50%',
    padding:5,
    backgroundColor:'#a234fe',
   borderRadius:50
},
title:{
    color:'#fff',
    textAlign:'center',
    padding:5,
    fontWeight:'bold',
    fontSize:16
},
camera:{
    width:'100%',
    height:'50%',
    padding:5
},
Btn:{
    width:100,
    backgroundColor:'white',
    borderRadius:50
},
cameraButton: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },
});