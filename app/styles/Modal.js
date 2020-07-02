import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        height: hp('40%'), //40%
        width: wp('80%'), //80%
        borderRadius: 10,
        backgroundColor: '#293241',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        margin: 10
    },
    result: {
        alignSelf: 'center',
        margin: 25,
        fontSize: hp('2.5%'), //20
        color: '#fff'
      },
      result2: {
        alignSelf: 'center',
        fontSize: hp('2.5%'), //20
        color: '#fff',
        margin: 25
      },
      text_card_result: {
        color: '#fff',
        fontSize: hp('5%') //40
      }
})

export default styles