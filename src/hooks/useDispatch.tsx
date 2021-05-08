import { useDispatch as ReduxDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Actions } from "../store/store.actions";

const useDispatch: () => Dispatch<Actions> = () => {
  const dispatch: Dispatch<Actions> = ReduxDispatch();
  return dispatch;
};
export default useDispatch;
