import { StyleSheet, Text, View,Button } from "react-native";

const plays = ["O", "", "X", "X", "", "O", "", "X", ""];

const Cell = ({ play }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};

export default function Credits({navigation}) {
 
  return (
    <View style = {styles.container}>
         <Button title="Back" onPress={() => navigation.goBack()}/>
        <View style ={styles.container}>
     
        <Text> this is the credits page</Text>
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  board: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 30,
    // alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#090",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});