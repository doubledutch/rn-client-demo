import React, { Component } from 'react'
import ReactNative, {
  TouchableOpacity, Text, TextInput, View, ScrollView
} from 'react-native'

import client, { Avatar, TitleBar } from '@doubledutch/rn-client'

export default class HomeView extends Component {
  state = {}
  componentWillMount() {
    client.getUser(client.currentUser.id).then(currentUser => this.setState({currentUser}))
  }

  render() {
    const currentUser = this.state.currentUser || client.currentUser
    const {currentEvent} = client
    return (
      <View style={s.container}>
        <TitleBar title="Info" client={client} />
        <ScrollView style={s.scroll}>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
            <Avatar size={50} user={currentUser} />
            <Text style={{paddingLeft: 10, fontSize: 18}}>{currentUser.firstName} {currentUser.lastName}</Text>
          </View>
          <Text>client.currentUser: {JSON.stringify(currentUser, null, 2)}</Text>

          <Text style={{paddingTop: 15, fontSize: 18, textAlign: 'center'}}>{currentEvent.name}</Text>
          <Text>client.currentEvent: {JSON.stringify(currentEvent, null, 2)}</Text>
        </ScrollView>
      </View>
    )
  }
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
