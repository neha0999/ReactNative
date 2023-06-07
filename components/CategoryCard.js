import React from 'react'
import { SafeAreaView, Text, View,Image } from 'react-native';
import { FONTS, COLORS, SIZES} from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CategoryCard = ({containerStyle,categoryItem, onPress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginTop:10,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.gray2,
        ...containerStyle
    }}
    onPress={onPress}>
        {/* image */}
        <Image
        source={categoryItem.image}
        resizeMode='cover'
        style={{
            width:100,
            height:100,
            borderRadius:SIZES.radius
        }}/>
        {/* Details */}
        <View 
        style={{
            width:'65%',
            paddingHorizontal:20
        }}>
            <Text style={{flex: 1,
            ...FONTS.h2,
            color:COLORS.black,fontWeight:'bold'
            
            }}>
                {categoryItem.name}

            </Text>
            <Text style={{
                    color:COLORS.gray,
                    ...FONTS.body4
                }}>
                {categoryItem.duration}|{categoryItem.serving} Serving
       
            </Text>
        </View>

    </TouchableOpacity>
  )
}

export default CategoryCard
