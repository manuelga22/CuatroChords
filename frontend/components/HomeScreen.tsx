import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

import FretboardComponent from './CuatroFretboard/Fretboard';

const HomeScreen = (props:any)=> {
    const [chord, onChangeChord] = React.useState("")
    const [chordName, setChordName] = React.useState("")

    const goToChordViewScreen = ()=>{
       onChangeChord(chord)
       setChordName("C major")
       props.navigation.navigate('ChordView', {chordName: chordName, notes: ['C', 'E', 'G']})
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
                  onSubmitEditing={()=>goToChordViewScreen()}
                />
            </SafeAreaView>
        </View>

        <FretboardComponent chords={[]}></FretboardComponent>
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




// const getChordNotes = (chord:string)=>{
//     // return fetch(`https://locahost:3000/${chord}`)
//     // .then((response)=>response.json())
//     // .then((json)=>{
//         setChordNotes(['C','E','G'])
//     //   return json
//     // })
//     // .catch((error)=>{
//     //     console.log(error)
//     // })
// }