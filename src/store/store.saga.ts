import { ForkEffect } from "redux-saga/effects";

export function* HelloSag(): Generator<ForkEffect<never>, void, unknown> {
  console.log("Hello Sagas!");
  /*   yield takeEvery("TOGGLE_THEME", function* asd() {
    yield delay(3000);
    yield put({ type: "TOGGLE_THEME_2" });
  }); */
}
