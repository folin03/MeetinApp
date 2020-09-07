import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../styles/styles';
import { TextInput } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)

const LoginScreen = () => {

  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')



  return (
    <DismissKeyboard>
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader} >
          <Text style={styles.title}>
            Login Screen
          </Text>
        </View>
        <View style={styles.loginFooter} >
          <Text>Login email</Text>
          <TextInput
            style={styles.loginInputBox}
            selectTextOnFocus={true}
            autoCapitalize={"none"}
            keyboardType={'default'}
            selectionColor={'#23FDD3'}
            onChangeText ={text => setInputName(text)}
            value={inputName}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.loginInputBox}
            selectTextOnFocus={true}
            autoCapitalize={"none"}
            keyboardType={'default'}
            selectionColor={'#23FDD3'}
            onChangeText ={text => setInputPassword(text)}
            value={inputPassword}
            secureTextEntry={true}
          />
          <View style={styles.loginButton}>
          <Button 
            title={'Register'}
            onPress={() => {}}   
          />
          <Button 
            title={'Login'}
            onPress={() => {}}   
          />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
}

export default LoginScreen;