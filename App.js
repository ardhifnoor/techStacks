import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Header } from './src/components/common'

const App = () => {
  return (
    <Provider store={ createStore }>
      <View>
        <Header title="Tech Stacks"/>
      </View>
    </Provider>
  )
}

export default App