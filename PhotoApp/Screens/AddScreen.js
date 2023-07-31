import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function AddScreen(props) {
    return (
        <View style = {styles.container}>
            <View style = {{flex : 0.2, alignItems : 'center', justifyContent : 'center', backgroundColor : '#E0E0E0',borderRadius : 20,width : "90%"}}>
                <AntDesign name="closecircle" size={24} color="black" style = {{position : 'absolute' ,right : 0,top:0 ,paddingRight : "3%",paddingTop : "3%"}} onPress={() => props.navigation.navigate('Home')}/>
                <View style = {{flexDirection : 'row' }}>
                    <AntDesign name="plussquareo" size={24} color="black" style = {{position : 'absolute' ,left : -80 ,paddingRight : "10%"}}/>
                    <Text style = {{ fontSize : 18}}>Create a post</Text>
                </View>
                <View style = {{borderBottomColor: '#D3D3D3',borderBottomWidth: 1,marginTop : 10,marginBottom : 10,width : "60%"}}/>
                <View style = {{flexDirection : 'row' }}>
                    <AntDesign name="plussquareo" size={24} color="black" style = {{position : 'absolute' ,left : -78 ,paddingRight : "10%"}}/>
                    <Text style = {{ fontSize : 18}}>Create a story</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddScreen;