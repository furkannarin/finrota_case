// REACT NATIVE MODULES
import { StyleSheet, Dimensions } from 'react-native';

// ICONS
import appIcon from './icons/app-icon.png';
import arrowDown from './icons/arrow-down.png';
import arrowUp from './icons/arrow-up.png';
import coins from './icons/coins.png';
import creditCard from './icons/credit-card.png';
import currencyIcon from './icons/currency-icon.png';
import mail from './icons/mail.png';
import qrIcon from './icons/qr-icon.png';
import sidebarIcon from './icons/sidebar-icon.png';
import smsIcon from './icons/sms.png';

export const icons = { appIcon, arrowDown, arrowUp, coins, creditCard, currencyIcon, mail, qrIcon, sidebarIcon, smsIcon };

export const AppTheme = {
    device: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    fonts: {
        size: {
            header: 24,
            subheader: 18,
            text: 14,
            note: 12
        },
        weight: {
            regular: '400',
            bold: '600',
            light: '200'
        }
    },
    colors: {
        primary: {
            white: '#FFFFFF',
            orange: '#FF671D',
            black: '#101010',
            gray: '#6F6F6F',
            paleGray: '#E7E7E7'
        },
        status: {
            success: '#04D37B',
            onHold: '#FDA600',
            error: '' // optional
        },
        cards: {
            axess: '#F6A00E',
            bonus: '#52B026',
            world: '#D7A2D1'
        }
    },
    borders: {
        widths: {
            thick: 2,
            regular: 1,
            light: 0.7,
            thin: 0.4
        },
        radius: {
            regular: 10,
            circle: 100,
            light: 5,
            veryLight: 2
        }
    }
};

const { device, colors, fonts, borders } = AppTheme;

export const styleDebugger = color => ({
    borderWidth: 2,
    borderColor: color || 'black'
});

export const createBorders = (side = '', width, color, radius) => ({
    [`border${side}Width`]: width || borders.widths.thick,
    [`border${side}Color`]: color || colors.primary.black,
    [`border${side}Radius`]: radius || 0,
});

const Main = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: colors.primary.white
    }
});

const Header = () => StyleSheet.create({
    container: {
        height: device.height * 0.08,
        width: device.width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...createBorders('Bottom', null, colors.primary.orange)
    },
    sidebarIconStyle: {
        height: 25,
        width: 25,
        right: 20
    },
    appIconStyle: {
        height: 90,
        width: 120
    },
    currencyBorder: {
        height: 35,
        width: 35,
        left: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: borders.widths.thin,
        borderRadius: borders.radius.circle,
        borderColor: colors.primary.gray
    },
    currencyIconStyle: {
        height: 20,
        width: 20
    }
});

