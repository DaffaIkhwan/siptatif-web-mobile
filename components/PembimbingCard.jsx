import React from "react";
import { Text, View } from "react-native";

const PembimbingCard = ({ nama, status, nip, keahlian, statusColor, kuota, kuotaColor }) => {
  return (
    <View className="p-4 mx-4 mb-4 rounded-lg shadow-md bg-indigo-50">
      <View className="flex-row items-center">
        <Text className="w-24 text-sm font-pbold">Nama</Text>
        <Text className="text-sm font-pregular">:  {nama}</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="w-24 text-sm font-pbold">NIP</Text>
        <Text className="text-sm font-pregular">:  {nip}</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="w-24 text-sm font-pbold">Keahlian</Text>
        <Text className="text-sm font-pregular">:  {keahlian}</Text>
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
