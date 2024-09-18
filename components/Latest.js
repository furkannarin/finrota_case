import React from 'react';
import { Text, View } from 'react-native';
import Styles, { AppTheme } from '../Styles';
import MockDataTR from '../TR.json'

const Latest = () => {
  const { colors } = AppTheme;
  const { headers, datesAndAmounts, person, status } = MockDataTR;
  const { container, subContainer, title, subtitle, text } = Styles.Latest();

  return (
    <View style={container}>
        <View style={subContainer}>
            <Text style={title('left')}>{headers.latest}</Text>
            <Text style={subtitle('left')}>{person}</Text>
            <Text style={text('left')}>{datesAndAmounts.latest1}</Text>
            <Text style={subtitle('left')}>{person}</Text>
            <Text style={text('left')}>{datesAndAmounts.latest1}</Text>
        </View>
        <View style={subContainer}>
            <Text style={title()}>{headers.seeAll}</Text>
            <Text style={subtitle()}>{datesAndAmounts.latest2}</Text>
            <Text style={text(null, colors.status.success)}>{status.success}</Text>
            <Text style={subtitle()}>{datesAndAmounts.latest2}</Text>
            <Text style={text(null, colors.status.onHold)}>{status.onHold}</Text>
        </View>
    </View>
  );
};

export default Latest;
