import React from 'react';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, StyleSheet} from 'react-native';

export default props => {
    return(
        <TouchableHighlight style={[style.body]} onPress={()=>{props.navigation.navigate('Settings')}}>
            <Icon
                name={props.icon}
                size={20}
                color='#777'
                />
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    body: {
        right: 5,
    }
});