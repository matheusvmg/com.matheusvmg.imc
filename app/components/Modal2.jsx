import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from '../styles/Modal2'

const ModalValidacao = (props) => {

    return (
        <View>
            <Modal isVisible={props.modal2} 
            style={styles.container2} 
            animationType = {"slide"} 
            backdropOpacity={0.20}
            animationOut={"slideOutDown"}
            onBackdropPress={props.quit2}
            onBackButtonPress={props.quit2}
            animationOutTiming={400}
            >
                <View style={styles.container}>
                    <Text style={styles.text_card_result}>{props.validacao}</Text>
                </View>
            </Modal>
        </View>
    )
}

export default ModalValidacao