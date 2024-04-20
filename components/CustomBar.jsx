import { router } from "expo-router";
import { images } from "../constants";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, StyleSheet } from "react-native";

const CustomBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleLogout = () => {
    router.push("/sign-in");
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-300">
      <Text className="text-2xl text-indigo-600 font-pbold">SIPTATIF</Text>

      <TouchableOpacity onPress={toggleModal}>
        <Image source={images.profile} className="w-10 h-10 rounded-full" />
      </TouchableOpacity>

      <Modal visible={visible} transparent onRequestClose={toggleModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleLogout}>
              <Text className="text-center text-red-500" style={styles.modalOption}>
                Log out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel}>
              <Text className="text-center" style={styles.modalOption}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default CustomBar;
