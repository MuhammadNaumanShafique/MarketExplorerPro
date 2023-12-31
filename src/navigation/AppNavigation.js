import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AddProductScreen from '../screens/product/AddProductScreen';
import ProductDetails from '../screens/product/ProductDetails';
import HomeTabs from './HomeTabs';

export default function AppContainer() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Tabs" component={HomeTabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
