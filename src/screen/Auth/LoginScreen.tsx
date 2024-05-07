import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
// import Home from "../../assets/home.svg"
import { Button } from 'react-native-paper';
import { palette } from "../../theme/palette";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { handleCognitoError, showSnackbar } from "../../util/constFunctions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Amplify, Auth } from 'aws-amplify'

export const DEFAULT_COUNTRY_CODE_PHONE = ['SA', 'IN', 'AE', 'BH']


function LoginScreen(): React.JSX.Element {
    const navigation = useNavigation<any>();
    const phoneInput = React.useRef<PhoneInput>(null);

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [otp, setotp] = React.useState('');
    const [isOtp, setIsOtp] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [cognitoUserData, setCognitoUserData] = React.useState(null);


    const ref = useBlurOnFulfill({ otp, cellCount: 6 });

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        otp,
        setotp,
    });

    const [errors, setErrors] = React.useState({
        phoneNumber: '',
        otp: ''
    });

    React.useEffect(() => {
        checkCustomerLogin();
    }, []);

    const validate = () => {

        if (!phoneNumber) {
            setErrors({ ...errors, phoneNumber: "Enter phone number" });
            return false;
        }
        // } else if (!phoneNumber) {
        //     setErrors({ ...errors, phoneNumber: "Enter correct phone number" });
        //     return false;
        //     // } else if (otp.length < 5) {
        //     //     setErrors({ ...errors, otp: "Enter OTP code" });
        //     //     return false;
        //     // }
        // }
        return true;
    }


    const otpHandler = async () => {
        const val = validate();
        if (val) {
            try {
                setIsLoading(true);
                const cognitoUser = await Auth.signUp({
                    username: phoneNumber,
                    password: Date.now().toString(),
                    attributes: {
                        phone_number: phoneNumber,
                        name: 'BBCustomer'
                    }

                });
                if (cognitoUser && cognitoUser.user) {
                    console.log(JSON.stringify(cognitoUser));
                    setCognitoUserData(cognitoUser)
                    try {
                        await AsyncStorage.setItem('cognitoUser', JSON.stringify(cognitoUser));
                    } catch (error) {
                        console.log(error.message);
                    }
                }
                console.log('***** cognito user *****' + JSON.stringify(cognitoUser));
                setIsOtp(true)
               
            } catch (error) {
                console.log('error signing in', error);
                const msg = handleCognitoError(error);
                signIn();
                setIsLoading(false);
                // showSnackbar(msg, 'error')
            }
        }

    }

    const signIn = async () => {
        setIsLoading(true);
        try {
            const cognitoUser = await Auth.signIn(phoneNumber);
            console.log('Sign In Response: ' + JSON.stringify(cognitoUser));
            setCognitoUserData(cognitoUser)
            setIsLoading(false);
            setIsOtp(true)
            //   this.props.navigation.navigate('OtpScreen', {
            //     signUpResponse: cognitoUser
            //   });
        } catch (error) {
            setIsLoading(false);
            console.log('error signing in', error);
        }
    }
    const verifyHandler = async () => {
        setIsLoading(true);
        try {
            const cognitoUser = await Auth.sendCustomChallengeAnswer(cognitoUserData, otp);

            console.log('Sign In Response: ' + JSON.stringify(cognitoUser));

            setIsLoading(false);
            setIsOtp(true)
            navigation.dispatch(StackActions.replace("HomeScreen"));
        } catch (error) {
            setIsLoading(false);
            console.log('error signing in', error);
        }
    }


    const checkCustomerLogin = async () => {
        try {
            const data = await Auth.currentAuthenticatedUser();
            console.log('resp: ' + JSON.stringify(data));
            if (data.username) {
                navigation.dispatch(StackActions.replace("HomeScreen"));
            }
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    return (
        <>
            {!isOtp ?
                <View style={styles.container}>
                    <Text style={styles.numberHeding}>Enter Your Phone Number</Text>
                    <Text style={styles.bodyTxt}>We will send you the 4 digit verification code</Text>

                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        placeholder="Enter phone number"
                        defaultCode={"IN"}
                        layout="second"
                        onChangeFormattedText={(value) => {
                            setPhoneNumber(value);

                        }}
                        countryPickerProps={{
                            countryCodes: DEFAULT_COUNTRY_CODE_PHONE
                        }}
                        containerStyle={{ height: 46, width: '100%', borderColor: "#000", borderWidth: 0.6, borderRadius: 6 }}
                        textContainerStyle={{ height: 44, backgroundColor: "#FFF", borderRadius: 6 }}
                        textInputStyle={{ height: 44, borderRadius: 6 }}

                    />
                    {/* <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('HomeScreen')}
            /> */}

                    <Button mode="contained" style={styles.btn}
                        onPress={() => otpHandler()}>
                        Next
                    </Button>
                </View> :
                <View style={styles.container}>
                    <Text style={styles.numberHeding}>OTP Verification</Text>
                    <Text style={styles.bodyTxt}>Enter the OTP sent to 987367</Text>

                    <CodeField
                        ref={ref}
                        value={otp}
                        onChangeText={setotp}
                        cellCount={6}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        blurOnSubmit={true}
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />

                    <Text style={styles.resendTxt}>Didn't receive OTP? <Text>RESEND</Text></Text>

                    {/* <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('HomeScreen')}
            /> */}

                    <Button mode="contained" style={styles.btn}
                        onPress={() => verifyHandler()}>
                        Verify
                    </Button>
                </View>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,
    },
    numberHeding: {
        fontSize: 16,
        fontWeight: 700,
        flexWrap: 'wrap'
    },
    bodyTxt: {
        fontSize: 13,
        fontWeight: 400,
        flexWrap: 'wrap',
        marginTop: 6,
        marginBottom: 20
    },
    resendTxt: {
        fontSize: 13,
        fontWeight: 400,
        flexWrap: 'wrap',
        marginTop: 16,
    },
    btn: {
        width: '100%',
        backgroundColor: palette.primaryDark,
        borderRadius: 6,
        marginTop: 50
    },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 4,
        marginRight: 4
    },
    focusCell: {
        borderColor: palette.primaryDark
    },

});

export default LoginScreen;
