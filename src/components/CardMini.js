import React, { Component } from 'react';


import {StyleSheet, Text, View, Image } from "react-native";

export default class CardMini extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

  render (){
    return (
        <View style={styles.container}>
                <Text>Nombre:{this.props.nombre} </Text>  
                <Text>Apellido:{this.props.apellido} </Text>  
                <Text>Edad:{this.props.edad} </Text>  
        </View>
  
  )}  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 