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
    secondary: colors.gray.gray30,
    tertiary: colors.gray.gray10,
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
  draft.palette.texts.title = colors.common.white;
  draft.palette.texts.subTitle = colors.common.white;
  draft.palette.texts.title = colors.common.white;
  draft.palette.primary = colors.blue.ligthBlue;
  draft.palette.secondary = colors.common.white;
  draft.palette.tertiary = colors.gray.gray100;
});
