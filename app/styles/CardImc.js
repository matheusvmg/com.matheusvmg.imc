import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//estilização
const styles = StyleSheet.create({
    container2: {
      backgroundColor: '#f8f9fa', //#F4F6F6
      borderRadius: 20,
      marginTop: 70,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 50,
      maxWidth: wp('100%'), //100%
      flex: 1,
      maxHeight: hp('100%'), //100%
      paddingBottom: 15
    },
    title: {
      alignSelf: 'center',
      fontSize: hp('5%'), //40
      margin: 20,
      marginTop:50,
      color: '#293241'
    },
    label: {
      color: '#293241',
      marginLeft: 35,
      fontSize: hp('2%'), //18
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
      fontSize: hp('4%'), //22
      color: '#fff'
    },
    result2: {
      alignSelf: 'center',
      fontSize: hp('4%'), //22
      color: '#fff',
      margin: 20
    },
    card_result: {
      height: hp('35%'), //250 //35%
      width: wp('70%'), //278 //70%
      maxWidth: wp('70%'), //70%
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
      fontSize: hp('5%') //34
    },
    btn: {
      height: hp('6%'), //39 //10%
      width: wp('50%'), //206 //50%
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
      fontSize: hp('3%') //22
    }
  })

export default styles
  