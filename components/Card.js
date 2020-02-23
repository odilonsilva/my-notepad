import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }

    edit = () => {
        const { navigate } = this.props.navigation;
        navigate('Note',{note:{title: this.props.title,description: this.props.description},refresh:this.props.getList});
    }

    render() { 
        let date = new Date(this.props.date);
        return (
            <TouchableHighlight onPress={this.edit}>
                <View style={style.card} >
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text style={style.subTitle}>{date.toLocaleDateString()}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
const style = StyleSheet.create({
    card: {
        width: '100%',
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#CCC',
        color: '#999',
        padding: 10
    },
    title: {
        fontSize: 20
    },
    subTitle: {
        fontSize: 12
    }
});
 
export default Card;
