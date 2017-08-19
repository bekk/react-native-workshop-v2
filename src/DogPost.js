import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const images = [require("./images/dog1.jpg"), require("./images/dog2.jpg"), require("./images/dog3.jpg")]
const randomImageSource = () => images[Math.floor(Math.random()*images.length)]

class DogPost extends Component {
  render() {
    return (
      <View style={ styles.media }>
        <Image style={ styles.figure } source={randomImageSource()}/>
        <View style={ styles.body }>
          <Text style={ styles.title }>Barking Title</Text>
          <Text style={ styles.text }>Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Good Boy park lazy dog walk kibble Scooby snacks licks canary.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
})

export default DogPost
