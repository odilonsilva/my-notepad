import React, { Component } from 'react';
import { View, TextInput, StyleSheet, BackHandler, AsyncStorage, ToastAndroid } from 'react-native';
import ButtonFloat from '../components/ButtonFloat';
import Header from '../components/Header';

class NoteScreen extends Component {
    static navigationOptions = {
        headerLeft:(
            <Header />
        ),
    };

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }
   
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        note = this.props.navigation.getParam('note',null);
        if(note !== null) this.setState({...note});
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.save();
        setTimeout(() => {
            const { navigate } = this.props.navigation;
            this.props.navigation.getParam('refresh',null)();
            navigate('Home'); 
            return true;
        }, 50);
    }

    changeText = (target) => {
        this.setState({description: target});
    }

    changeTextTitle = (target) => {
        this.setState({title: target});
    }

    save = async () => {
        if(this.state.description.length === 0) return false;

        let note = { 
            title: this.state.title || this.state.description,
            description: this.state.description,
            date : new Date()
        };

        try {
            // await AsyncStorage.removeItem('notes');
            let notas  = await AsyncStorage.getItem('notes');
            if(notas !== null){
                notas = JSON.parse(notas);
                note.id = notas[(notas.length - 1)].id + 1;
                notas.push(note);
                await AsyncStorage.setItem('notes',JSON.stringify(notas));
                console.log('update');
                console.log(notas);
            }
            else{
                notas = [];
                note.id = 1;
                notas.push(note);
                await AsyncStorage.setItem('notes',JSON.stringify(notas));
                console.log('create');
                console.log(note);
            }
            ToastAndroid.showWithGravity(
                'Nota salva com sucesso!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            console.log('saved');
        } catch (error) {
            throw Error('Deu pau!');
        }
    }

    render() { 
        return (
            <View style={style.container}>
                <TextInput placeholder="Titulo" value={this.state.title} style={style.title} onChangeText={this.changeTextTitle}/>
                <TextInput 
                    multiline={true} 
                    numberOfLines={22}
                    placeholder="Sua nota..." 
                    style={style.description} value={this.state.description} onChangeText={this.changeText}/>
                    { this.state.description.length > 0 ?
                        <ButtonFloat icon='save' click={this.save} /> : null
                    }
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#EDEDED',
        alignItems: 'center',
        justifyContent:'center',
    },
    title:{
        backgroundColor: '#fff',
        width:'98%',
        height:60,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor:'silver',
        borderRadius: 7
    },
    description:{
        flex:1,
        backgroundColor: '#fff',
        width:'98%',
        padding: 10,
        marginBottom: 5,
        textAlignVertical:'top',
        borderWidth: 1,
        borderColor:'silver',
        borderRadius: 7
    }
});

export default NoteScreen;