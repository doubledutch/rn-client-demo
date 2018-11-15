import { AppRegistry } from 'react-native'
import { install } from '@doubledutch/rn-client/webShim'
import HomeView from './src/home-view'

function runApp(DD) {
  AppRegistry.registerComponent('clientdemo', () => HomeView)
  AppRegistry.runApplication('clientdemo', {
    rootTag: document.getElementById('react-root'),
    initialProps: { ddOverride: DD },
  })
}

if (window.DD && window.DD.Events) {
  install(runApp)
} else {
  runApp(null)
}
