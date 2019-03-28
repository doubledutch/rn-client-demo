/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import { StyleSheet, WebView } from 'react-native'

const WebSocketTest = () => <WebView style={s.webView} source={{ html }} />

export default WebSocketTest

const s = StyleSheet.create({
  webView: {
    height: 250,
  },
})

const html = `
<!DOCTYPE html>
<meta charset="utf-8" />
<html style="height: 100%; width: 100%">
<head><title>Outer page</title></head>
<body style="height: 100%; width: 100%">
  <iframe src="https://firebasestorage.googleapis.com/v0/b/bazaar-179323.appspot.com/o/ws-test.html?alt=media&token=2e6becfa-e84d-4e05-aa6b-defe21d3f491" style="height: 100%; width: 100%" />
</body>
</html>
`
