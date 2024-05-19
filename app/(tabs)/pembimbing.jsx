import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native";
import CustomBar from "../../components/CustomBar";
import PembimbingCard from "../../components/PembimbingCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Pembimbing = () => {
  const [pembimbing, setPembimbing] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPembimbing = async () => {
    try {
      const response = await axios.get("http://192.168.188.20:3000/api/dosen");
      setPembimbing(response.data.data);
    } catch (error) {
      console.error("Error fetching pembimbing:", error);
    }
  };

  useEffect(() => {
    fetchPembimbing();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />
      <TextInput
        placeholder="👀 Cari pembimbing..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="px-4 py-2 m-4 bg-white border rounded-md border-slate-800"
      />
      <FlatList
        data={pembimbing.filter((pembimbing) =>
          pembimbing.nama.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={({ item }) => (
          <PembimbingCard
            nama={item.nama}
            nip={item.nip}
            keahlian={item.keahlian}
            status={`Tersedia untuk ${item.kuota} orang mahasiswa`}
            statusColor="bg-green-500"
            kuota={`${item.kuota}`}
            kuotaColor="bg-slate-800"
          />
        )}
        keyExtractor={(item) => item.nip}
      />
    </SafeAreaView>
  );
};

export default Pembimbing;
