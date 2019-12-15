import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'
  
class LibraryList extends Component {
    renderRow({ item }){
        // return <Text>{ item.title }</Text>
        return <ListItem library={ item } />
    }
    
    render(){
        console.log(this.props)
        const DATA = this.props.libraries

        return(
            <FlatList 
                data={ DATA }
                renderItem={ this.renderRow }/>
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)