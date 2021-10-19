import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home'
import Book from '../screens/Book'
import User from '../screens/User'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();

function Drawers({route}) {
    const { name } = route.params
    return (
        <Drawer.Navigator drawerContent={CustomDrawer}>
            <Drawer.Screen name="Home"
                initialParams={{ user: name }}
                component={Home}
                options={{
                    headerShown: false,
                    drawerIcon: ({focused, size}) => (
                        <Icon name="home"
                            size={size}
                            color={focused ? '#6E5494' : '#E0BCDD'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Book"
                component={Book}
                options={{
                    headerShown: false,
                    drawerIcon: ({focused, size}) => (
                        <Icon name="book"
                            size={size}
                            color={focused ? '#6E5494' : '#E0BCDD'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="User"
                component={User}
                options={{
                    headerShown: false,
                    drawerIcon: ({focused, size}) => (
                        <Icon name="account"
                            size={size}
                            color={focused ? '#6E5494' : '#E0BCDD'}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default Drawers