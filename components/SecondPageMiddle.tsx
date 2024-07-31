import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import tailwind from 'twrnc'

interface SecondPageMiddleProps {
  openSheet1: () => void;
}

const SecondPageMiddle: React.FC<SecondPageMiddleProps> = ({ openSheet1 }) => {

  return (
    <View style={tailwind.style('items-center px-3',{ flex: .8})}>
        <Text style={tailwind.style('text-white font-bold text-xl')}>Tap to Send</Text>
        <Text style={tailwind.style('text-gray-300 font-semibold text-xl mb-3')}>Long tap to Receive</Text>
        <TouchableOpacity onPress={openSheet1} style={tailwind.style("w-full", { flex: .7})}>
            <Image
                source={require('@/assets/images/photo-2.png')}
                style={tailwind.style('w-full',{ flex: 1, objectFit: 'contain' })}
            />
        </TouchableOpacity>
    </View>
  )
}

export default SecondPageMiddle;