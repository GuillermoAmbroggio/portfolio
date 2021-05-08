type ThemeActions =
  | {
      type: "TOGGLE_THEME";
    }
  | {
      type: "SET_LIGHT_THEME";
    }
  | {
      type: "SET_DARK_THEME";
    };

type LanguagesActions =
  | {
      type: "TOGGLE_LANGUAGE";
    }
  | {
      type: "SET_ES_LANGUAGE";
    }
  | {
      type: "SET_EN_LANGUAGE";
    };

type LoadingActions = {
  type: "SET_LOADING";
};

type SagasActions =
  | {
      type: "SAG_TOGGLE_LANGUAGE";
    }
  | {
      type: "SAG_ES_LANGUAGE";
    }
  | {
      type: "SAG_EN_LANGUAGE";
    };

export type Actions =
  | ThemeActions
  | LanguagesActions
  | LoadingActions
  | SagasActions;
