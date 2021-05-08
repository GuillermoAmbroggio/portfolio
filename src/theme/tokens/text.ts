const text = {
  fonts:
    "Segoe UI, Helvetica, Arial, sans-serif, Merriweather, Georgia, serif, Open Sans ",
  size: {
    mobile: {
      heroTitle: "64px",
      title: "32px",
      subTitle: "26px",
      regular: "16px",
      small: "12px",
    },
    desktop: {
      heroTitle: "64px",
      title: "32px",
      subTitle: "26px",
      regular: "16px",
      small: "12px",
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
    heroTitle: string;
    title: string;
    subTitle: string;
    regular: string;
    small: string;
  };
  desktop: {
    heroTitle: string;
    title: string;
    subTitle: string;
    regular: string;
    small: string;
  };
}

export interface IWeight {
  light: number;
  regular: number;
  bold: number;
}
