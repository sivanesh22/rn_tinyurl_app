import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            headerMode="none"
        >
            {/* <Stack.Screen
                name="Login"
                component={Login}
            /> */}
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </Stack.Navigator>
    );
}
export default MyStack;