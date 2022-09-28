import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";

import {
  RestaurantCard,
  RestaurantCardCover,
  CardTextContainer,
  ContentWrapper,
  RestaurantRightInfo,
  Rating,
  OpeningWrapper,
  Opening,
  PlaceIcon,
} from "./RestaurantInfoStyle";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard key={name} elevation={4}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <CardTextContainer>
        <ContentWrapper>
          <View>
            <CustomText variant="label">{name}</CustomText>
            <Spacer />
            <CustomText variant="subtitle">{address}</CustomText>
          </View>
          <RestaurantRightInfo>
            <Rating>
              {ratingArray.map((_rating, index) => {
                return <SvgXml key={index} width="20" height="20" xml={star} />;
              })}
            </Rating>
            <OpeningWrapper>
              {isClosedTemporarily && (
                <CustomText variant="error">Fermé</CustomText>
              )}
              <Opening>
                {isOpenNow && <SvgXml width="20" height="20" xml={open} />}
              </Opening>
              <Spacer position="left" size="medium">
                <PlaceIcon source={{ uri: icon }} />
              </Spacer>
              <Spacer position="right" size="small" />
            </OpeningWrapper>
          </RestaurantRightInfo>
        </ContentWrapper>
      </CardTextContainer>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
