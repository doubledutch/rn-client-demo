import { AppRegistry } from 'react-native'
import HomeView from './src/home-view'

console.ignoredYellowBox = ['Warning: View.propTypes has been deprecated']
AppRegistry.registerComponent('clientdemo', () => HomeView)
