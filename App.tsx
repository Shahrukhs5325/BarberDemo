import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { Amplify } from 'aws-amplify';



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

    <PaperProvider>
      <StackNavigator />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginRight: 15,
    marginLeft: 15,
  },

});

export default App;
