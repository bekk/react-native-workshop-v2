import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const images = [require("./images/dog1.jpg"), require("./images/dog2.jpg"), require("./images/dog3.jpg")]
const randomImageSource = () => images[Math.floor(Math.random()*images.length)]

class DogPost extends Component {
  render() {
    return (
      <View style={ [ styles.media, this.props.style ] }>
        <Image style={ styles.figure } source={randomImageSource()}/>
        <View style={ styles.body }>
          <Text style={ styles.title }>{ this.props.title }</Text>
          <Text style={ styles.text }>{ this.props.description }</Text>
          { this.props.children }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  media: {
    margin: 5,
    padding: 10,
    backgroundColor: '#ececec',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  figure: {
    borderRadius: 25,
    marginRight: 10,
    width: 50,
    height: 50,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
})

export default DogPost
