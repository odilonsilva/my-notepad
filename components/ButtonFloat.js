import React from 'react';
import { Icon } from 'react-native-elements'
import {TouchableHighlight, StyleSheet} from 'react-native';
export default props => {
    let bottom = props.bottom || '3%';
    return(
        <TouchableHighlight style={[style.body,{bottom:bottom}]} onPress={()=>{props.click()}}>
            <Icon
                name={props.icon}
                size={30}
                color='#fff'
                />
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    body: {
        width: 55,
        height: 55,
        borderRadius:30,
        position: 'absolute',
        backgroundColor: 'rgba(13, 110, 167, 1)',
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        right:'5%',
        bottom: '3%',
        elevation: 15
    },
    icon:{
        color:'#fff'
    }
});