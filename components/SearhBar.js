import React from 'react'
import { SafeAreaView, Image, Text, View, Linking } from 'react-native';
import { FONTS, COLORS, SIZES, icons, Images, images } from '../constant';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const SearhBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray
      }}>
      <Image
        source={icons.search}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray
        }} />
      <TextInput
        style={{
          marginLeft: SIZES.radius,
          ...FONTS.body3
        }}
        placeholderTextColor={COLORS.gray}
        placeholder='Search Recipes' />


    </View>
  )
}

export default SearhBar
