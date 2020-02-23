import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ToastAndroid, Alert, AsyncStorage} from 'react-native';
import { Icon } from 'react-native-elements';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  clearList = async () => { 
    Alert.alert(
      'Apagar tudo',
      'Deseja realmente apagar todas as notas?',
      [
        {text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: async () => {
          await AsyncStorage.removeItem('notes');
          this.props.list();
          ToastAndroid.showWithGravity(
            'Todos os item foram apagados!',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          // console.log('OK Pressed')
        } 
      },
      ],
      {cancelable: false},
    );
  }

  render() {
    return(
      <View>
          <TouchableHighlight onPress={() => this.clearList()}>
            <View style={style.item}>
                <Icon style={style.icon} name="md-trash" type='ionicon' color="#f55" size={30} />
                <Text style={style.text}>Apagar tudo</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.clearList()}>
            <View style={style.item}>
                <Icon style={style.icon} name="md-trash" type='ionicon' color="#f55" size={30} />
                <Text style={style.text}>Apagar tudo</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}
  const style = StyleSheet.create({
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: 'silver',
      flexDirection: 'row',
    },
    icon:{
      width: 50,
      height: 50,
    },
    text:{
      marginLeft: 10,
      paddingTop: 5,
    }
  });
