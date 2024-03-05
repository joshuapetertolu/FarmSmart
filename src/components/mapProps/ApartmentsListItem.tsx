import { View, Text,StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import PropertyListed from '../common/modals/propertyListedModal';
import colors from '../../constants/Colors';
import { Image } from 'expo-image';

const ApartmentsListapartment = ({
  apartment,
  handleCloseNavigationApartment,
}: any) => {
  
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

 const closeModal = () => {
   setModalVisible(false);
 };
  return (
    <TouchableOpacity onPress={openModal} style={styles.container}>
      <Image
        source={require("../../assets/images/mapimg.png")}
        style={styles.image}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: RFValue(10),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
            }}
          >
            {apartment.title}
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: RFValue(7),
              paddingHorizontal: RFValue(20),
              borderRadius: RFValue(10),
              backgroundColor: colors.warm,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "outfit-medium",
                color: colors.green,
              }}
            >
              {apartment.type}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              color: colors.green,
            }}
          >
            {apartment.price}{" "}
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
                color: "#414141",
              }}
            >
              {apartment.rent}
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: RFValue(3),
          }}
        >
          <Image
            contentFit="contain"
            source={require("../../assets/images/location.png")}
            style={{
              width: RFValue(18),
              height: RFValue(18),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "urbanist-regular",
              color: colors.onboardingText,
            }}
          >
            {apartment.location}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleCloseNavigationApartment()}
        style={styles.clearIcon}
      >
        <MaterialIcons name="clear" size={24} color="black" />
      </TouchableOpacity>
     
      <PropertyListed modalVisible={modalVisible} closeModal={closeModal} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    right: 20,
    left: 20,
    backgroundColor: "#fff",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(10),
  },
  image: {
    width: "100%",
    height: RFValue(180),
    borderRadius: 16,
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    top: RFValue(-10),
    right: RFValue(-10),
  },
});

export default ApartmentsListapartment