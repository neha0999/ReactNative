import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons, Linking, images, dummyData } from '../constant';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, Header, SavedRecipesCard, SearhBar, TrendingSection } from '../components';
// import YouTube from 'react-native-youtube';


const HomeScreen = ({ navigation }) => {
  const [showVideo, setShowVedio] = useState(false);
  const handleComponentPress = () => {
    setShowVedio(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
              {!showVideo ? (
                <CategoryCard
                  containerStyle={{
                    marginHorizontal: SIZES.padding

                  }}
                  categoryItem={item}

                  onPress={handleComponentPress}
                />
              ) : (
                <SafeAreaView >
                  {/* <YouTube
                    videoId="KVZ-P-ZI6W4"
                    apiKey="AIzaSyDpPQXY96LH8EsGs9-64Lk_MncE91CXB4E"
                    play={true}
                    fullscreen={false}
                    loop={false}
                    onReady={(e) => console.log('onReady')}
                    onChangeState={(e) => console.log('onChangeState:', e.state)}
                    onChangeQuality={(e) => console.log('onChangeQuality: ', e.quality)}
                    onError={(e) => console.log('onError: ', e.error)}
                    style={{ width: '100%', height: 300 }}
                  /> */}
                </SafeAreaView>
              )}

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