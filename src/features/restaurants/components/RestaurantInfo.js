import React from "react";
import { Card } from "react-native-paper";

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
    <Card key={name}>
      <Card.Cover source={photos} />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

export default RestaurantInfo;
