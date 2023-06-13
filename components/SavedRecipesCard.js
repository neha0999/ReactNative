import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData, Images } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SavedRecipesCard = () => {
    const bookmarkedItemCount = dummyData.categories.filter(item => item.isBookmark === true).length;

    const navigation = useNavigation()
    return (
        <View
            style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={images.recipe}
                    style={styles.image} />

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    You have {bookmarkedItemCount} recipes that you have'nt tried yet.
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate("Saved")}>
                    <Text style={styles.linkText}>
                        See Recipes
                    </Text>

                </TouchableOpacity>

            </View>
        </View>


    )
}

export default SavedRecipesCard



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen

    },
    imageContainer: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    textContainer: {
        flex: 1,
        paddingVertical: SIZES.radius
    },
    text: {
        width: "70%",
        ...FONTS.body4
    },
    linkText: {
        color: COLORS.darkGreen,
        textDecorationLine: 'underline',
        ...FONTS.h4
    }

})