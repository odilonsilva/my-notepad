import React from 'react';
import { Platform, ScrollView, StyleSheet, View, FlatList, AsyncStorage } from 'react-native';
import Card from '../components/Card';
import ButtonFloat from '../components/ButtonFloat';
import HeaderMenu from '../components/HeaderMenu';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
      return{
        headerLeft:(
          <Header />
        ),
        headerRight:(
          <HeaderMenu icon='settings' navigation={navigation} />
      )
    }
  };
  constructor(props){
    super(props);
    this.state = {dados:[]}
  }
  
  addNote = () => { this.props.navigation.navigate('Note',{refresh:this.getList}); }

  getList = async () => {
    this.setState({dados: null});
    let notas = await AsyncStorage.getItem('notes');
    if (notas !== null) {
        notas = JSON.parse(notas);
        this.setState({dados: notas});
      }
  }

  componentWillMount(){
    this.getList();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <FlatList 
            data={this.state.dados} 
            renderItem={item => <Card navigation={this.props.navigation} {...item.item} getList={this.getList} /> } 
            keyExtractor={(item, index) => item.id.toString()}
            />
        </ScrollView>
        <ButtonFloat icon='add' click={this.addNote} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  contentContainer: {
    // paddingTop: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
