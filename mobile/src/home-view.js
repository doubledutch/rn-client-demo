import React, { Component } from 'react'
import ReactNative, {
  Alert, AsyncStorage, Button, Text, View, ScrollView
} from 'react-native'
import leftPad from 'left-pad'

import client, { Avatar, TitleBar } from '@doubledutch/rn-client'

export default class HomeView extends Component {
  state = {}
  componentDidMount() {
    client.getAttendee(client.currentUser.id).then(currentUser => this.setState({currentUser}))
    AsyncStorage.getItem('random').then(this.setState({random}))
  }

  render() {
    const {backgroundColor} = this.props
    const currentUser = this.state.currentUser || client.currentUser
    const {currentEvent} = client
    const random = this.state.random || '(none)'
    return (
      <View style={[s.container, backgroundColor ? {backgroundColor} : null]}>
        <TitleBar title="Info" client={client} />
        <ScrollView style={s.scroll}>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
            <Avatar size={50} user={currentUser} />
            <Text style={{paddingLeft: 10, fontSize: 18}}>{currentUser.firstName} {currentUser.lastName}</Text>
          </View>

          <Button title="getCurrentUser" onPress={() => client.getCurrentUser().then(result => Alert.alert("getCurrentUser", JSON.stringify(result, null, 2)))} />
          <Button title="getCurrentEvent" onPress={() => client.getCurrentEvent().then(result => Alert.alert("getCurrentEvent", JSON.stringify(result, null, 2)))} />
          <Button title="refreshToken" onPress={() => client.refreshToken().then(result => Alert.alert("refreshToken", result))} />
          <Button title="getPrimaryColor" onPress={() => client.getPrimaryColor().then(result => Alert.alert("getPrimaryColor", result))} />
          <Button title="dd://leaveevent" onPress={() => client.openURL('dd://leaveevent')} />
          <Button title="logOut" onPress={() => client.logOut()} />
          <Button title="dismissLandingPage" onPress={() => client.dismissLandingPage(false)} />
          <Button title="dismissLandingPage(permanent)" onPress={() => client.dismissLandingPage(true)} />
          <Button title={`random color. current: ${backgroundColor || 'default'}`} onPress={openWithRandomColor} />
          <Button title={`AsyncStorage random: ${random}`} onPress={() => AsyncStorage.setItem('random', Math.floor(Math.random() * 1000))} />

          <Text>client.currentUser: {JSON.stringify(currentUser, null, 2)}</Text>

          <Text style={{paddingTop: 15, fontSize: 18, textAlign: 'center'}}>{currentEvent.name}</Text>
          <Text>client.currentEvent: {JSON.stringify(currentEvent, null, 2)}</Text>
        </ScrollView>
      </View>
    )
  }
}

function openWithRandomColor() {
  const hex = leftPad(Math.floor((Math.random() * 255*255*255)).toString(16), 6, 0)
  client.openURL(`dd://extensions/clientdemo?backgroundColor=%23${hex}`)
}

const s = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9e1f9',
  },
  scroll: {
    flex: 1,
    padding: 15
  }
})
