import React from 'react';
import { Text, View } from 'react-native';
import Styles, { AppTheme } from '../Styles';
import MockDataTR from '../TR.json'

const Cards = () => {
  const { colors } = AppTheme;
  const { headers, cards, datesAndAmounts } = MockDataTR;
  const { container, title, subtitle, rowContainer, row, cardCircle, cardNameText, percentageText, amountText } = Styles.Cards();

  const Row = props => {
    const { cardColor, cardName, percentage, amount } = props;
    return (
      <View style={row}>
        <View style={[cardCircle, { backgroundColor: cardColor }]} />
        <Text style={cardNameText}>{cardName}</Text>
        <Text style={percentageText}>{percentage}</Text>
        <Text style={amountText}>{amount}</Text>
      </View>
    )
  };

  return (
      <View style={container}>
        <Text style={title}>{headers.banks}</Text>
        <Text style={subtitle}>{datesAndAmounts.banks}</Text>
        <View style={rowContainer}>
          <Row cardColor={colors.cards.axess} cardName={cards.axess} percentage={datesAndAmounts.half} amount={datesAndAmounts.amount1} />
          <Row cardColor={colors.cards.bonus} cardName={cards.bonus} percentage={datesAndAmounts.quarter} amount={datesAndAmounts.amount2} />
          <Row cardColor={colors.cards.world} cardName={cards.world} percentage={datesAndAmounts.quarter} amount={datesAndAmounts.amount2} />
        </View>
      </View>
  );
};

export default Cards;
