import { AppRegistry } from 'react-native'
import HomeView from './src/HomeView'

if (YellowBox)
  YellowBox.ignoreWarnings([
    'Warning: Async Storage has been extracted',
    'Warning: WebView has been extracted',
    'Warning: View.propTypes has been deprecated',
  ])AppRegistry.registerComponent('clientdemo', () => HomeView)
AppRegistry.registerComponent('section', () => HomeView)
