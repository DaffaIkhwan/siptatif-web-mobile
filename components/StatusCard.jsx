import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";

const StatusCard = ({ date, status, title, statusColor, bgColor }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View className={`p-4 mx-4 my-4 rounded-lg shadow-md ${bgColor}`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className={`text-xs text-white font-pmedium px-2 py-1 rounded-lg ${statusColor}`}>{status}</Text>
        </View>
        <TouchableOpacity onPress={handleViewPress}>
          <View className="flex-row items-center px-2 py-1 rounded-lg bg-slate-800">
            <Text className="text-xs text-white font-pmedium">View</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="text-xs font-psemibold">Tanggal  :</Text>
        <Text className="ml-2 text-xs font-plight"> {date} </Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Text className="text-xs font-psemibold">Judul TA :</Text>
        <Text className="ml-2 text-xs font-plight" numberOfLines={2} ellipsizeMode="tail">
          {" "}
          {title}{" "}
        </Text>
      </View>

      <Modal visible={showModal} animationType="slide" onRequestClose={handleCloseModal}>
        <View className="flex-1 p-6 bg-white">
          {status === "Diterima" ? (
            <View>
              <View className="items-center justify-center py-4 bg-green-100 rounded-lg">
                <Text className="text-lg text-green-600 font-pbold">Pendaftaran Anda Diterima</Text>
              </View>
              <View className="flex items-center justify-center mt-6 mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Nama</Text>
                <Text className="p-1 mt-1 text-base font-plight">Muh. Zaki Erbai Syas</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">NIM</Text>
                <Text className="p-1 mt-1 text-base font-plight">12250111134</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Judul Tugas Akhir</Text>
                <Text className="p-1 mt-1 text-base font-plight">Analisis dan Implementasi SIPTATIF</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Pembimbing 1</Text>
                <Text className="p-1 mt-1 text-base font-plight">Dr. Fulan, M. Kom.</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Pembimbing 2</Text>
                <Text className="p-1 mt-1 text-base font-plight">Dr. Fulanah, M. Kom.</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Penguji 1</Text>
                <Text className="p-1 mt-1 text-base font-plight">Prof. Fulan Fergi, M. T.</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Penguji 2</Text>
                <Text className="p-1 mt-1 text-base font-plight">Prof. Fergi Fulan, M. T.</Text>
              </View>
            </View>
          ) : (
            <View>
              <View className="items-center justify-center py-4 bg-red-100 rounded-lg">
                <Text className="text-lg text-red-600 font-pbold">Pendaftaran Anda Ditolak</Text>
              </View>
              <View className="flex items-center justify-center mt-6 mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Nama</Text>
                <Text className="p-1 mt-1 text-base font-plight">Muh. Zaki Erbai Syas</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">NIM</Text>
                <Text className="p-1 mt-1 text-base font-plight">12250111134</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-slate-100">
                <Text className="w-full p-1 text-base text-center font-pmedium bg-slate-100">Judul Tugas Akhir</Text>
                <Text className="p-1 mt-1 text-base font-plight">Analisis dan Implementasi SIPTATIF</Text>
              </View>
              <View className="flex items-center justify-center mb-4 border border-red-100">
                <Text className="w-full p-1 text-base text-center text-red-600 bg-red-100 font-pmedium">Catatan</Text>
                <Text className="p-1 mt-1 text-base text-center font-plight">Setoran hafalan dan tanda tangan WD3 tidak ada! </Text>
              </View>

              <Text className="mt-6 mb-4 text-base text-center font-plight">Maaf, pendaftaran Anda tidak dapat diterima. Silakan mengajukan pendaftaran kembali.</Text>
            </View>
          )}
          <TouchableOpacity onPress={handleCloseModal} className="items-center px-3 py-3 rounded-lg bg-slate-800">
            <Text className="text-white font-psemibold">Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default StatusCard;
