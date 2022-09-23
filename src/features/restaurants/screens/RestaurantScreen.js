import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../components/RestaurantInfo";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`;

const SearchWrapper = styled(View)`
  padding: 16px;
`;

const RestaurantListWrapper = styled(View)`
  flex: 1;
  padding: 16px;
`;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchWrapper>
        <Searchbar
          placeholder="Recherche"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchWrapper>
      <RestaurantListWrapper>
        <RestaurantInfo />
      </RestaurantListWrapper>
    </SafeArea>
  );
};

export default RestaurantScreen;
