import { View, Text, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

export default function SecondPageTop() {
  return (
    <View style={tailwind.style('items-end pt-4 pr-5',{ flex: .18})}>
        <Image
          source={require('@/assets/images/photo-3.png')}
          style={tailwind.style('h-14 w-14',{ objectFit: 'contain' })}
        />
    </View>
  )
}