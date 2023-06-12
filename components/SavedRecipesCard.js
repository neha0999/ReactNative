import React from 'react';
import { SafeAreaView, Text, View, Image, Linking } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData, Images } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SavedRecipesCard = () => {
    const bookmarkedItemCount = dummyData.categories.filter(item => item.isBookmark === true).length;

    const navigation = useNavigation()
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.lightGreen
            }}>
            <View style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={images.recipe}
                    style={{
                        width: 80,
                        height: 80
                    }} />

            </View>
            <View style={{
                flex: 1,
                paddingVertical: SIZES.radius
            }}>
                <Text style={{
                    width: "70%",
                    ...FONTS.body4
                }}>You have {bookmarkedItemCount} recipes that you have'nt tried yet.</Text>
                <TouchableOpacity style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate("Saved")}>
                    <Text style={{
                        color: COLORS.darkGreen,
                        textDecorationLine: 'underline',
                        ...FONTS.h4
                    }}>
                        See Recipes
                    </Text>

                </TouchableOpacity>

            </View>
        </View>


    )
}

export default SavedRecipesCard
