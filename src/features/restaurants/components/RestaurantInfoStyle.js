import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)``;
export const RestaurantCardCover = styled(Card.Cover)``;

export const CardTextContainer = styled(View)`
  padding: ${(props) => props.theme.space.md};
`;

export const RestaurantRightInfo = styled(View)`
  align-items: flex-end;
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const Opening = styled(View)``;

export const ContentWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const OpeningWrapper = styled(View)`
  flex-direction: row;
`;

export const PlaceIcon = styled(Image)`
  width: ${(props) => props.theme.fontSizes.body};
  height: ${(props) => props.theme.fontSizes.body};
`;
