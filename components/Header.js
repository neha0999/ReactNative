import React from 'react'
import { SafeAreaView, Image, Text, View,Linking } from 'react-native';
import { FONTS, COLORS, SIZES, Images, images} from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = () => {
  return (
    <View style={{
        flexDirection:'row',
        marginHorizontal:SIZES.padding,
        height:80
      }}>
        <View style={{flex:1}}>
          <Text
          style={{color:COLORS.darkGreen,
          ...FONTS.h2,
          fontWeight:'bold'}}>Hello user</Text>
          <Text style={{
            marginTop:3,
            color:COLORS.gray,
            ...FONTS.body3
          }}>
            What you want to cook today?
          </Text>
  
        </View>
        <TouchableOpacity 
        onPress={()=>console.log("profile")}>
            <Image
            source={images.user}
            style={{
                width:40,
                height:40,
                borderRadius:20
            }}/>

        </TouchableOpacity>
  
      </View>
    
  )
}

export default Header
