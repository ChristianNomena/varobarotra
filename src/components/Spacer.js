import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: "xs",
  medium: "sm",
  large: "md",
  extra: "lg",
};

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant};
`;

const Spacer = ({ position = "top", size = "small", children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export default Spacer;
