import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";

const CustomSection = ({icon, title, detail, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} className="px-4 py-8 mx-4 my-4 border rounded-lg border-slate-300">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image source={icon} className="w-6 h-6 mr-2" />
          <Text className="text-base font-psemibold">{title}</Text>
        </View>
        <Text className="px-3 py-2 text-indigo-600 rounded-lg bg-indigo-50 font-pbold">{detail}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomSection;
