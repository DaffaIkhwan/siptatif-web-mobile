import React from 'react';
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { Image, Text, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(79 70 229)",
        tabBarInactiveTintColor: "#DDDDDD",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "rgb(209 213 219)",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="beranda"
        options={{
          title: "Beranda",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} color={color} name="Beranda" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="pendaftaran"
        options={{
          title: "Pendaftaran",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.plus} color={color} name="Pendaftaran" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="pembimbing"
        options={{
          title: "Pembimbing",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.profile} color={color} name="Pembimbing" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Status",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.bookmark} color={color} name="Status" focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
