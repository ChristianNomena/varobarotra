import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer";

const RestaurantCard = styled(Card)``;
const RestaurantCardCover = styled(Card.Cover)``;

const CardTextContainer = styled(View)`
  padding: ${(props) => props.theme.space.md};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantRightInfo = styled(View)`
  align-items: flex-end;
`;

const Rating = styled(View)`
  flex-direction: row;
`;

const Opening = styled(View)``;

const Closed = styled(Text)`
  color: red;
`;

const ContentWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const OpeningWrapper = styled(View)`
  flex-direction: row;
`;

const PlaceIcon = styled(Image)`
  width: ${(props) => props.theme.fontSizes.body};
  height: ${(props) => props.theme.fontSizes.body};
`;

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
            <Title>{name}</Title>
            <Spacer />
            <Address>{address}</Address>
          </View>
          <RestaurantRightInfo>
            <Spacer />
            <Rating>
              {ratingArray.map((_rating, index) => {
                return <SvgXml key={index} width="20" height="20" xml={star} />;
              })}
            </Rating>
            <Spacer />
            <OpeningWrapper>
              {isClosedTemporarily && <Closed variant="label">Fermé</Closed>}
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
