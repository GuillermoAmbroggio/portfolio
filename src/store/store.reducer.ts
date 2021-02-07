import { Actions } from "./store.actions";
import produce from "immer";
import { initialState, IState } from "./store.state";

const reducer = (state = initialState, action: Actions): IState => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "SET_DARK_THEME":
        draftState.modeTheme = "dark";
        break;
      case "SET_LIGHT_THEME":
        console.log("storereducer 12");
        draftState.modeTheme = "light";
        break;
      case "TOGGLE_THEME":
        draftState.modeTheme =
          draftState.modeTheme === "dark" ? "light" : "dark";
        break;
      default:
        draftState;
    }
  });
};
export default reducer;
