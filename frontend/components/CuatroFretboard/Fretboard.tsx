import * as React from 'react';
import { StyleSheet, Text,ScrollView, View } from 'react-native';

import FretboardSharps from './cuatroNotes';

const FretboardComponent = (props:any)=> {
    const frets = FretboardSharps.map((fret)=>{
        return (
            <View style={styles.fret}>
                {
                    
                    fret.map((note)=>{
                        return(
                            <View style={styles.note}></View>
                        )
                    })
                }
            </View>
        );
    })
    const stringsAndNotes = (notes:Array<String>) =>{
        const strings = 
    }
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
    note:{
        borderWidth: 0.5,
        width:'25%',
        height:'100%',
    }
});
  

export default FretboardComponent;