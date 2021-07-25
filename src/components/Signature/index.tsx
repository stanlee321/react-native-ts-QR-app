import React from 'react';
import { View } from 'react-native';

import SignatureScreen from 'react-native-signature-canvas';

const Signature = ({ text, onOK }) => {


    const ref = React.useRef<undefined | any>();

    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature) => {
      //console.log(signature);
      onOK(signature); // Callback from Component props
    };
  
    // Called after ref.current.readSignature() reads an empty string
    const handleEmpty = () => {
      console.log("Empty");
    };
  
    // Called after ref.current.clearSignature()
    const handleClear = () => {
      console.log("clear success!");
    };
  
    // Called after end of stroke
    const handleEnd = () => {
      ref.current.readSignature();
    };
  
    return (
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        //autoClear={true}
        descriptionText={text}
      />
    );
}

export default Signature