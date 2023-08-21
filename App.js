import react from 'react';
import { NavigationContainer } from "@react-Navigation/native";
import { createStackNavigation, createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
