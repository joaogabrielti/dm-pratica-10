import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props} >
            <View style={styles.container}>
                <Icon name="clipboard-account" size={28} color="#6E5494"/>
                <Text style={styles.text}>TESTE</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name="close" size={28} color="#6E5494"/>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}