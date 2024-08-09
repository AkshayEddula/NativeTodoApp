import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'

type CustomButtonProps = {
    title : string;
    handlePress : () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, handlePress}) => {
  return (
    <View>
        <TouchableOpacity className='border-2 px-6 py-4 rounded' onPress={handlePress} activeOpacity={0.7}>
            <Text className='text-lg font-medium text-center'>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton
