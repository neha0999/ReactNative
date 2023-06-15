import React, { useState } from 'react';
import { SafeAreaView, Text, View, Linking, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constant';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, Header, SavedRecipesCard, SearhBar, TrendingSection } from '../components';
const Saved = () => {



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Saved Recipes  </Text>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}


        renderItem={({ item }) => {
          if (item.isBookmark) {
            return (
              <View>

                <CategoryCard
                  containerStyle={{
                    marginHorizontal: SIZES.padding

                  }}
                  categoryItem={item}

                  onPress={() => {
                    const youtubeUrl = item.url;
                    Linking.openURL(youtubeUrl);
                  }}
                />



              </View>
            );
          }
          return null;
        }}
      />

    </SafeAreaView>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding },
  text: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    color: COLORS.white
  }
})