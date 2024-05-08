import { Amplify } from 'aws-amplify';
import React from 'react';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { UserContextProvider } from './src/context/user/UserContext';
import StackNavigator from './src/navigation/StackNavigator';



function App(): React.JSX.Element {


  // const config = awsConfigEnv();
  const awsProdConfig = {
    identityPoolId: '<Cognito Identity Pool ID>',
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_YmHFgaTqX',
    userPoolWebClientId: '69uog87mbence27s5ilsr52vjr'
  };

  Amplify.configure(awsProdConfig);

  return (
    <UserContextProvider>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </UserContextProvider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 15,
    marginLeft: 15,
  },

});

export default App;
