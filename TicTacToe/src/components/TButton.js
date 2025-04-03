import {Text,StyleSheet,Pressable} from 'react-native'
import colors from '../constants/colors'

export default function TButton({label,fun=()=>{},width=80, enabled=true}){
    return (
          <Pressable style={({pressed})=>!enabled? [styles.container,{width,backgroundColor:"#ccc"}] :pressed?[styles.container,{opacity:0.5},{width}]:[styles.container,{width}]} onPress={enabled?fun:null}>
            <Text style={styles.text}>{label}</Text>
          </Pressable>
    )
}
const styles=StyleSheet.create({
container:{
    width:80,
    height:30,
    backgroundColor:colors.button,
    borderWidth:1,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
},
text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
    

})