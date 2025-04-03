import { StyleSheet, View,Alert} from "react-native";
import { useState,useEffect } from "react";
import Board from "../components/Board";
import Title from "../components/Title";
import TButton from "../components/TButton";
import { playMove,buildBoard,getHint } from "../gameLogic/game";
import { saveGame, loadGame } from "../gameLogic/model";





export default function Home({navigation,route}) {
  const [board,setBoard] = useState(Array(9).fill(""))
  const [steps,setSteps] =useState([])
  const [lastP,setLastP]=useState(0)
  const {gameId}=route?.params || {};
  const [hint,gameFinished,winCells = []] = getHint(board);

  useEffect(() => {
    if (gameId) {
      const game = loadGame(gameId);
      if (game) {
        const newSteps = game.steps;
        setSteps(newSteps);
        setLastP(newSteps.length);
        const newBoard = buildBoard(newSteps, newSteps.length);
        setBoard(newBoard);
      }
    }
  }, [gameId]);
  const play =(idx)=> {
    console.log("played with idx:,", idx)
    if (gameFinished) return;
    const newSteps = playMove(idx,steps,lastP);
    setSteps(newSteps);
    setLastP(newSteps.length);
    const newBoard = buildBoard(newSteps,newSteps.length);
    setBoard(newBoard);
  }
  const goPre=()=>{
    const newLastP=lastP - 1;
    setLastP(newLastP);
    const newBoard = buildBoard(steps,newLastP);
    setBoard(newBoard);
  }

  const goNxt=()=>{
    const newLastP=lastP + 1;
    setLastP(newLastP);
    const newBoard = buildBoard(steps,newLastP);
    setBoard(newBoard);

  }

  const saveData = () =>{
    Alert.alert(
      "Save Game",
      "Are you sure you want to save the game and start a new game",
      [
      {
        text:"Save",
        onPress: () => {
          saveGame(steps,hint);
          newGame();
        }
      },
      {
        text:"Cancel",
        style:"cancel",
      }
      ]
    )
  }

  const newGame =()=>{
    setSteps([]);
    setLastP(0);
    setBoard(Array(9).fill(""));
  }
  return (
   
    <View style = {styles.container}>
     <View style={styles.container}>
      <View style={styles.table}>
        <Title title={"Tic Tac Toe"}/>
        <View style={styles.buttonPanel}>
      <TButton label="<" fun={goPre} width={30} enabled={lastP>0}/>
      <TButton label="New Game" fun={newGame} width={100} enabled={steps.length>0}/>
      <TButton label=">" fun={goNxt} width={30} enabled={lastP<steps.length}/>
      </View>
      <Board plays={board} onPress={play} winCells={winCells}/>
      <View style={styles.buttonPanel}>
      <TButton label="Load" fun={()=>navigation.navigate("LoadGame")}/>
      <TButton label="Save" fun={saveData} enabled={gameFinished}/>
      <TButton label="Rules" fun={()=>navigation.navigate("Rules")}/>
      <TButton label="Credits" fun={()=>navigation.navigate("Credits")}/>
      </View>
      </View>
      
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
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
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
buttonPanel:{
  flexDirection:'row',
  justifyContent:'space-around',
  width:'80%'
}
  
});