import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default function Header(props) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="menu" color="#ffffff" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.text}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon name="logout" color="#ffffff" size={24} />
            </TouchableOpacity>
        </View>
    )
}