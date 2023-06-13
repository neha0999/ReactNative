import React, { useState } from 'react'
import { SafeAreaView, Image, Text, View, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, images, icons, dummyData } from '../constant';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';

const RecipeCardDetails = ({ recipeItem }) => {
    const [isBookmark, setIsBookmark] = useState(recipeItem.isBookmark);

    const handlePress = () => {

        const updatedRecipeItem = { ...recipeItem, isBookmark: !isBookmark };
        setIsBookmark(!isBookmark);

    }
    return (
        <View style={{
            flex: 1

        }}>
            {/* Name and bookmark */}
            <View style={styles.nameContainer}>
                <Text style={styles.name}>
                    {recipeItem.name}
                </Text>
                <TouchableOpacity onPress={handlePress}>

                    <Image source={isBookmark ? icons.bookmarkfilled : icons.bookmark}
                        style={styles.bookmarkIcon} />
                </TouchableOpacity>
            </View>
            {/* duration */}
            <Text style={styles.subDetail}>
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
    if (recipeItem.isTrending) {
        return (

            <TouchableOpacity
                style={styles.container}
                onPress={onPress}>

                <Image
                    source={{ uri: recipeItem.image.toString() }}
                    resizeMode='cover'
                    style={styles.imageContainer}
                />
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>
                        {recipeItem.category}
                    </Text>
                </View>
                <RecipeCardInfo
                    recipeItem={recipeItem} />

            </TouchableOpacity>


        )
    }
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

    },
    container: {
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
    },
    imageContainer: {
        width: 250,
        height: 350,
        borderRadius: SIZES.radius
    },
    categoryContainer: {
        position: 'absolute',
        top: 20,
        left: 15,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
        backgroundColor: COLORS.transparentGray,
        borderRadius: SIZES.radius,
    },
    category: {
        color: COLORS.white,
        ...FONTS.h4
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        width: '70%',
        color: COLORS.lightLime,
        ...FONTS.h3,
        fontSize: 15
    },
    bookmarkIcon: {
        width: 20,
        height: 20,
        marginRight: SIZES.base,
        tintColor: COLORS.darkGreen
    },
    subDetail: {
        color: COLORS.lightGray,
        ...FONTS.body4
    }
})