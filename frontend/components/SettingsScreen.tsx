import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from "@rneui/themed";

const SettingsScreen = () => {

    return (
        <View style= {styles.container}>

        
            <View style={styles.settingsWrapper}>
                <View style={styles.settingsRow}><Text>Flats Mode</Text><SwitchComponent name='FlatsMode'></SwitchComponent></View>
            </View>

            <View style={styles.authorNote}>
                <Text>Thank for downloading Cuatro Chords</Text><Text>Have fun learning!</Text>
            </View>
        </View>
    );
}


const SwitchComponent = (props: { name: string; }) => {
    const [checkedFlatsMode, setCheckedFlatsMode] = React.useState(false);
    const [isChecked, setCheck] = React.useState(false);

    const toggleSwitch = (value:boolean) => {
                //KEEP ADDING TO THIS IF STATEMENT AS MORE SETINGS ARE BEING ADDED
        if(props.name = 'flatsMode'){
            setCheckedFlatsMode(value);
            setCheck(value);
        }
    };

    React.useEffect(()=>{
        //KEEP ADDING TO THIS IF STATEMENT AS MORE SETINGS ARE BEING ADDED
        if(props.name === 'FlatsMode'){
            setCheck(checkedFlatsMode)
        }
    },[])

    return (
        <View style={styles.view}>
            <Switch
                value={isChecked}
                onValueChange={(value)=>{toggleSwitch(value)}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'3%',
    },
    settingsWrapper:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:10,
        backgroundColor:'white',
        width:'80%',
        height:'60%',
    },
    settingsRow:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    authorNote:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default SettingsScreen;