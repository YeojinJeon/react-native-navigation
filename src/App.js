
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigation from './navigations/Stack';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default App;