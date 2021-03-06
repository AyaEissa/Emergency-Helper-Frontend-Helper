import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import { logOut } from '../../utils/Helper';
import { getProfileData } from '../../utils/ProfileData';
import normalize from "react-native-normalize";

const SideDrawer = (props) => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getProfileData().then((result) => {
            setUserData(result);
        });
    }, []);

    return (
        <View>
            <View style={styles.ProfileContainer}>
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={{ uri: userData.profilePicture }} style={styles.img}></Image>
                        <View style={styles.TextContainer}>
                            <Text style={styles.nameText}>{userData.firstName} {userData.lastName}</Text>
                        </View>
                    </View>
                    <Text style={styles.emailText}>{userData.email}</Text>

                </View>
            </View>
            <View style={styles.itemsContainer} >
                <DrawerItems {...props} fontSize={12}>

                </DrawerItems>
                <View style={{ flexDirection: 'column-reverse' }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        logOut();
                        props.navigation.navigate("Home");
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-log-out" size={20} style={styles.logoutIcon}></Ionicons>
                            <Text style={styles.logoutText} >Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileContainer: {
        width: '100%',
        backgroundColor: '#7598BA',
        height: Dimensions.get('window').height * 0.28,
        borderBottomLeftRadius: 70,

    },
    itemsContainer: {
        marginLeft: '7%'
    },
    img: {
        height: normalize(60),
        borderRadius: 45,
        width: '25%',
        marginLeft: 30,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: normalize(65)
    },
    TextContainer: {
        marginLeft: 10,
        marginTop: '28%'
    },
    nameText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_Bold',
        fontSize: normalize(24),
        width: normalize(200)

    },

    emailText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: normalize(14),
        alignSelf: 'center',
        opacity: 0.8,
        marginLeft: 60,
        marginTop: Dimensions.get('window').height > 600 ? 7 : 5,
        width: '100%'
    },

    logoutButton: {
        marginLeft: '8%',
        marginTop: Dimensions.get('window').height > 600 ? Dimensions.get('window').height * 0.1 : Dimensions.get('window').height * 0.075
    },
    logoutIcon: {
        color: '#132641',
        marginRight: '2%',
        opacity: 0.8
    },
    logoutText: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        opacity: 0.8

    }
});

export default SideDrawer;