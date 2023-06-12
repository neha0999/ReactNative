import React, { useState } from 'react';
import { SafeAreaView, Text, View, Linking, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constant';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { CategoryCard, Header, SavedRecipesCard, SearhBar, TrendingSection } from '../components';
import { color } from 'react-native-reanimated';



const HomeScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, paddingVertical: SIZES.padding }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>
          
          <SearhBar />
          <SavedRecipesCard />
          <View style={{ marginTop: SIZES.padding }}>
            <Text style={{
              marginHorizontal: SIZES.padding,
              ...FONTS.h2,
              color:COLORS.white
            }}>Trending Recipes

            </Text>
            <FlatList
              data={dummyData.categories}
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
          <Text style={{
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.body3,
            ...FONTS.h2,
            color:COLORS.white
          }}>Recents</Text>
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