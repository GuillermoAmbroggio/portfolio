import "styled-components";
import { ISizes, IWeight } from "./tokens/text";

interface ITexts {
  subTitle: string;
  regular: string;
  title: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      texts: ITexts;
    };
    fontFamilies: string;
    fontSizes: ISizes;
    fontWeights: IWeight;
  }
}
