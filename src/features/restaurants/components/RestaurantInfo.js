import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)``;
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantCardTitle = styled(Card.Title)`y`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard key={name}>
      <RestaurantCardCover source={photos} />
      <RestaurantCardTitle title={name} subtitle={address} />
    </RestaurantCard>
  );
};

export default RestaurantInfo;