const History = () => StyleSheet.create({
    container: {
        height: device.height * 0.28,
        width: device.width,
        alignItems: 'center',
        ...createBorders('Bottom', borders.widths.regular, colors.primary.paleGray, borders.radius.light)
    },
    btnsContainer: {
        height: (device.height * 0.28) * 0.2,
        width: device.width * 0.6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        ...createBorders('', borders.widths.regular, colors.primary.paleGray, borders.radius.light)
    },
    button: {
        height: (device.height * 0.28) * 0.1,
        width: device.width * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: fonts.size.text,
        color: colors.primary.black,
        fontWeight: fonts.weight.regular,
        ...createBorders('Left', borders.widths.thin, colors.primary.paleGray, borders.radius.light),
        ...createBorders('Right', borders.widths.thin, colors.primary.paleGray, borders.radius.light)
    },
    rowContainer: {
        height: (device.height * 0.28) * 0.7,
        width: device.width,
        alignItems: 'flex-start'
    },
    row: {
        height: ((device.height * 0.28) * 0.7) * 0.35,
        width: device.width,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowIcon: {
        height: 35,
        width: 35,
        marginHorizontal: 10
    },
    rowMidPart: {
        width: device.width * 0.5
    },
    headerText: {
        color: colors.primary.gray,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.text,
        marginBottom: 2,
        right: 2
    },
    text: {
        color: colors.primary.black,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.text
    },
    amount: {
        width: device.width * 0.2,
        left: device.width * 0.12,
        top: device.width * 0.02,
        color: colors.primary.black,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.text,
        textAlign: 'right',
        textAlignVertical: 'bottom'
    }
    
});

const Cards = () => StyleSheet.create({
    container: {
        height: device.height * 0.2,
        width: device.width,
        alignItems: 'center',
        ...createBorders('Bottom', borders.widths.regular, colors.primary.paleGray, borders.radius.light)
    },
    title: {
        marginVertical: 6,
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        color: colors.primary.black,
        fontSize: fonts.size.subheader,
        fontWeight: fonts.weight.bold
    },
    subtitle: {
        marginHorizontal: 12,
        alignSelf: 'flex-start',
        color: colors.primary.gray,
        fontSize: fonts.size.text,
        fontWeight: fonts.weight.regular,
        marginBottom: 10
    },
    rowContainer: {
        height: (device.height * 0.2) * 0.6,
        width: device.width
    },
    row: {
        height: ((device.height * 0.2) * 0.6) * 0.33,
        width: device.width,
        flexDirection: 'row'
    },
    cardCircle: {
        height: 10,
        width: 10,
        marginLeft: 10,
        marginRight: 6,
        top: 5,
        borderRadius: borders.radius.circle
    },
    cardNameText: {
        width: device.width * 0.25,
        fontSize: fonts.size.text,
        fontWeight: fonts.weight.bold,
        color: colors.primary.black,
        marginRight: device.width * 0.34
    },
    percentageText: {
        textAlign: 'left',
        textAlignVertical: 'bottom',
        width: device.width * 0.1,
        height: 20,
        fontSize: fonts.size.text,
        fontWeight: fonts.weight.bold,
        color: colors.primary.gray
    },
    amountText: {
        textAlign: 'right',
        textAlignVertical: 'bottom',
        width: device.width * 0.2,
        height: 20,
        fontSize: fonts.size.text,
        fontWeight: fonts.weight.bold,
        color: colors.primary.gray,
        ...createBorders('Left', borders.widths.regular, colors.primary.paleGray)
    }
});

const Latest = () => StyleSheet.create({
    container: {
        height: device.height * 0.19,
        width: device.width,
        alignItems: 'center',
        flexDirection: 'row',
        ...createBorders('Bottom', borders.widths.regular, colors.primary.paleGray, borders.radius.light)
    },
    subContainer: {
        height: device.height * 0.19,
        width: device.width * 0.5
    },
    title: side => ({
        marginBottom: 15,
        fontWeight: fonts.weight.bold,
        marginTop: side === 'left' ? 5 : 10,
        marginLeft: side === 'left' ? 10 : 0,
        marginRight: side === 'left' ? 0 : 15,
        textAlign: side === 'left' ? null : 'right',
        fontSize: side === 'left' ? fonts.size.subheader : fonts.size.text,
        color: side === 'left' ? colors.primary.black : colors.primary.orange
    }),
    subtitle: side => ({
        marginBottom: side === 'left' ? 2 : 0,
        marginLeft: side === 'left' ? 10 : 0,
        marginRight: side === 'left' ? 0 : 15,
        bottom: side === 'left' ? 0 : 2,
        fontSize: side === 'left' ? fonts.size.text : fonts.size.subheader,
        textAlign: side === 'left' ? null : 'right',
        textAlignVertical: side === 'left' ? null : 'bottom',
        fontWeight: fonts.weight.bold,
        color: colors.primary.black
    }),
    text: (side, color) => ({
        marginBottom: side === 'left' ? 20 : 17,
        marginLeft: side === 'left' ? 10 : 0,
        marginRight: side === 'left' ? 0 : 15,
        fontSize: side === 'left' ? fonts.size.text : fonts.size.note,
        textAlign: side === 'left' ? null : 'right',
        fontWeight: side === 'left' ? fonts.weight.regular : fonts.weight.bold,
        color: color || colors.primary.gray
    })
});

const Payment = () => StyleSheet.create({
    container: {
        height: device.height * 0.156,
        width: device.width
    },
    title: {
        marginVertical: 6,
        marginHorizontal: 10,
        color: colors.primary.black,
        fontSize: fonts.size.subheader,
        fontWeight: fonts.weight.bold
    },
    btnsContainer: {
        height: (device.height * 0.156) * 0.74,
        flexDirection: 'row',
        marginLeft: device.width * 0.02,
        bottom: 3
    },
    button: {
        width: ((device.height * 0.156) * 0.74) * 0.83,
        height: device.height * 0.11,
        marginRight: device.width * 0.05,
        ...createBorders('', borders.widths.thick, colors.primary.paleGray, borders.radius.light)
    },
    iconContainer: {
        width: device.width * 0.202,
        height: (device.height * 0.11) * 0.45,
        borderTopLeftRadius: borders.radius.light,
        borderTopRightRadius: borders.radius.light,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary.orange,
        bottom: 2
    },
    iconStyle: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
    textStyle: {
        top: 5,
        fontSize: fonts.size.text,
        textAlign: 'center',
        fontWeight: fonts.weight.regular,
        color: colors.primary.gray
    }
});

export default { Main, Header, History, Cards, Payment, Latest };