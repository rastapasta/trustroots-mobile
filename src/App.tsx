import React from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native'

import Logo from '../assets/logo-white.svg'
import colors from './common/colors'
import style from './common/styles'

const App = () => {
  const { width, height } = useWindowDimensions()
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{width, height, position: 'absolute'}}
          source={require('../assets/background.jpg')}
          resizeMode='cover'
        />

        <Logo height={150} width={150} />

        <Text style={styles.title}>
          Travellers' community
        </Text>
        <Text style={styles.subtitle}>
          Sharing, hosting and getting people together.
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...style.shadow,
    textShadowRadius: 6,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.foreground,
  },
  subtitle: {
    ...style.shadow,
    textShadowRadius: 4,
    marginTop: 10,
    fontWeight: 'bold',
    color: colors.foreground
  }
})

export default App
