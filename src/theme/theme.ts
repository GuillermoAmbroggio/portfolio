import { DefaultTheme } from "styled-components";
import { colors, text } from "./tokens";
import produce from "immer";

export const lightTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: colors.common.black,
      white: colors.common.white,
    },
    primary: colors.blue.darkBlue,
    secondary: colors.gray.gray10,
    background: colors.common.white,
    texts: {
      subTitle: colors.gray.gray80,
      regular: colors.gray.gray50,
      title: colors.gray.gray100,
    },
  },
  fontFamilies: text.fonts,
  fontSizes: text.size,
  fontWeights: text.weight,
};

export const darkTheme = produce(lightTheme, (draft) => {
  draft.palette.background = colors.common.black;
  draft.palette.texts.regular = colors.common.white;
});
