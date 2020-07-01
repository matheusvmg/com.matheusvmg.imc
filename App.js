import React from 'react'
import { View } from 'react-native'
import CardImc from './app/components/CardImc'

 const App = () => {

  //classificação IMC
  /* menor que 18,5 -> Magreza
  * Entre 18,5 e 24,9	-> Normal
  * Entre 25,0 e 29,9 -> Sobrepeso I
  * Entre 30,0 e 39,9 -> Obesidade II
  * Maior que 40,0 -> Obesidade grave III
  */
  
  return (
    <View>
      <CardImc />
    </View>
  )
  
}

export default App