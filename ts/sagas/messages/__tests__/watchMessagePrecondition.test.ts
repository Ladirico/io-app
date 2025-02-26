import * as E from "fp-ts/lib/Either";
import { testSaga } from "redux-saga-test-plan";
import { getType } from "typesafe-actions";
import { getMessagePrecondition } from "../../../store/actions/messages";
import { UIMessageId } from "../../../store/reducers/entities/messages/types";
import { testWorkerMessagePrecondition } from "../watchMessagePrecondition";
import { ThirdPartyMessagePrecondition } from "../../../../definitions/backend/ThirdPartyMessagePrecondition";
import { withRefreshApiCall } from "../../../features/fastLogin/saga/utils";

const workerMessagePrecondition = testWorkerMessagePrecondition!;

const id = "MSG001" as UIMessageId;
const mockResponseSuccess: ThirdPartyMessagePrecondition = {
  title: "-",
  markdown: "-"
};

describe("workerMessagePrecondition", () => {
  it(`should put ${getType(
    getMessagePrecondition.success
  )} when the response is successful`, () => {
    const getThirdPartyMessagePrecondition = jest.fn();

    testSaga(
      workerMessagePrecondition,
      getThirdPartyMessagePrecondition,
      getMessagePrecondition.request(id)
    )
      .next()
      .call(
        withRefreshApiCall,
        getThirdPartyMessagePrecondition({ id }),
        getMessagePrecondition.request(id)
      )
      .next(E.right({ status: 200, value: mockResponseSuccess }))
      .put(getMessagePrecondition.success(mockResponseSuccess))
      .next()
      .isDone();
  });

  it(`should put ${getType(
    getMessagePrecondition.failure
  )} when the response is an error`, () => {
    const getThirdPartyMessagePrecondition = jest.fn();

    testSaga(
      workerMessagePrecondition,
      getThirdPartyMessagePrecondition,
      getMessagePrecondition.request(id)
    )
      .next()
      .call(
        withRefreshApiCall,
        getThirdPartyMessagePrecondition({ id }),
        getMessagePrecondition.request(id)
      )
      .next(E.right({ status: 500, value: `response status ${500}` }))
      .put(getMessagePrecondition.failure(new Error(`response status ${500}`)))
      .next()
      .isDone();
  });

  it(`should put ${getType(
    getMessagePrecondition.failure
  )} when the handler throws an exception`, () => {
    const getThirdPartyMessagePrecondition = jest.fn();

    testSaga(
      workerMessagePrecondition,
      getThirdPartyMessagePrecondition,
      getMessagePrecondition.request(id)
    )
      .next()
      .next(E.left([]))
      .put(getMessagePrecondition.failure(new Error()))
      .next()
      .isDone();
  });
});
