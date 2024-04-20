import React from "react";
import { View, Text } from "react-native";

const HistoryCard = ({ date, status, title, bgColor, statusTextColor }) => {
  return (
    <View className={`p-4 m-4 rounded-lg shadow-md ${bgColor}`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-xs font-psemibold">Tanggal  :</Text>
          <Text className="ml-2 text-xs font-plight">{date}</Text>
        </View>
        <View className={`flex-row items-center px-2 py-1 rounded-lg ${statusTextColor}`}>
          <Text className="text-xs text-white font-pmedium">{status}</Text>
        </View>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="text-xs font-psemibold">Judul TA :</Text>
        <Text className="ml-2 text-xs font-plight" numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;
