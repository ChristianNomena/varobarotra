import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../components/RestaurantInfo";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Recherche"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
