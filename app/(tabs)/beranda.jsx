import React from 'react';
import { router } from "expo-router";
import { images } from "../../constants";
import { View, Text } from "react-native";
import CustomBar from "../../components/CustomBar";
import CustomSection from "../../components/CustomSection";
import { SafeAreaView } from "react-native-safe-area-context";

const Beranda = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />

      <View className="px-4 py-6">
        <Text className="text-gray-500 font-pregular">Welcome Back,</Text>
        <Text className="text-base font-psemibold">Muh. Zaki Erbai Syas</Text>
      </View>

      <CustomSection icon={images.add} title="Pendaftaran TA" detail="Detail" handlePress={() => router.push("/pendaftaran")} />
      <CustomSection icon={images.user} title="Kuota Pembimbing" detail="Detail" handlePress={() => router.push("/pembimbing")} />
      <CustomSection icon={images.status} title="Status Pendaftaran" detail="Detail" handlePress={() => router.push("/status")} />
    </SafeAreaView>
  );
};

export default Beranda;
