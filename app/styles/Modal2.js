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
      text_card_result: {
        color: '#fff',
        fontSize: hp('3.5%') //25
      }
})

export default styles