import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import Home from './Layout/Home';
import Notification from './component/header/Notification';
import Wishlist from './component/header/Wishlist'; 
import Cart from './component/header/Cart';
import UserAccount from './component/footer/UserAccount';
import TermsAndConditions from './component/footer/TermsAndConditions'; // Import the TermsAndConditions screen
import Login from './component/Account/Login'; // Import the Login screen
import Register from './component/Account/Register';
import CustomerCarePage from './component/footer/CustomerCarePage';
import MyOrderPage from './component/footer/MyOrderPage';
import Explore from './component/footer/Explore';
import SpecialDeals from './component/screens/SpecialDeals';
import Menu from './component/footer/Menu';
import AutomobileScreen from './component/screens/slider/AutomobileScreen';
import WomenFashionScreen from './component/screens/slider/WomenFashionScreen';
import MenFashionScreen from './component/screens/slider/MenFashionScreen';
import KidsFashionScreen from './component/screens/slider/KidsFashionScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // hide the header for the Home screen
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: 'Notification' }} // set title for the Notification screen
        />
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{ title: 'Wishlist' }} // set title for the Wishlist screen
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: 'Cart' }} 
        />
        <Stack.Screen
          name="UserAccount"
          component={UserAccount}
          options={{ title: 'User Account' }} 
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }} // set title for the Login screen
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="CustomerCarePage"
          component={CustomerCarePage}
          options={{title: 'Customer Care'}}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{ title: 'Terms and Conditions' }} // set title for the TermsAndConditions screen
        />

        <Stack.Screen
          name="MyOrderPage"
          component={MyOrderPage}
          options={{title: 'MyOrder'}}
        />

        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{title: 'Explore'}}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{title: 'Menu'}}
        />

        <Stack.Screen
          name="SpecialDeals"
          component={SpecialDeals}
          options={{title: 'Special Deals'}}
        />

        <Stack.Screen
          name="AutomobileScreen"
          component={AutomobileScreen}
          options={{title: 'Automobile'}}
        />

        <Stack.Screen
          name="WomenFashionScreen"
          component={WomenFashionScreen}
          options={{title: 'Women Fashion'}}
        />
        
        <Stack.Screen
          name="MenFashionScreen"
          component={MenFashionScreen}
          options={{title: 'Men Fashion'}}
        />

        <Stack.Screen
          name="KidsFashionScreen"
          component={KidsFashionScreen}
          options={{title: 'Kids Fashion'}}
        />        

         <Stack.Screen
          name="MenFashionScreen"
          component={MenFashionScreen}
          options={{title: 'Men Fashion'}}
        />

        <Stack.Screen
          name="MenFashionScreen"
          component={MenFashionScreen}
          options={{title: 'Men Fashion'}}
        /> 

        <Stack.Screen
          name="MenFashionScreen"
          component={MenFashionScreen}
          options={{title: 'Men Fashion'}}
        />      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
