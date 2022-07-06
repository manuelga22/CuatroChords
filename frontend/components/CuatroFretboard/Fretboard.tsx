import * as React from 'react';
import { StyleSheet, Text,ScrollView, View } from 'react-native';

import FretboardSharps from './cuatroNotes';

const FretboardComponent = (props:any)=> {
    const NUMBER_OF_STRINGS = 4;
    const NUMBER_OF_NOTES_PER_FRET = 4;

    function strings(notes:Array<String>){
        let strings = []
        for(let i = 0; i < NUMBER_OF_STRINGS - 1; i++){
            strings.push(<View style={styles.string}></View>)
        }
        return strings
    }
    function notes(fretNotes:Array<String>){
        let notesRows = []
        for(let i = 0; i < NUMBER_OF_NOTES_PER_FRET; i++){
            notesRows.push(<View style={styles.note}><Text>{fretNotes[i]}</Text></View>)
        }
        return <View style={styles.notesWrapper}>{notesRows}</View>
    }

    const frets = FretboardSharps.map((fret)=>{
        return (
            <View style={styles.fret}>
                { strings(fret) }
                { notes(fret)}
            </View>
        );
    })

    return(
            <ScrollView contentContainerStyle={styles.container}>
    
                <View style={styles.fretboard}>
                    <View style={styles.cuatroFrets}>
                        {frets}
                    </View>
                </View>
               
            </ScrollView>

    );
}


const styles = StyleSheet.create({
    container:{
        minHeight: '100%',
    },
    fretboard:{
        backgroundColor:'#FFFFFF',
        minHeight:'100%',
        padding:'15%',
        margin:15,
        borderRadius:15,
        borderWidth:3,
    },
    cuatroFrets:{
        backgroundColor:'#FFFFFF',
        minHeight:'100%',
        margin:5,
        borderTopWidth:10,
        borderBottomWidth:2,
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
    },
    fret:{
        backgroundColor:'#FFFFFF',
        borderWidth:3,
        borderBottomColor: 'grey',
        flex:1,
        flexDirection:'row',
        minHeight:70
    },
    string:{
        borderWidth: 0.5,
        width:'33.5%',
        height:'100%',
    },
    notesWrapper:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'nowrap',
        minWidth:'150%',
    },
    note:{
        borderRadius:100,
        width: 35,
        height:35,
        backgroundColor:'orange',
        margin:'10%',
        //bottom: 55,
        //bottom:'0px',
        //right:'0%',
    }
});
  

export default FretboardComponent;