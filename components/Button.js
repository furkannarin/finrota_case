import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBorders, AppTheme } from '../Styles';

const Button = props => {
    const { device, colors, borders } = AppTheme;
    const { style, opacity, text, textStyle, icon, iconStyle, iconContainerStyle, onPress, separatorOptions, selected } = props;

    // CREATE SEPARATOR IF THIS BUTTON HAS SEPARATOR_OPTIONS
    let containerStyle = separatorOptions ?
    [ style,
        { ...createBorders(
        separatorOptions.side || '',
        separatorOptions.width,
        separatorOptions.color,
        separatorOptions.radius
        )}
    ] : style;

    // OVERRIDE THE STYLING IF THIS BUTTON IS SELECTED
    const selectedStyles = {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.orange,
        height: (device.height * 0.3) * 0.15,
        width: device.width * 0.17,
        borderRadius: borders.radius.light
    }

    containerStyle = selected ? selectedStyles : containerStyle;
    const titleStyle = selected ? [ textStyle, { color: colors.primary.white }] : textStyle;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[containerStyle, { opacity: opacity || 1 }]}>
            { icon &&
                <View style={iconContainerStyle}>
                    <Image resizeMode='contain' source={icon} style={iconStyle} />
                </View>
            }
            <Text style={titleStyle}>{text || 'ENTER_MY_TEXT_PLEASE' }</Text>
        </TouchableOpacity>
    );
};

export default Button;
