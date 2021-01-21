import React from 'react';
import {StyleSheet, Text, View, TextInput,TouchableOpacity, Alert,Image } from 'react-native';
import db from "../config"
import firebase from "firebase"
export default class WelcomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
  }
  userLogin=async()=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
        if(response){
            return Alert.alert("User Login Successful")

        }
    })
    .catch((error)=>{
        return Alert.alert(error.message)
    })
}
userSignUp=async(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
        if(response){
            return Alert.alert("User Added Successfully")

        }
    })
    .catch((error)=>{
        return Alert.alert(error.message)
    })
   
}
  render(){
    return(
      <View style={styles.container}>

        <Image style = {{width : 300, height: 300}} 
        source = {require("../Images/Barter.png")}/>
       <Text style = {styles.title}>Barter</Text>
       <Text style={{color:"#ff5722",fontSize:13,alignSelf:'center',padding:10}}>By: Adit Tiwari</Text>
          <Text style={{color:'#ff5722',fontSize:18, fontWeight:'bold',marginLeft:-200}}>USERNAME</Text>
          <View style={{alignItems:'center'}}>
          <TextInput
          style={styles.loginBox}
          keyboardType='email-address'
            onChangeText={(text)=>{
              this.setState({
               username:text,
              })
            }}
          />
        </View>

        <Text style={{color:'#ff5722',fontSize:18, fontWeight:'bold',marginLeft:-200}}>PASSWORD</Text>
          <View style={{alignItems:'center'}}>
          <TextInput
          style={styles.loginBox}
          secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
              password:text,
              })
            }}
          />
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={[styles.button,{marginBottom:10}]} onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>
            <Text style={{color:"#FF5722",fontSize:18,fontWeight:'bold'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}>
            <Text style={{color:"#FF5722",fontSize:18,fontWeight:'bold'}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

    
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffe0b1',
      alignItems: 'center',
      justifyContent: 'center',
      width:1500,
      height:1000
    },
    loginBox:{
      borderRadius:2,
      borderColor:"#FF8A65",
      width:300,
      height:40,
      borderBottomWidth:1.5,
      fontSize: 20,
      margin:10, 
      paddingLeft:10
  }, 
  title:{
      fontSize:65,
      fontWeight:"300",
      paddingBottom:30,
      color:"#f7b63d",
  },
  button:{
      width:300,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:25,
      backgroundColor:"white",
      shadowColor:"#000",
      shadowOffset:{width:0,height:8},
      shadowOpacity:0.30,
      shadowRadius:10.3,
      elevation:60
  },
  buttonText:{
      color:"white",
      fontWeight:"200",
      fontSize:20,
  }
  });
