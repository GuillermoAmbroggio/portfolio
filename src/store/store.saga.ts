import { ForkEffect, takeEvery, delay, put } from "redux-saga/effects";

export function* HelloSag(): Generator<ForkEffect<never>, void, unknown> {
  console.log("Hello Sagas!");
  yield takeEvery("SAG_ES_LANGUAGE", function* asd() {
    yield put({ type: "SET_LOADING" });
    yield put({ type: "SET_ES_LANGUAGE" });
    yield delay(1000);
    yield put({ type: "SET_LOADING" });
  });

  yield takeEvery("SAG_EN_LANGUAGE", function* asd() {
    yield put({ type: "SET_LOADING" });
    yield put({ type: "SET_EN_LANGUAGE" });
    yield delay(1000);
    yield put({ type: "SET_LOADING" });
  });
}
