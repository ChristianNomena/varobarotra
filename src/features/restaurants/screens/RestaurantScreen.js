import React, { useState, useContext } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import Spacer from "../../../components/Spacer";
import RestaurantInfo from "../components/RestaurantInfo";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";
import ContentLoader, { Rect } from "react-content-loader/native";

const SearchContainer = styled(View)`
  padding-left: ${(props) => props.theme.space.lg};
  padding-right: ${(props) => props.theme.space.lg};
  padding-top: ${(props) => props.theme.space.lg};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 2,
  },
})``;

const LoaderContainer = styled(ScrollView)`
  padding: ${(props) => props.theme.space.lg};
`;

const MyLoader = () => {
  return (
    <ContentLoader
      speed={1.5}
      width={400}
      height={260}
      viewBox="0 0 400 260"
      backgroundColor="#BBB"
      foregroundColor="#DDD"
    >
      <Rect y="2" rx="0" ry="0" width="327" height="195" />
      <Rect y="208" rx="2" ry="2" width="327" height="10" />
      <Rect y="229" rx="2" ry="2" width="327" height="10" />
      <Rect y="250" rx="2" ry="2" width="327" height="10" />
    </ContentLoader>
  );
};

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const loadingDefaultContent = [1, 2, 3, 4, 5];

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Recherche"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      {isLoading ? (
        <LoaderContainer>
          {loadingDefaultContent.map((content) => {
            return <MyLoader key={content} />;
          })}
        </LoaderContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="extra">
              <RestaurantInfo restaurant={item} isLoading={isLoading} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};

export default RestaurantScreen;
