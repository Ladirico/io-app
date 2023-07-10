import * as E from "fp-ts/lib/Either";
import { call, put, takeLatest } from "typed-redux-saga/macro";
import { BackendClient } from "../api/backend";
import { profileInfoLoad } from "../store/actions/newProfile";
import { ReduxSagaEffect, SagaCallReturnType } from "../types/utils";
import { getNetworkError } from "../utils/errors";
import { readablePrivacyReport } from "../utils/reporters";
import { withRefreshApiCall } from "../features/fastLogin/saga/utils";

export function* prova(
  getProfileInfo: ReturnType<typeof BackendClient>["getProfileInfo"]
) {
  try {
    const response = (yield* call(
      withRefreshApiCall,
      getProfileInfo({})
    )) as unknown as SagaCallReturnType<typeof getProfileInfo>;
    if (E.isLeft(response)) {
      throw Error(readablePrivacyReport(response.left));
    }
    if (response.right.status === 200) {
      yield* put(profileInfoLoad.success(response.right.value));
    }
  } catch (e) {
    yield* put(profileInfoLoad.failure(getNetworkError(e)));
  }
}

export function* provaSaga(
  getProfileInfo: ReturnType<typeof BackendClient>["getProfileInfo"]
): Iterator<ReduxSagaEffect> {
  yield* takeLatest(profileInfoLoad.request, prova, getProfileInfo);
}
