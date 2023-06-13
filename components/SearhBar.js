import React, { useState } from 'react';
import { View, Image,StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES, icons, dummyData } from '../constant';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);
  const navigation = useNavigation();

  const handleSearch = () => {
    const searchData = [];
    if(searchQuery !== ''){
    for (let i = 0; i < dummyData.categories.length; i++) {
      if (dummyData.categories[i].name.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchData.push(dummyData.categories[i]);
      }
    }

    if (searchData.length > 0) {
      navigation.navigate('SearchedRecipes', { filteredData: searchData });
      setFilteredData(searchData);
    } else {
      setFilteredData([]);
    }
  }
  };

  return (
    <View
      style={styles.container}
    >
      <Image
        source={icons.search}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
        placeholder='Search Recipes'
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      
      {filteredData.length === 0 && searchQuery !== '' && (
        <Text style={{ textAlign: 'center', marginTop: 10, color: COLORS.gray }}>
          No results found for '{searchQuery}'
        </Text>
      )}
    </View>
  );
};

export default SearchBar;


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.transparentDarkGray
  },
  image:{
    width: 20,
          height: 20,
          tintColor: COLORS.gray
  },
  textInput:{
    flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
          color: COLORS.white
  }
})