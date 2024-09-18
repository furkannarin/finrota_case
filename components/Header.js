import React from 'react';
import { View, Image } from 'react-native';
import Styles, { icons } from '../Styles';

const Header = () => {
    const { container, sidebarIconStyle, appIconStyle, currencyBorder, currencyIconStyle } = Styles.Header();
    const { appIcon, currencyIcon, sidebarIcon } = icons;

    return (
    <View style={container}>
        <Image resizeMode='contain' source={sidebarIcon} style={sidebarIconStyle} />
        <Image resizeMode='contain' source={appIcon} style={appIconStyle} />
        <View style={currencyBorder}>
            <Image resizeMode='contain' source={currencyIcon} style={currencyIconStyle} />
        </View>
    </View>
    );
};

export default Header;
