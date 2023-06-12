import React, { useState } from 'react';
import { View, Image, TextInput,Text, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES, icons, dummyData } from '../constant';
import { useNavigation } from '@react-navigation/native';
import { SearchedRecipes } from '../screens';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);
  const navigation=useNavigation();

  const handleSearch = () => {
    const searchData = [];
    for (let i = 0; i < dummyData.categories.length; i++) {
      if (dummyData.categories[i].name.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchData.push(dummyData.categories[i]);
      }
      
    }
    navigation.navigate('SearchedRecipes',{filteredData:searchData})
    setFilteredData(searchData);
    console.log(searchData)
  };
  

  

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.transparentDarkGray
      }}
    >
      <Image
        source={icons.search}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray
        }}
      />
      <TextInput
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
          color:COLORS.white
        }}
        placeholderTextColor={COLORS.gray}
        placeholder='Search Recipes'
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity>
        <Image
          source={icons.arrowRight}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray
          }}
        />
      </TouchableOpacity>
      {filteredData.length === 0 && searchQuery !== '' && (
        <Text style={{ textAlign: 'center', marginTop: 10 ,color:COLORS.white}}>
          No results found for '{searchQuery}'
        </Text>
      )}
      {/* Render search results */}
      
    </View>
  );
};

export default SearchBar;
