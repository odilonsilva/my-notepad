import React from 'react';
import { View, Image, Text } from 'react-native';
export default props => {
    return(
        <View style={{flexDirection:'row'}}>
            <Image source={ require('../assets/images/icon.png')} style={{width:20, height:20,marginLeft:10,marginRight:5}} />
            <Text style={{fontWeight:'bold',fontSize:20}}>My Notepad</Text>
        </View>
    );
}