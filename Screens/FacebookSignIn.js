import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {View, Text, Alert, StyleSheet, ScrollView} from 'react-native';

// const FBSDK = require('react-native-fbsdke');
// const {
//   LoginButton,
//   AccessToken
// } = FBSDK;

const FacebookSignIn = () => {
  return (
    <ScrollView>
    <View >
      <LoginButton
      // style={{
      //   maxHeight: 30}}
        style={styles.facebookbutton}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
    </ScrollView>
  );
};

export default FacebookSignIn;

const styles = StyleSheet.create({
  facebookbutton: {
    height:55,
    width: '100%',
    flex:1,
    maxHeight: 50,
    // flexDirection: "column",
    // justifyContent: "center",
    // borderRadius:5
    
   



  },
});
