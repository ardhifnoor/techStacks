import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Header } from './src/components/common'
import reducers from './src/reducers'
import LibraryList from './src/components/LibraryList'

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Tech Stacks"/>
        <LibraryList/>
      </SafeAreaView>
    </Provider>
  )
}

export default App