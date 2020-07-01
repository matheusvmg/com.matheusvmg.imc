import { StyleSheet } from 'react-native'

//estilização
const styles = StyleSheet.create({
    container2: {
      backgroundColor: '#f8f9fa', //#F4F6F6
      borderRadius: 20,
      marginTop: 70,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 50,
      maxWidth: '100%',
      flex: 1,
      maxHeight: '100%',
      paddingBottom: 15
    },
    title: {
      alignSelf: 'center',
      fontSize: 40, //50
      margin: 20,
      marginTop:50,
      color: '#293241'
    },
    label: {
      color: '#293241',
      marginLeft: 35,
      fontSize: 18,
      marginTop: 20
    },
    input: {
      borderWidth: 3,
      padding: 5,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
      borderColor: '#293241',
      borderRadius: 30
    },
    result: {
      alignSelf: 'center',
      margin: 20,
      fontSize: 22,
      color: '#fff'
    },
    result2: {
      alignSelf: 'center',
      fontSize: 22,
      color: '#fff',
      margin: 20
    },
    card_result: {
      height: '35%', //250
      width: '70%', //278
      maxWidth: '70%',
      backgroundColor: '#33415C',
      borderRadius: 10,
      alignSelf: 'center',
      margin: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text_card_result: {
      color: '#fff',
      fontSize:34
    },
    btn: {
      height: '10%', //39
      width: '50%', //206
      backgroundColor: '#33415C',
      borderColor: '#293241',
      borderWidth: 5,
      borderRadius: 5,
      alignSelf: 'center',
      marginBottom: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    btn_title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 22
    }
  })

export default styles
  