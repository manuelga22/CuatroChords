import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';
import FretboardComponent from '../CuatroFretboard/Fretboard';


const ChordViewComponent = (props:any)=> {

    const [chordNotes,setChordNotes] = React.useState(Array<String>)
    const params = props.route.params

    React.useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerTitle: 'C major',
            headerLeft: () => (
              <Button title="<Back" onPress={() => props.navigation.navigate('Fretboard')}  />
            ),
        });
    }, [props.navigation])

    React.useEffect(()=>{
        if(params.chords != undefined && params.chords.length > 0){
            setChordNotes(params.chords)
        }
    },[chordNotes])

    return(
        <View>
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

export default ChordViewComponent;