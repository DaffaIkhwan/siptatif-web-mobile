import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import CustomBar from "../../components/CustomBar";
import StatusCard from "../../components/StatusCard";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const Status = () => {
  const [status, setStatus] = useState([]);

  const fetchStatus = async () => {
    try {
      const response = await axios.get(
        "http://192.168.188.20:3000/api/ta/nim/2020123456"
      );
      setStatus(response.data.data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />

      <ScrollView>
        <View className="h-5"/>
        {status.map((item) => (
          <StatusCard
            key={item.id}
            date="04-04-2024" // Ganti dengan properti tanggal yang sesuai dari data API
            status={item.status}
            statusColor={
              item.status === "Disetujui"
                ? "green"
                : item.status === "Ditolak"
                ? "red"
                : "orange"
            } // Ubah warna berdasarkan status
            title={item.judul_ta}
            bgColor={
              item.status === "Disetujui"
                ? "#D1FAE5"
                : item.status === "Ditolak"
                ? "#FEE2E2"
                : "#FEF9C3"
            } // Ubah warna latar belakang berdasarkan status
            data={item} // Passing seluruh data item ke StatusCard
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Status;
