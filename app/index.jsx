import React from 'react';
import { router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex items-center justify-center w-full h-full px-4">
          <Text className="text-4xl text-indigo-600 font-pbold">SIPTATIF</Text>

          <View className="relative mt-5">
            <Text className="text-3xl text-slate-900 font-psemibold">Let&apos;s Organize Easily</Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-4 -right-8" resizeMode="contain" />
          </View>

          <Text className="text-sm text-center text-slate-500 font-pregular mt-7">Sistem Informasi Pendaftaran Tugas Akhir Teknik Informatika UIN Sultan Syarif Kasim Riau</Text>
          <CustomButton title="Continue with Email" handlePress={() => router.push("/sign-in")} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
