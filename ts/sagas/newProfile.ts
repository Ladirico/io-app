import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
import { call, put } from "typed-redux-saga/macro";
import { InitializedProfile } from "../../definitions/backend/InitializedProfile";
import { BackendClient } from "../api/backend";
import {
  profileInfoLoadFailure,
  profileInfoLoadRequest,
  profileInfoLoadSuccess
} from "../store/actions/newProfile";
import { ReduxSagaEffect, SagaCallReturnType } from "../types/utils";
import { convertUnknownToError } from "../utils/errors";
import { readablePrivacyReport } from "../utils/reporters";
import { withRefreshApiCall } from "../features/fastLogin/saga/utils";

export function* prova(
  getProfileInfo: ReturnType<typeof BackendClient>["getProfileInfo"]
): Generator<
  ReduxSagaEffect,
  O.Option<InitializedProfile>,
  SagaCallReturnType<typeof getProfileInfo>
> {
  try {
    const response = (yield* call(
      withRefreshApiCall,
      getProfileInfo({})
    )) as unknown as SagaCallReturnType<typeof getProfileInfo>;
    if (E.isLeft(response)) {
      throw Error(readablePrivacyReport(response.left));
    }
    yield* put(profileInfoLoadRequest());
    if (response.right.status === 200) {
      yield* put(
        profileInfoLoadSuccess(response.right.value as InitializedProfile)
      );
      return O.some(response.right.value);
    }
  } catch (e) {
    yield* put(profileInfoLoadFailure(convertUnknownToError(e)));
  }

  return O.none;
}
export function* provaSaga(
  getProfileInfo: ReturnType<typeof BackendClient>["getProfileInfo"]
): Iterator<ReduxSagaEffect> {
  yield* call(prova, getProfileInfo);
}
