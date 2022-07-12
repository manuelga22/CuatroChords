import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FretboardComponent from './CuatroFretboard/Fretboard';

const HomeScreen = (props: any) => {
    const [chord, onChangeChord] = React.useState("")
    const [chordName, setChordName] = React.useState("")

    const goToChordViewScreen = () => {
        onChangeChord(chord)
        setChordName("C major")
        props.navigation.navigate('ChordView', { chordName: chordName, notes: ['C', 'E', 'G'] })
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.iconWrapper} ><Icon name="search" size={30} color="#900" style={styles.icon} /></View>
                <View style={styles.SearchBarcontainer}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeChord}
                            value={chord}
                            placeholder="Try C M (C Major) or C m (C minor)"
                            returnKeyType='search'
                            onSubmitEditing={() => goToChordViewScreen()}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <FretboardComponent style={styles.fretboard} chords={[]}></FretboardComponent>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 3,
    },
    SearchBarcontainer: {
        flexGrow: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        margin: 10,
        padding: 10,
    },
    fretboard: {
    },
    input: {
        height: '100%',
        width: '100%',
    },
    iconWrapper:{
        backgroundColor: 'lightblue',
        borderRadius: 5,
        borderWidth:1,
        height: 50,
        width: '12%',
        padding: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    icon: {
        color: 'white',
    }

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