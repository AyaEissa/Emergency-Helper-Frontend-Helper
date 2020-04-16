import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  buttonforget: {
    color: '#132641',
    fontSize: 12,
    fontFamily:'Montserrat_SemiBold',
  },
  forgetPasswordView: {
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    width:'100%',
    top:Dimensions.get('window').height>850?'51%':Dimensions.get('window').height<600?'57%':'56%',
  },
  input: {
    height: Dimensions.get('window').height>800?30:30,
    marginBottom: '0%',
    marginTop: Dimensions.get('window').height>850?'8%':Dimensions.get('window').height<600?'2%':'3%',
    
},
  emailinput:{
     marginTop: Dimensions.get('window').height>850?'12%':Dimensions.get('window').height<600?'8%':'12%',
     height: Dimensions.get('window').height>800?30:30,
     marginBottom:'0%'
},
form: {
  height: '30%',
},
 textError: {
  color: '#b30000',
  fontSize: 12,
  position: 'relative',
  alignItems: 'center',
  marginRight:'9%',
  marginLeft: '9%',
  marginTop: '0%',
  marginBottom:'0%',
  fontFamily: 'Montserrat_Medium',
},
});