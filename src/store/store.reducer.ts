import { Actions } from "./store.actions";
import produce from "immer";
import { initialState, IState } from "./store.state";

const reducer = (state = initialState, action: Actions): IState => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "SET_DARK_THEME":
        localStorage.setItem("modeTheme", "darkTheme");
        draftState.modeTheme = "dark";
        break;
      case "SET_LIGHT_THEME":
        localStorage.removeItem("modeTheme");
        draftState.modeTheme = "light";
        break;
      case "TOGGLE_THEME":
        draftState.modeTheme === "dark"
          ? localStorage.removeItem("modeTheme")
          : localStorage.setItem("modeTheme", "darkTheme");
        draftState.modeTheme =
          draftState.modeTheme === "dark" ? "light" : "dark";
        break;
      case "SET_ES_LANGUAGE":
        localStorage.removeItem("language");
        draftState.language = "es";
        break;
      case "SET_EN_LANGUAGE":
        localStorage.setItem("language", "en");
        draftState.language = "en";
        break;
      case "TOGGLE_LANGUAGE":
        draftState.language === "en"
          ? localStorage.removeItem("language")
          : localStorage.setItem("language", "en");
        draftState.language = draftState.language === "en" ? "es" : "en";
        break;
      case "SET_LOADING":
        draftState.isLoading = !draftState.isLoading;
        break;
      default:
        draftState;
    }
  });
};
export default reducer;
