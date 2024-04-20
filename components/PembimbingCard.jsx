import React from "react";
import { Text, View } from "react-native";

const PembimbingCard = ({ nama, status, nidn, keahlian, statusColor, kuota, kuotaColor }) => {
  return (
    <View className="p-4 mx-4 my-4 rounded-lg shadow-md bg-indigo-50">
      <View className="flex-row items-center">
        <Text className="text-xs font-pbold">Nama</Text>
        <Text className="ml-6 text-xs font-pregular">:  {nama}</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="text-xs font-pbold">NIDN</Text>
        <Text className="ml-8 text-xs font-pregular">:  {nidn}</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="text-xs font-pbold">Keahlian</Text>
        <Text className="ml-2 text-xs font-pregular">:  {keahlian}</Text>
      </View>
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row items-center">
          <Text className={`text-xs text-white font-pmedium px-3 py-2 rounded-lg ${statusColor}`}>{status}</Text>
        </View>
        <View className={`flex-row items-center px-3 py-2 rounded-lg ${kuotaColor}`}>
          <Text className="text-xs text-white font-pmedium">Kuota: {kuota}</Text>
        </View>
      </View>
    </View>
  );
};

export default PembimbingCard;
