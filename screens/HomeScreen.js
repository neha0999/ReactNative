import React, { useState } from 'react';
import { SafeAreaView, Text, View,Linking, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constant';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, Header, SavedRecipesCard, SearhBar, TrendingSection } from '../components';



const HomeScreen = ({ navigation }) => {
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingVertical:SIZES.padding}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>
          <Header />
          <SearhBar />
          <SavedRecipesCard />
          <View style={{ marginTop: SIZES.padding }}>
            <Text style={{
              marginHorizontal: SIZES.padding,
              ...FONTS.h2
            }}>Trending Recipes

            </Text>
            <FlatList
              data={dummyData.trendingRecipes}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item, index }) => {
                return (
                  <TrendingSection
                    containerStyle={{
                      marginLeft: index == 0 ? SIZES.padding : 0
                    }}
                    recipeItem={item}
                  // onPress={}
                  />
                )
              }} />
          </View>
          {/* category header */}
        </View>}
        renderItem={({ item }) => {
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
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({

})