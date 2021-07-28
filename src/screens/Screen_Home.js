import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from "../components/Card";


import { View, ActivityIndicator, TouchableOpacity, Text, FlatList, TextInput,StyleSheet } from "react-native";

export default class Screen extends Component {
  
constructor() {
  super();
  this.state = {
   personajes:[
     {nombre:"juan", apellido: "Perez", edad:51},
     {nombre:"Ana", apellido:"Garcia",edad:31},
     {nombre:"Ernesto", apellido:"Vazques",edad:43},
     {nombre:"Carla", apellido:"Fernandez",edad:65}
   ],
   guardado:[]
  }
}
 
async savePerson(item){
  try{
   this.state.guardado.push(item)
  const persona= JSON.stringify(this.state.guardado)
await AsyncStorage.setItem("@guardado", persona );
this.setState({guardado: this.state.guardado})
}
catch(e){
console.log(e)
}
}


  
  render (){
    let personaje = this.state.personajes.map((item,idx)=>
    <View style={{backgroundColor: 'grey', borderWidth: 5, margin: 3, justifyContent:"space-between"}} key={idx} >
      <TouchableOpacity onPress={() => this.savePerson(item)}>
      <Card 
              
              name={item.nombre}  
              apellido={item.apellido}
              edad = {item.edad}
              
          />
            
            <Text onPress= {()=>this.props.navigation.navigate("Screen Likes")}>Ver Detalle</Text>
            </TouchableOpacity>
       </View>
    );
    return (
      <View style={styles.container}>
       
        {personaje}
    

      </View>
  

  
  
  )}  

}
const styles = StyleSheet.create({
  container: {
    flexWrap:"wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-between",
    height:100,
    
    
   
    
    

  },
});
