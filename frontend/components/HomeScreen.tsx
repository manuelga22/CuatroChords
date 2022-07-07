import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

import FretboardComponent from './CuatroFretboard/Fretboard';

const HomeScreen = ()=> {
    const [chord, onChangeChord] = React.useState("")
    const [chordNotes,setChordNotes] = React.useState(Array<String>)


    const getChordNotes = (chord:string)=>{
        // return fetch(`https://locahost:3000/${chord}`)
        // .then((response)=>response.json())
        // .then((json)=>{
            setChordNotes(['C','E','G'])
        //   return json
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
    }

    return(
    <View>
        <View style={styles.SearchBarcontainer}>
            <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeChord}
                  value={chord}
                  placeholder="Try C M (C Major) or C m (C minor)"
                  returnKeyType='search'
                  onSubmitEditing={()=>{getChordNotes(chord)}}
                />
            </SafeAreaView>
        </View>
        <FretboardComponent notes={chordNotes}></FretboardComponent>

    </View>
    );
}

const styles = StyleSheet.create({
    SearchBarcontainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 50,
      margin: 12,
      padding: 10,
    },
    input:{
        height: '100%',
        width:'100%',
    },
});

export default HomeScreen;