import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";

const StatusCard = ({ date, status, title, statusColor, bgColor, data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={{ padding: 16, marginHorizontal: 16, marginBottom: 24, borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: bgColor }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, color: "white", fontWeight: "500", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, backgroundColor: statusColor }}>{status}</Text>
        </View>
        <TouchableOpacity onPress={handleViewPress}>
          <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, backgroundColor: "black" }}>
            <Text style={{ fontSize: 12, color: "white", fontWeight: "500" }}>View</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "600", width: 84 }}>Tanggal</Text>
        <Text>:</Text>
        <Text style={{ fontSize: 12, fontWeight: "300", marginLeft: 8 }}>{date}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "600", width: 84 }}>Judul TA</Text>
        <Text>:</Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontSize: 12, fontWeight: "300", marginLeft: 8, flex: 1 }}>{title}
        </Text>
      </View>

      <Modal visible={showModal} animationType="slide" onRequestClose={handleCloseModal}>
        <View className="flex-1 p-6 bg-white">
          {status === "Disetujui" ? (
            <View>
              <View className="items-center justify-center py-4 bg-green-100 rounded-lg">
                <Text className="text-lg text-green-600 font-pbold">Pendaftaran Anda Diterima</Text>
              </View>
              <View className="flex items-center justify-center mt-6 mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Nama</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nama}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">NIM</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nim}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Judul Tugas Akhir</Text>
                <Text  className="p-1 mt-1 text-base text-center font-plight">{data.judul_ta}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Pembimbing 1</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.pembimbing_1}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Pembimbing 2</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.pembimbing_2}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Penguji 1</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.penguji_1}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Penguji 2</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.penguji_2}</Text>
              </View>
            </View>
          ) : status === "Ditolak" ? (
            <View>
              <View className="items-center justify-center py-4 bg-red-100 rounded-lg">
                <Text className="text-lg text-red-600 font-pbold">Pendaftaran Anda Ditolak</Text>
              </View>
              <View className="flex items-center justify-center mt-6 mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Nama</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nama}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">NIM</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nim}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Judul Tugas Akhir</Text>
                <Text  className="p-1 mt-1 text-base text-center font-plight">{data.judul_ta}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-red-100">
                <Text className="w-full p-1 text-base text-center text-red-600 bg-red-100 font-pmedium">Catatan</Text>
                <Text className="p-1 mt-1 text-base text-center font-plight">Setoran hafalan dan tanda tangan WD3 tidak ada! </Text>
              </View>

              <Text className="mt-6 mb-4 text-base text-center font-plight">Maaf, pendaftaran Anda tidak dapat diterima. Silakan mengajukan pendaftaran kembali.</Text>
            </View>
          ) : (
            <View>
              <View className="items-center justify-center py-4 bg-yellow-100 rounded-lg">
                <Text className="text-lg text-yellow-600 font-pbold">Pendaftaran Anda Diproses</Text>
              </View>
              <View className="flex items-center justify-center mt-6 mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Nama</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nama}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">NIM</Text>
                <Text className="p-1 mt-1 text-base font-plight">{data.nim}</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Judul Tugas Akhir</Text>
                <Text  className="p-1 mt-1 text-base text-center font-plight">{data.judul_ta}</Text>
              </View>

              <Text className="mt-6 mb-4 text-base text-center font-plight">Pendaftaran Anda sedang diproses. Mohon menunggu informasi lebih lanjut.</Text>
            </View>
          )
        
        }
          <TouchableOpacity onPress={handleCloseModal} className="items-center px-3 py-3 rounded-lg bg-slate-800">
            <Text className="text-white font-psemibold">Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default StatusCard;
