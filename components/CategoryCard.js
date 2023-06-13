import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  const [isBookmark, setIsBookmark] = useState(categoryItem.isBookmark);
  const handlePress = () => {

    const updatedRecipeItem = { ...categoryItem, isBookmark: !isBookmark };
    setIsBookmark(!isBookmark);

  }
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* image */}
      <Image
        source={{ uri: categoryItem.image.toString() }}
        resizeMode='cover'
        style={styles.imageContainer}
      />

      {/* Details */}
      <View style={styles.titleContainer}>
        <Text
          style={{
            ...FONTS.h2,
            ...styles.title
          }}
        >
          {categoryItem.name}
        </Text>

        {/* Additional details */}
        <View style={styles.subTitleContainer}>
          <Text
            style={{
              ...FONTS.body4,
              ...styles.subTitle

            }}
          >
            {categoryItem.duration} | {categoryItem.serving} Serving
          </Text>

          <TouchableOpacity style={{
            paddingHorizontal: 30,
            marginTop: 5
          }}
            onPress={handlePress}>
            <Image
              source={isBookmark ? icons.bookmarkfilled : icons.bookmark}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,

  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  titleContainer: {
    width: '65%', paddingHorizontal: 20
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitleContainer: {
    flexDirection: 'row', alignItems: 'center'
  },
  subTitle: {

    color: COLORS.gray,
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkGreen,
  },

})