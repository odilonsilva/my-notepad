import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import AppActions from '../stores/appActions';

class Children extends Component {
    setText(){
        this.props.dispatch(AppActions.setText('Novo Text'))
    }
    render() {
        return (
            <View>
                <Button title="Mudar texto" onPress={() => this.setText()} />
            </View>
        )
    }
}
const ChildrenConnect = connect(store => ({text: store.text}))(Children)

class App extends Component {
    constructor() {
        super()
        this.state = { text: 'Este texto' }
    }
    render() {
        return (
            <View style={{marginTop:20}}>
                <Text>{this.state.text}</Text>
                <ChildrenConnect />
            </View>
        )
    }
}
export default connect(store => ({text: store.text}))(App)