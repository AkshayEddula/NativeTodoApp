import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Href,router } from 'expo-router'
import CustomButton from '@/components/CustomButton'


const index = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-gray-300'>
        <StatusBar barStyle="dark-content" />
        <CustomButton title='Check out the todo App' handlePress={() => router.push('/todo' as Href<String | object>)} />
    </SafeAreaView>
  )
}

export default index
