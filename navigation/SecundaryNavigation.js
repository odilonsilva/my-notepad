import { createStackNavigator, createAppContainer } from 'react-navigation';
import NoteScreen from '../screens/NoteScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const stack = createStackNavigator({
    Home: HomeScreen,
    Note: NoteScreen,
    Settings: SettingsScreen,
});

const App = createAppContainer(stack);

export default App;
