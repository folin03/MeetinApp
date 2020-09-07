import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../styles/styles';
import { TextInput } from 'react-native-paper';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)

const RegisterScreen = () => {

  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputPassword2, setInputPassword2] = useState('')




  return (
    <DismissKeyboard>
      <View style={styles.loginContainer}>
        <View style={styles.RegisterHeader} >
          <Text style={styles.title}>
            Register Screen
          </Text>
        </View>
        <View style={styles.RegisterFooter} >
          <Text>Name</Text>
          <TextInput
            style={styles.loginInputBox}
            selectTextOnFocus={true}
            autoCapitalize={"none"}
            keyboardType={'default'}
            selectionColor={'#23FDD3'}
            onChangeText ={text => setInputName(text)}
            value={inputName}
          />
          <Text>Email</Text>
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
          <Text>Re-enter Password</Text>
          <TextInput
            style={styles.loginInputBox}
            selectTextOnFocus={true}
            autoCapitalize={"none"}
            keyboardType={'default'}
            selectionColor={'#23FDD3'}
            onChangeText ={text => setInputPassword2(text)}
            value={inputPassword2}
            secureTextEntry={true}
          />
          <View style={styles.loginButton}>
          <Button 
            title={'Cancel'}
            onPress={() => {}}   
          />
          <Button 
            title={'Register'}
            onPress={() => {}}   
          />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
}

export default RegisterScreen;