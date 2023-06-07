import React from 'react'
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constant/theme"
import LinearGradient from 'react-native-linear-gradient';
import images from '../constant/images';
import { color } from 'react-native-reanimated';
import { CustomButton } from '../components';
import { useNavigation } from '@react-navigation/native';

function renderHeader() {
  return (
    <View 
    style={{height:SIZES.height>700?"65%":"60%"}}>
    <ImageBackground
      source={images.background}
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
      resizeMode="cover"
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent,COLORS.black]}
        style={{
          height:200,
          justifyContent: "flex-end",
          paddingHorizontal:SIZES.padding
        }}
      >
        <Text
          style={{
            width: "80%",
            color: COLORS.white,
            ...FONTS.largeTitle,
            lineHeight: 45,

          }}>

          Cook a Delicious Food Easily</Text>
      </LinearGradient>

    </ImageBackground>
    </View>
  )
}

function renderDetails(navigation) {
  return (
    <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
      <Text
        style={{
          marginBottom: SIZES.radius,
          width: "70%",
          color: COLORS.gray,
          ...FONTS.body3
        }}>Discover more than 120 food recipes in your hand and cooking it easily</Text>
      <View style={{flex:1, justifyContent:'center'}}>
        {/* Login */}
        <CustomButton
          buttonText="Get Started"
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20
          }}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => navigation.navigate("Home")}
        />
       
      </View>
    </View>
  )
}



const LandingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.background}>

      <StatusBar barStyle={'light-content'} />

      {renderHeader()}
      {renderDetails(navigation)}



    </View>
  );
}

export default LandingScreen



const styles = StyleSheet.create({
  container: {
    flex: 15,
    height: 600,
  },
  background: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});