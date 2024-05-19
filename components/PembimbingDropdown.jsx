import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  placeholderStyle: {
    color: "gray",
    marginTop: 12,
  },
});

const PembimbingDropdown = ({
  pembimbings,
  selectedValue,
  onValueChange,
  placeholder,
}) => {
  return (
    <View className="mb-4 border rounded-md">
      
        <Text style={styles.placeholderStyle}>   {placeholder}</Text>
      
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ height: 50 }}
      >
        
        {pembimbings.map((pembimbing) => (
          <Picker.Item
            key={pembimbing.nip}
            label={pembimbing.nama}
            value={pembimbing.nip}
          />
        ))}
      </Picker>
    </View>
  );
};

export default PembimbingDropdown;
