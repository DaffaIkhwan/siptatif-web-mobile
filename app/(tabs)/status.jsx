import React from 'react';
import { ScrollView } from "react-native";
import CustomBar from "../../components/CustomBar";
import StatusCard from "../../components/StatusCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Status = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />

      <ScrollView>
        <StatusCard date="04-04-2024" status="Ditolak" statusColor="bg-red-500" title="Analisis dan Implementasi SIPTATIF" bgColor="bg-red-100" />
        <StatusCard date="05-04-2024" status="Ditolak" statusColor="bg-red-500" title="Analisis dan Implementasi SIPTATIF" bgColor="bg-red-100" />
        <StatusCard date="15-04-2024" status="Diterima" statusColor="bg-green-500" title="Rancangan Sistem Informasi Akademik" bgColor="bg-green-100" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Status;
