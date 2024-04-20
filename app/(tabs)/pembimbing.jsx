import React from 'react';
import { ScrollView } from "react-native";
import CustomBar from "../../components/CustomBar";
import PembimbingCard from "../../components/PembimbingCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Pembimbing = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />
      <ScrollView>
        <PembimbingCard nama="Dr. Fulan, M. Kom." nidn="1988123234" keahlian="Machine Learning" status="Tersedia untuk 1 orang mahasiswa" statusColor="bg-green-500" kuota="5/6" kuotaColor="bg-slate-800" />
        <PembimbingCard nama="Dr. Fulanah, M. Kom." nidn="1990123234" keahlian="Data Science" status="Bimbingan tidak tersedia" statusColor="bg-red-500" kuota="4/4" kuotaColor="bg-slate-800" />
        <PembimbingCard nama="Dr. Fulan Fergi, M. T." nidn="1968123234" keahlian="Cyber Security" status="Tersedia untuk 4 orang mahasiswa" statusColor="bg-green-500" kuota="3/7" kuotaColor="bg-slate-800" />
        <PembimbingCard nama="Dr. Fergi Fulan, M. T." nidn="1978123234" keahlian="Artificial Intelligence" status="Tersedia untuk 2 orang mahasiswa" statusColor="bg-green-500" kuota="6/8" kuotaColor="bg-slate-800" />
        <PembimbingCard nama="Prof. H. Falun, M. Eng." nidn="1958123234" keahlian="Cloud Computing" status="Tersedia untuk 1 orang mahasiswa" statusColor="bg-green-500" kuota="2/3" kuotaColor="bg-slate-800" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pembimbing;
