import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  loginInputBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 3,
  },
  loginHeader: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingBottom: 50,
    backgroundColor: '#17CFAC',
    borderBottomLeftRadius: 100,
  },
  loginFooter: {
    flex: 4,
    backgroundColor: '#33C7FF',
    paddingTop: 50,
    paddingHorizontal: 50,
    borderTopRightRadius: 100,
  },
  loginContainer: {
    flex: 1,
  },
  loginButton: {
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  RegisterHeader: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingBottom: 50,
    backgroundColor: '#17CFAC',
    borderBottomLeftRadius: 100,
  },
  RegisterFooter: {
    flex: 8,
    backgroundColor: '#33C7FF',
    paddingTop: 50,
    paddingHorizontal: 50,
    borderTopRightRadius: 100,
  },

});