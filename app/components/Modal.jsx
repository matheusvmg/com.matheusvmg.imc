import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from '../styles/Modal'

const ModalResult = (props) => {

    return (
        <View>
            <Modal isVisible={props.modal} 
            style={styles.container2} 
            animationType = {"slide"} 
            backdropOpacity={0.20}
            animationOut={"slideOutDown"}
            onBackdropPress={props.quit}
            onBackButtonPress={props.quit}
            >
                <View style={styles.container}>
                    <Text style={styles.text_card_result}>IMC:</Text>
                    <Text style={styles.result}>{props.imc}</Text>
                    <Text style={styles.text_card_result}>Condição:</Text>
                    <Text style={styles.result2}>{props.condicao}</Text>
                </View>
            </Modal>
        </View>
    )
}

export default ModalResult