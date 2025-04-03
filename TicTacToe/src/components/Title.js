import {View,Text,StyleSheet} from 'react-native'
import colors from '../constants/colors'

export default function title({title}){
    return (
          <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
          </View>
    )
}
const styles=StyleSheet.create({
container:{
    width:'80%',
    height:80,
    backgroundColor:colors.title,
    borderWidth:1,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center"
},
text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
    

})