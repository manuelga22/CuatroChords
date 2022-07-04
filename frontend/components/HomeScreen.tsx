import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

const getChordNotes = (chord:string)=>{
    return fetch(`http://locahost:3000/${chord}`)
    .then((response)=>response.json())
    .then((json)=>{
        return json
    })
    .catch((error)=>{
        console.log(error)
    })
}

const HomeScreen = ()=> {
    const [chord, onChangeChord] = React.useState("")

    return(

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