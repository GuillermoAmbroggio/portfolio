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

export type Actions = ThemeActions;
