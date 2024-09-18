import React from 'react';
import { Text, View } from 'react-native';
import Styles, { icons } from '../Styles';
import MockDataTR from '../TR.json';
import Button from './Button';

const Payment = () => {
  const { headers, buttons: { paymentTypes } } = MockDataTR;
  const { creditCard, mail, qrIcon, smsIcon } = icons;
  const { container, title, btnsContainer, button, iconStyle, iconContainer, textStyle } = Styles.Payment();

  return (
      <View style={container}>
          <Text style={title}>{headers.paymentMenus}</Text>
          <View style={btnsContainer}>
            <Button style={button} icon={creditCard} iconStyle={iconStyle} iconContainerStyle={iconContainer} text={paymentTypes.card} textStyle={textStyle} />
            <Button style={button} icon={mail} iconStyle={iconStyle} iconContainerStyle={iconContainer} text={paymentTypes.email} textStyle={textStyle} />
            <Button style={button} icon={smsIcon} iconStyle={iconStyle} iconContainerStyle={iconContainer} opacity={0.7} text={paymentTypes.sms} textStyle={textStyle} />
            <Button style={button} icon={qrIcon} iconStyle={iconStyle} iconContainerStyle={iconContainer} opacity={0.7} text={paymentTypes.qr} textStyle={textStyle} />
          </View>
      </View>
  );
};

export default Payment;
