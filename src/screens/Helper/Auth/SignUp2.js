import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import globalStyle from '../../../Styles/Global/globalStyle';
import signUpStyle from '../../../Styles/signUpStyle';
import Input from '../../../components/global/Input';
import PhotoPicker from '../../../components/global/PhotoPicker';
import { useDispatch, useSelector } from 'react-redux';
import { SaveSignUpDataAction } from '../../../store/User/SignUp-Helper/actions';

import AuthHeader from './AuthHeader'



const SignUp2 = ({ navigation }) => {


    const disptach = useDispatch();

    const user = useSelector((store) => { return store.signUpReducer.user })
    
    const [frontID, setFrontID] = useState(user.frontID);
    const [backID, setBackID] = useState(user.backID);
    const [certificates, setCertificates] = useState(user.certificates);
    const [personalPhoto, setPersonalPhoto] = useState(user.personalPhoto);
    const [categories, setCategories] = useState(user.categories);
    const [skills, setSkills] = useState(user.skills);

    const [errorFrontID, setErrorFrontID] = useState(null);
    const [errorBackID, setErrorBackID] = useState(null);
    const [errorCertificates, setErrorCertificates] = useState(null);
    const [errorPersonalPhoto, setErrorPersonalPhoto] = useState(null);
    const [errorCategories, setErrorCategories] = useState(null);
    const [errorSkills, setErrorSkills] = useState(null);

    const test = (fieldName, setter, word) => {

        if (!fieldName || fieldName == '') {
            setter(`Please Select ${word}`);
            return false
        }
        setter(null)
        return true;
    }
    const dataValid = () => {
        //categories ?
        let valid = true;
        if (!test(frontID.name, setErrorFrontID, 'Front Id photo'))
            valid = false;
        if (!test(backID.name, setErrorBackID, 'Back Id photo'))
            valid = false;
        if (!test(certificates.name, setErrorCertificates, 'Certificate'))
            valid = false;
        if (!test(personalPhoto.name, setErrorPersonalPhoto, 'Certificate'))
            valid = false;
        if (!test(personalPhoto.name, setErrorPersonalPhoto, 'Certificate'))
            valid = false;
        if (!test(categories, setErrorCategories, 'Category'))
            valid = false;
        if (!test(skills, setErrorSkills, 'Skill') )
            valid = false;
        return valid;
    }
    const saveData = () => {
        disptach(SaveSignUpDataAction({ ...user, frontID, backID, certificates, personalPhoto, categories, skills }))
    }
    const submit = () => {
        if (dataValid()) {
            navigation.navigate('SignUpScreen')
        }
    }

    const showError = (errorField) => {
        return errorField ? <Text style={globalStyle.texterror}>{errorField}</Text> : null
    }
    return (
        <AuthHeader
            continueButtonPress={() => { submit() }}
            signUpButtonPress={() => { }}
            signInButtonPress={() => { navigation.navigate('SignInScreen') }}
            backButtonPress={() => { saveData(), navigation.navigate('SignUpScreen') }}
            active={2}
        >
            <PhotoPicker
                style={signUpStyle.globalPhotoPicker}
                placeholder="Front ID"
                value={frontID}
                setValue={setFrontID}
                error={errorFrontID}
            />
            {showError(errorFrontID)}
            <PhotoPicker
                style={signUpStyle.globalPhotoPicker}
                placeholder="Back Id"
                value={backID}
                setValue={setBackID}
                error={errorBackID}
            />
            {showError(errorBackID)}
            <PhotoPicker
                style={signUpStyle.globalPhotoPicker}
                placeholder="Certificate"
                value={certificates}
                setValue={setCertificates}
                error={errorCertificates }
            />
            {showError(errorCertificates)}
            <PhotoPicker
                style={signUpStyle.globalPhotoPicker}
                placeholder="Personal Photo"
                value={personalPhoto}
                setValue={setPersonalPhoto}
                error={errorPersonalPhoto}
            />
            {showError(errorPersonalPhoto)}
            <Input
                value={categories}
                onChangeText={setCategories}
                placeholder='Categories'
                style={globalStyle.oneLineInput}
                error={errorCategories }
            />
            {showError(errorCategories)}
            <Input
                value={skills}
                onChangeText={setSkills}
                placeholder='Skills'
                style={globalStyle.oneLineInput}
                error={errorSkills}
            />
            {showError(errorSkills)}
            <View >
                <Text style={signUpStyle.ClickingText}>  By clicking continue you are confirming  </Text>
                <Text style={signUpStyle.ClickingText}>  all details are correct </Text>
            </View>
        </AuthHeader>

    )
};

export default SignUp2;


