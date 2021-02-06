const text = {
  fonts:
    "Segoe UI, Helvetica, Arial, sans-serif, Merriweather, Georgia, serif, Open Sans ",
  size: {
    mobile: {
      title: 32,
      subTitle: 26,
      regular: 16,
      small: 12,
    },
    desktop: {
      title: 32,
      subTitle: 26,
      regular: 16,
      small: 12,
    },
  },
  weight: {
    light: 200,
    regular: 400,
    bold: 700,
  },
};
export default text;

export interface ISizes {
  mobile: {
    title: number;
    subTitle: number;
    regular: number;
    small: number;
  };
  desktop: {
    title: number;
    subTitle: number;
    regular: number;
    small: number;
  };
}

export interface IWeight {
  light: number;
  regular: number;
  bold: number;
}
