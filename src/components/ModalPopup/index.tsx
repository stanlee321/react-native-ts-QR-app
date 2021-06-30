import React, { useEffect, useRef, useState} from 'react';

import { StyleSheet, Modal, View, Animated  } from 'react-native';

const ModalPopup = ({visible, children}) => {

    const [ showModal, setShowModal ] = useState(visible)

    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    },[visible])

    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValue, {
                    toValue: 1,
                    useNativeDriver: true,
                    delay:1000,
                }).start();
        }else {
            setTimeout(()=> setShowModal(false), 200)
            setShowModal(false);
            Animated.timing(
                scaleValue, {
                    toValue: 0,
                    duration:300,
                    useNativeDriver:true
                }
            ).start()
        }
    }

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <View style={[styles.modalContainer]}>{children}</View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: "80%",
        backgroundColor: 'white',
        paddingHorizontal: 20, 
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    }

})

export default ModalPopup;