import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import FretboardComponent from '../CuatroFretboard/Fretboard';


const ChordViewComponent = (props:any)=> {

    const [chordNotes,setChordNotes] = React.useState(Array<String>)
    const params = props.route.params

    React.useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerTitle: params.chordName,
            headerLeft: () => (
              <Button title="<Back" onPress={() => props.navigation.navigate('Fretboard')}  />
            ),
        });
    }, [props.navigation])

    React.useEffect(()=>{ 
        if(params.notes != undefined && params.notes.length > 0){
            setChordNotes(params.notes)
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