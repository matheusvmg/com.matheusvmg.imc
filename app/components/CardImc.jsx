import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native'
import ModalResult from './Modal'
import ModalValidacao from './Modal2'
import styles from '../styles/CardImc'

const CardImc = () => {
  
    //classificação IMC
    /* menor que 18,5 -> Magreza
    * Entre 18,5 e 24,9	-> Normal
    * Entre 25,0 e 29,9 -> Sobrepeso I
    * Entre 30,0 e 39,9 -> Obesidade II
    * Maior que 40,0 -> Obesidade grave III
    */
    
    //estados dos componentes
    const [pesoImc, onChangeText] = React.useState('')
    const [alturaImc, onChangeText2] = React.useState('')
    const [resultadoImc, setResultadoImc] = React.useState('')
    const [condicaoImc, setCondicaoImc] = React.useState('')
    const [modal, setModal] = React.useState(state)
    const [modal2, setModal2] = React.useState(state2)
    const [validacao, setValidacao] = React.useState('')
  
    let state = {
      visible: false
    }
  
    let state2 = {
      visible: false
    }
  
    function calculaImc(){
  
    //efetuo o cálculo
    let peso = pesoImc
    let altura = alturaImc
    let resultado = peso / (altura * altura)
  
    //estrutura de decisão para verificar qual categoria de acordo com o resultado
    if(resultado <= 18.5){
      setResultadoImc(resultado.toFixed(2))
      setCondicaoImc('Magreza')
    }else if(resultado >= 18.5 && resultado <= 24.9){
      setResultadoImc(resultado.toFixed(2))
      setCondicaoImc('Normal')
    }else if(resultado >= 25 && resultado <= 29.9){
      setResultadoImc(resultado.toFixed(2))
      setCondicaoImc('Sobrepeso I')
    }else if(resultado >= 30 && resultado <= 39.9){
      setResultadoImc(resultado.toFixed(2))
      setCondicaoImc('Obesidade II')
    }else{
      setResultadoImc(resultado.toFixed(2))
      setCondicaoImc('Obesidade Grave III')
    }
  
    //atualiza o estado dos campos de texto
    onChangeText('')
    onChangeText2('')
  
  }

    return (
      <ScrollView>
        <View style={styles.container2}>
  
          <Text style={styles.title}>Cálculo de IMC</Text>
          <Text style={styles.label}>Digite seu peso:</Text>
  
          <TextInput placeholder="digite sua peso" 
          style={styles.input} 
          onChangeText={text => onChangeText(text)} 
          keyboardType="numeric"
          value={pesoImc}
          />
  
          <Text style={styles.label}>Digite sua altura:</Text>
          <TextInput placeholder="digite seu altura" 
          style={styles.input} 
          onChangeText={text => onChangeText2(text)} 
          keyboardType="numeric"
          value={alturaImc}
          />
          
          <TouchableOpacity title="calcular"
          style={styles.btn}
          onPress={
  
            () => {
              //estrutura que verifica se o campo foi digitado
              if(pesoImc === '' && alturaImc === ''){
                setValidacao('Digite seu peso / altura')
                setModal2(state.visible = true)
              }else if(alturaImc === ''){
                setValidacao('Digite seu peso / altura')
                setModal2(state.visible = true)
              }else if(pesoImc === ''){
                setValidacao('Digite seu peso / altura')
                setModal2(state.visible = true)
              }else{
                calculaImc()
                setModal(state.visible = true)
              }
            }
          }
  
          >
          <Text style={styles.btn_title}>calcular</Text>
          </TouchableOpacity>
            <ModalResult
            imc={resultadoImc}
            condicao={condicaoImc}
            modal={modal}
            quit={() => {setModal(state.visible = false)}}
            />
  
            <ModalValidacao
            validacao={validacao}
            modal2={modal2}
            quit2={() => {setModal2(state2.visible = false)}}
            />
        </View>
      </ScrollView>
    )
  }

export default CardImc