import { Text } from "react-native";
import styled from "styled-components";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  font-family: ${theme.fonts.body.semibold};
  color: ${theme.colors.text.error};
`;

const subtitle = (theme) => `
  font-family: ${theme.fonts.body.light};
  font-size: ${theme.fontSizes.caption};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading.bold};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
  font-weight: bold;
`;

const variants = {
  body,
  label,
  subtitle,
  caption,
  error,
  hint,
};

const CustomText = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

CustomText.defaultProps = {
  variant: "body",
};

export default CustomText;
