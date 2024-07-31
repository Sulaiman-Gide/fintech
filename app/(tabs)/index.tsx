import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function onboarding() {
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" // Here is where you change the font-color
      />
      <SafeAreaView style={tailwind.style({ flex: 1, backgroundColor: '#0B0B0B'})}>
        <View style={tailwind.style('items-center justify-end', { flex: .6})}>
          <Image
            source={require('@/assets/images/photo-1.png')}
            style={tailwind.style('w-3/4 h-3/4', { objectFit: 'contain' })}
          />
        </View>
        <View style={tailwind.style('w-full mt-12 px-7', {flex: .4})}>
            <TouchableOpacity 
              onPress={() => router.push('/home')}
              style={tailwind.style('mx-auto w-4/5', { backgroundColor: '#FB5521', borderRadius: 13, })}>
              <Text style={tailwind.style('py-3.5 text-center text-4xl', { color: 'white', letterSpacing: 0.8 })}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={tailwind.style('my-5 text-center text-4xl', { color: 'white', letterSpacing: 0.8 })}>Receive</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={tailwind.style('text-center text-4xl', { color: 'white', letterSpacing: 0.8 })}>Connect</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tailwind.style('mx-auto mt-8 py-1 px-4 items-center flex-row', { backgroundColor: 'white', borderRadius: 13, })}>
              <Text style={tailwind.style('text-center text-gray-700 text-lg', { letterSpacing: 0.8 })}>Go to dashboard</Text>
              <Image
                source={require('@/assets/images/arrow-right.png')}
                style={tailwind.style('w-7 h-7',{ objectFit: 'contain' })}
              />
            </TouchableOpacity>
          </View>
      </SafeAreaView >
    </>
  )
}