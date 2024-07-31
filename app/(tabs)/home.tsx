import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Button, ImageBackground } from 'react-native';
import tailwind from 'twrnc';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import SecondPageTop from '@/components/SecondPageTop';
import SecondPageMiddle from '@/components/SecondPageMiddle';

export default function Home() {
  StatusBar.setBarStyle('dark-content', false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['23%', '95%'], []);

  const handleOpenSheet1 = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <SafeAreaView style={tailwind`flex-1 bg-[#0B0B0B]`}>
      <SecondPageTop />
      <SecondPageMiddle openSheet1={handleOpenSheet1}/>
      <BottomSheet
          ref={bottomSheetRef}
          backgroundStyle={{ backgroundColor: '#101A1E'}}
          handleIndicatorStyle={{ width: '18%', backgroundColor: 'white',}}
          snapPoints={snapPoints}
          style={tailwind.style('bg-[#0B0B0B]')}
        >
        <View style={tailwind.style('pt-4 px-3')}>
          <View style={tailwind.style('justify-between flex-row')}>
            <View>
                <Text style={tailwind.style('text-gray-300 text-sm',{})}>
                    Good afternoon
                </Text>
                <Text style={tailwind.style('text-white font-extrabold text-xl',{})}>
                    Joshua Ajiboye
                </Text>
            </View>
            <View style={tailwind.style('flex-row items-center')}>
                <Image
                    source={require('@/assets/images/photo-5.png')}
                    style={tailwind.style('w-8 h-8 mr-2.5',{ objectFit: 'contain' })}
                />
                <Image
                    source={require('@/assets/images/photo-6.png')}
                    style={tailwind.style('rounded-full w-12 h-12',{ objectFit: 'contain' })}
                />
            </View>
          </View>
          <View style={tailwind.style('mt-3')}>
            <Image
              source={require('@/assets/images/photo-7.png')}
              style={tailwind.style('w-full h-20')}
              resizeMode="contain"
            />
          </View>
          <View>
            <Image
              source={require('@/assets/images/photo-8.png')}
              style={tailwind.style('w-full h-20')}
              resizeMode="contain"
            />
          </View>

          <View>
           <View style={tailwind.style('py-3.5 px-5 flex-row justify-between items-center bg-[#1E1E1E] rounded-t-2xl')}>
            <Text style={tailwind.style('text-gray-400 text-base uppercase')}>Recent Tansactions</Text>
              <Image
                source={require('@/assets/images/arrow-left.png')}
                style={tailwind.style('w-5 h-5',{ objectFit: 'contain' })}
              />
           </View>
           <View style={tailwind.style('py-5 px-4 bg-[#181818] rounded-b-2xl')}>
            {/*First*/}
            <View style={tailwind.style('justify-between flex-row')}>
              <View style={tailwind.style('flex-row')}>
                <View  style={tailwind.style('relative')}>
                  <View style={tailwind.style('bg-[#808FAC] rounded-full p-3')}>
                    <Text style={tailwind.style('text-xl text-white')}>SK</Text>
                  </View>
                  <View style={tailwind.style('absolute bottom-.5 right-0 bg-[#FB5521] p-1 rounded-full')}>
                    <Image
                      source={require('@/assets/images/photo-12.png')}
                      style={{ width: 12, height: 12, tintColor: 'white' }}
                    />
                  </View>
                </View>
                <View style={tailwind.style('pl-2')}>
                  <Text style={tailwind.style('text-base text-white')}>Sanda King-David Ayodele</Text>
                  <Text style={tailwind.style('text-gray-400')}>Transfer</Text>
                </View>
              </View>
              <Text style={tailwind.style('text-base text-white')}>₦ 2,999.00</Text>
            </View>

             {/*Second*/}
             <View style={tailwind.style('mt-5 justify-between flex-row')}>
              <View style={tailwind.style('flex-row')}>
                <View  style={tailwind.style('relative')}>
                    <Image
                      source={require('@/assets/images/photo-13.png')}
                      style={tailwind.style('rounded-full w-13 h-13',{ objectFit: 'contain' })}
                    />
                  <View style={tailwind.style('absolute bottom-.5 right-0 bg-[#FB5521] p-1 rounded-full')}>
                    <Image
                      source={require('@/assets/images/photo-12.png')}
                      style={{ width: 12, height: 12, tintColor: 'white' }}
                    />
                  </View>
                </View>
                <View style={tailwind.style('pl-2')}>
                  <Text style={tailwind.style('text-base text-white')}>Bayo Adekunle</Text>
                  <Text style={tailwind.style('text-gray-400')}>Transfer</Text>
                </View>
              </View>
              <Text style={tailwind.style('text-base text-white')}>₦ 230,800.00</Text>
            </View>

            {/*Third*/}
            <View style={tailwind.style('mt-5 justify-between flex-row')}>
              <View style={tailwind.style('flex-row')}>
                <View  style={tailwind.style('relative')}>
                    <Image
                      source={require('@/assets/images/photo-13.png')}
                      style={tailwind.style('rounded-full w-13 h-13',{ objectFit: 'contain' })}
                    />
                  <View style={tailwind.style('absolute bottom-.5 right-0 bg-[#21FBAD] p-1 rounded-full')}>
                    <Image
                      source={require('@/assets/images/photo-12.png')}
                      style={{ width: 12, height: 12, tintColor: 'white' }}
                    />
                  </View>
                </View>
                <View style={tailwind.style('pl-2')}>
                  <Text style={tailwind.style('text-base text-white')}>Simi Adegunle</Text>
                  <Text style={tailwind.style('text-gray-400')}>Transfer</Text>
                </View>
              </View>
              <Text style={tailwind.style('text-base text-white')}>₦ 230,000.00</Text>
            </View>
           </View>
          </View>

          <View style={tailwind.style('mt-3')}>
           <View style={tailwind.style('py-3.5 px-5 flex-row justify-between items-center bg-[#1E1E1E] rounded-t-2xl')}>
            <Text style={tailwind.style('text-gray-400 text-base uppercase')}>Beneficiaries</Text>
              <Image
                source={require('@/assets/images/arrow-left.png')}
                style={tailwind.style('w-5 h-5',{ objectFit: 'contain' })}
              />
           </View>
           <View style={tailwind.style('py-5 px-4 flex-row items-start bg-[#181818] rounded-b-2xl')}>
              <View style={tailwind.style('items-center mr-5')}>
                <Image
                  source={require('@/assets/images/photo-6.png')}
                  style={tailwind.style('rounded-full w-14 h-14',{ objectFit: 'contain' })}
                />
                <Text style={tailwind.style('text-base text-white mt-2')}>Josh</Text>
              </View>
              <View style={tailwind.style('items-center mr-5')}>
                <Image
                  source={require('@/assets/images/photo-4.png')}
                  style={tailwind.style('rounded-full w-14 h-14',{ objectFit: 'contain' })}
                />
                <Text style={tailwind.style('text-base text-white mt-2')}>Ife</Text>
              </View>
              <View style={tailwind.style('items-center mr-5')}>
                <Image
                  source={require('@/assets/images/photo-9.png')}
                  style={tailwind.style('rounded-full w-14 h-14',{ objectFit: 'contain' })}
                />
                <Text style={tailwind.style('text-base text-white mt-2')}>King-David</Text>
              </View>
              <TouchableOpacity style={tailwind.style('items-center bg-[#242C30] rounded-full p-1.5')}>
                <Image
                  source={require('@/assets/images/add.png')}
                  style={tailwind.style('rounded-full w-10 h-10',{ objectFit: 'contain' })}
                />
              </TouchableOpacity>
           </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
