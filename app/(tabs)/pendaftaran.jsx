import axios from "axios";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import CustomBar from "../../components/CustomBar";
import * as DocumentPicker from "expo-document-picker";
import PembimbingDropdown from "../../components/PembimbingDropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";

const Pendaftaran = () => {
  const [pembimbings, setPembimbings] = useState([]);
  const fetchPembimbings = async () => {
    try {
      const response = await axios.get("http://192.168.188.20:3000/api/dosen");
      setPembimbings(response.data.data);
    } catch (error) {
      console.error("Error fetching pembimbings:", error);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    jenisPendaftaran: "",
    nim: "",
    judul: "",
    kategori: "",
    pembimbing1: "",
    pembimbing2: "",
  });
  useEffect(() => {
    fetchPembimbings();
  }, []);
  const handleCreateModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      const formattedData = {
        nim: formData.nim,
        judul_ta: formData.judul,
        kategori: formData.kategori,
        pembimbing_1: formData.pembimbing1,
        pembimbing_2: formData.pembimbing2,
        penguji_1: "",
        penguji_2: "",
        status: "Menunggu",
      };

      const response = await axios.post(
        "http://192.168.188.20:3000/api/ta",
        formattedData
      );

      // Tangani respons dari API jika diperlukan
      console.log("Data berhasil dikirim:", response.data);

      // Reset state form dan file setelah pendaftaran berhasil
      setFormData({
        jenisPendaftaran: "",
        nim: "",
        judul: "",
        kategori: "",
        pembimbing1: "",
        pembimbing2: "",
      });
      setSelectedFile(null);
      handleCloseModal();
    } catch (error) {
      console.error("Error pendaftaran:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setSelectedFile(result);
      }
    } catch (e) {
      console.error("Error selecting file:", e);
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <CustomBar />

      <View className="absolute bottom-8 right-8">
        <TouchableOpacity
          onPress={handleCreateModal}
          className="items-center justify-center w-16 h-16 bg-indigo-600 rounded-xl"
        >
          <Image
            source={images.add}
            className="w-8 h-8"
            style={{ tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>

      <View className="items-center justify-center flex-1">
        <Text className="px-4 text-lg text-center font-psemibold text-slate-800">
          Silakan ajukan pendaftaran TA dengan mengklik tombol di pojok kanan
          bawah berikut.
        </Text>
      </View>

      {showModal && (
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={handleCloseModal}
        >
          <View className="flex-1 p-5 mt-1 bg-white">
            <Text className="mb-4 text-lg font-pbold">
              Formulir Pendaftaran TA
            </Text>
            <TextInput
              value={formData.jenisPendaftaran}
              onChangeText={(text) =>
                handleInputChange("jenisPendaftaran", text)
              }
              placeholder=" Jenis Pendaftaran"
              className="p-2 mb-4 border rounded-md"
            />
            <TextInput
              value={formData.nim}
              onChangeText={(text) => handleInputChange("nim", text)}
              placeholder=" NIM"
              className="p-2 mb-4 border rounded-md"
            />
            <TextInput
              value={formData.judul}
              onChangeText={(text) => handleInputChange("judul", text)}
              placeholder=" Judul TA"
              className="p-2 mb-4 border rounded-md"
            />
            <TextInput
              value={formData.kategori}
              onChangeText={(text) => handleInputChange("kategori", text)}
              placeholder=" Kategori"
              className="p-2 mb-4 border rounded-md"
            />
            <PembimbingDropdown
              pembimbings={pembimbings}
              selectedValue={formData.pembimbing1}
              onValueChange={(value) => handleInputChange("pembimbing1", value)}
              placeholder="Pembimbing 1"
            />
            <PembimbingDropdown
              pembimbings={pembimbings}
              selectedValue={formData.pembimbing2}
              onValueChange={(value) => handleInputChange("pembimbing2", value)}
              placeholder="Pembimbing 2"
            />

            <TouchableOpacity
              onPress={handleFileSelect}
              className="items-center justify-center h-24 p-2 mb-4 border rounded-md"
            >
              <Text className="font-psemibold">
                {selectedFile ? selectedFile.name : "Upload File from Device"}
              </Text>
              <Image
                source={images.upload}
                className="w-6 h-6"
                style={{ tintColor: "black" }}
              />
            </TouchableOpacity>
            <View className="flex-row items-center justify-end">
              <TouchableOpacity
                onPress={handleCloseModal}
                className="px-3 py-3 my-4 bg-gray-200 rounded-lg"
              >
                <Text className="font-psemibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                className="px-3 py-3 ml-2 bg-indigo-600 rounded-lg"
              >
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
