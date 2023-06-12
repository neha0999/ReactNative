import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONTS, COLORS, SIZES, images } from '../constant';

const SearchedRecipes = ({ route }) => {
    const { filteredData } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding }}>

            {filteredData.map(item => (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.transparentDarkGray,
                    marginHorizontal: SIZES.padding
                }}
                >
                    {/* <Text key={item.id}>{item.name}</Text> */}
                    <Image
                        source={{ uri: item.image.toString() }}
                        resizeMode='cover'
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: SIZES.radius
                        }} />
                    <View
                        style={{
                            width: '65%',
                            paddingHorizontal: 10
                        }}>
                        <Text style={{
                            flex: 1,
                            ...FONTS.h2,
                            color: COLORS.white, fontWeight: 'bold'

                        }}>
                            {item.name}

                        </Text>
                        <Text style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}>
                            {item.duration}|{item.serving} Serving

                        </Text>
                    </View>
                </TouchableOpacity>
            ))}

        </SafeAreaView>
    );
};

export default SearchedRecipes;
