import React, { useState } from "react";
import { images } from "../../constants";
import CustomBar from "../../components/CustomBar";
import HistoryCard from "../../components/HistoryCard";
import * as DocumentPicker from 'expo-document-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, Modal, TextInput, Button } from "react-native";

const Pendaftaran = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    jenisPendaftaran: "",
    nama: "",
    email: "",
    nim: "",
    judul: "",
    pembimbing1: "",
    pembimbing2: "",
  });

  const handlePress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Proses data form dan simpan ke server
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setSelectedFile(result);
      }
    } catch (e) {
      console.error('Error selecting file:', e);
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />
      <TouchableOpacity onPress={handlePress} className="w-32 px-4 py-4 mx-4 my-8 bg-indigo-600 rounded-lg">
        <View className="flex-row items-center">
          <Image source={images.add} className="w-6 h-6 mr-2" style={{ tintColor: "white" }} />
          <Text className="text-base text-white font-psemibold">Create</Text>
        </View>
      </TouchableOpacity>
      <View className="mb-4">
        <Text className="ml-4 text-slate-400 font-plight">History</Text>
        <View className="h-[1px] bg-slate-300 mx-4 mt-1"></View>
      </View>
      <HistoryCard date="04-04-2024" status="Ditolak" title="Analisis dan Implementasi SIPTATIF" bgColor="bg-red-100" statusTextColor="bg-red-500" />
      <HistoryCard date="05-04-2024" status="Disetujui" title="Rancangan Sistem Informasi Akademik" bgColor="bg-green-100" statusTextColor="bg-green-500" />
      <HistoryCard date="15-04-2024" status="Waiting" title="Rancangan Sistem Informasi Akademik" bgColor="bg-yellow-100" statusTextColor="bg-yellow-500" />

      {showModal && (
        <Modal visible={showModal} animationType="slide" onRequestClose={handleCloseModal}>
          <View className="flex-1 p-5 mt-1 bg-white">
            <Text className="mb-4 text-lg font-pbold">Formulir Pendaftaran TA</Text>
            <TextInput value={formData.jenisPendaftaran} onChangeText={(text) => handleInputChange("jenisPendaftaran", text)} placeholder="Jenis Pendaftaran" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.nama} onChangeText={(text) => handleInputChange("nama", text)} placeholder="Nama" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.email} onChangeText={(text) => handleInputChange("email", text)} placeholder="Email" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.nim} onChangeText={(text) => handleInputChange("nim", text)} placeholder="NIM" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.judul} onChangeText={(text) => handleInputChange("judul", text)} placeholder="Judul TA" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.pembimbing1} onChangeText={(text) => handleInputChange("pembimbing1", text)} placeholder="Pembimbing 1" className="p-2 mb-4 border rounded-md" />
            <TextInput value={formData.pembimbing2} onChangeText={(text) => handleInputChange("pembimbing2", text)} placeholder="Pembimbing 2" className="p-2 mb-4 border rounded-md" />
            <TouchableOpacity onPress={handleFileSelect} className="items-center justify-center h-24 p-2 mb-4 border rounded-md">
              <Text className="font-psemibold">
                {selectedFile ? selectedFile.name : 'Upload File from Device'}
              </Text>
              <Image source={images.upload} className="w-6 h-6" style={{ tintColor: "black" }} />

            </TouchableOpacity>
            <View className="flex-row items-center justify-end">
              <TouchableOpacity onPress={handleCloseModal} className="px-3 py-3 my-4 bg-gray-200 rounded-lg">
                <Text className="font-psemibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} className="px-3 py-3 ml-2 bg-indigo-600 rounded-lg">
                <Text className="text-white font-psemibold">Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Pendaftaran;
