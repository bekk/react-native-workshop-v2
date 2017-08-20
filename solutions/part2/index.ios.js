import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, StatusBar, Text, TextInput, Button, FlatList } from 'react-native'
import DogPost from './src/DogPost'

class ReactNativeWorkshop extends Component{
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      posts: []
    }

    this.saveitem = this.saveitem.bind(this)
  }

  saveitem(){
    const { title, description, posts } = this.state
    if (title && description) {
      this.setState({ posts: [...posts, { title, description }], title: '', description: ''})
    }
  }

  render() {
      return (
        <View style={styles.mainContainer}>
          <StatusBar barStyle="light-content" />
          <View style={styles.toolbar}>
              <Text style={styles.button}>Right</Text>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.button}>Left</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              style={{height: 40, padding: 10}}
              value={ this.state.title }
              placeholder="Tittel..."
              onChangeText={(title) => this.setState({title})}
            />
            <TextInput
              value={ this.state.description }
              style={{height: 40, padding: 10}}
              placeholder="Innlegg..."
              onChangeText={(description) => this.setState({description})}
            />
            <Button onPress={ this.saveitem } title="Lagre" />
            <FlatList
              data={ this.state.posts }
              keyExtractor={ (item, index) => index }
              renderItem={({item, index}) => (
                <DogPost
                  index={ index }
                  title={ item.title }
                  description={ item.description }
                />)}
              />
          </View>
        </View>
      );
    }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4d4d4d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row-reverse'
  },
  button: {
    width: 70,
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  }
});


AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
