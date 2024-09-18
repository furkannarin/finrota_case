import React from 'react';

// COMPONENTS
import { Text, View, Image } from 'react-native';
import Button from './Button'

// STYLING & MOCK
import Styles, { icons, AppTheme } from '../Styles';
import MockDataTR from '../TR.json'

const History = () => {
  const { borders, colors } = AppTheme;
  const { container, btnsContainer, button, buttonText, amount, row, rowContainer, rowIcon, rowMidPart, headerText, text } = Styles.History();

  const separatorOptions = { side: 'Right', width: borders.widths.regular, color: colors.primary.paleGray } // SEPARATOR FOR BUTTON

  const { arrowUp, arrowDown, coins } = icons;
  const { datesAndAmounts, subheaders, buttons } = MockDataTR;
  // ALL OF THE ABOVE CAN BE TAKEN OUTSIDE OF THE COMPONENT IF THE LOGIC OF THIS COMPONENT GROWS BIGGER

  const Row = props => {
    return (
      <View style={row}>
        <Image resizeMode='contain' source={props.icon} style={rowIcon} />
        <View style={rowMidPart}>
          <Text style={headerText}>{props.headerText}</Text>
          <Text style={text}>{props.text}</Text>
        </View>
          <Text style={amount}>{props.amount}</Text>
      </View>
    )
  }

  return (
      <View style={container}>
        <View style={btnsContainer}>
          <Button style={button} text={buttons.filterBtns.daily} textStyle={buttonText} selected />
          <Button style={button} text={buttons.filterBtns.monthly} textStyle={buttonText} separatorOptions={separatorOptions} />
          <Button style={button} text={buttons.filterBtns.annual} textStyle={buttonText} />
        </View>
        <View style={rowContainer}>
          <Row headerText={subheaders.payment} text={subheaders.islem1} amount={datesAndAmounts.amount1} icon={arrowUp} />
          <Row headerText={subheaders.refund} text={subheaders.islem2} amount={datesAndAmounts.amount3} icon={arrowDown} />
          <Row headerText={subheaders.total} text={subheaders.islem1} amount={datesAndAmounts.amount1} icon={coins} />
        </View>
      </View>
  );
};

export default History;
