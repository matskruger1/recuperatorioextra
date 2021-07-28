import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardMini from "../components/CardMini";






export default class Screen_Likes extends Component{
    constructor() {
        super();
        this.state = {
          guardado:[]
        }
      } 

      componentDidMount(){
        this.unsubscribe = this.props.navigation.addListener("focus",()=>{
          this.getObjectStorage();    
        })
      };
      
      async getObjectStorage(){
        try {
            const jsonValue = await AsyncStorage.getItem('@guardado')
            if (jsonValue !== null) {
                const jsonParsed = JSON.parse(jsonValue)
                this.setState({guardado: jsonParsed})
            }
            console.log(this.state.guardado)
        } catch (e) {
            console.log(e)
        }
    }
   
      keyExtractor = (item, idx) => idx.toString();
      renderItem = ({item}) => {
     return(
      <View style={{backgroundColor: 'grey', borderWidth: 5, margin: 3, justifyContent:"space-between"}}> 
        <CardMini
        name={item.nombre} 
        apellido={item.apellido}
        edad= {item.edad}
        />
      </View>     
       )
     }
   
 
   render (){
     return (
     <View style={styles.container}>   
         <View >
           <Text>Informacion</Text>
         </View>  

         <View>
             <FlatList
             data={this.state.guardado}
             keyExtractor={this.keyExtractor}
             renderItem={this.renderItem}
             />
         </View>
     </View>
     )}
  

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-between",
    height:100,
    
    
   
    
    

  },
});