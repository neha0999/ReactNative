import React from 'react'
import { SafeAreaView, Image, Text, View, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, images, icons, dummyData } from '../constant';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';

const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View style={{
            flex: 1

        }}>
            {/* Name and bookmark */}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    width: '70%',
                    color: COLORS.lightLime,
                    ...FONTS.h3,
                    fontSize: 18
                }}>
                    {recipeItem.name}

                </Text>
                <Image source={recipeItem.isBookmark ? icons.bookmarkfilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen
                    }} />
            </View>
            {/* duration */}
            <Text style={{
                color: COLORS.lightGray,
                ...FONTS.body4
            }}>
                {recipeItem.duration}|{recipeItem.serving} Serving

            </Text>

        </View>
    )

}

const RecipeCardInfo = ({ recipeItem }) => {
    if (Platform.OS == 'ios') {
        return (<BlurView blurType="dark"
            style={styles.recipeCardContainner}>
            <RecipeCardDetails recipeItem={recipeItem} />
        </BlurView>)
    }
    else {
        return (
            <View style={{
                ...styles.recipeCardContainner,
                backgroundColor: COLORS.transparentDarkGray
            }}>
                <RecipeCardDetails recipeItem={recipeItem} />

            </View>

        )
    }
}

const TrendingSection = ({ containerStyle, recipeItem, onPress }) => {
    return (


        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}>

            <Image
                source={recipeItem.image}
                resizeMode='cover'
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }} />
            <View style={{
                position: 'absolute',
                top: 20,
                left: 15,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 5,
                backgroundColor: COLORS.transparentGray,
                borderRadius: SIZES.radius,
            }}>
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.h4
                }}>
                    {recipeItem.category}
                </Text>
            </View>
            <RecipeCardInfo
                recipeItem={recipeItem} />

        </TouchableOpacity>


    )
}

export default TrendingSection


const styles = StyleSheet.create({
    recipeCardContainner: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius

    }
})