import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs 
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: 'none',
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          href: null,
          headerShown: false
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
