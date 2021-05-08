export interface IState {
  modeTheme: "light" | "dark";
  language: "es" | "en";
  isLoading: boolean;
}

export const initialState: IState = {
  modeTheme: "light",
  language: "es",
  isLoading: false,
};
