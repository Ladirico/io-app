import {
  ActionType,
  createAction,
  createStandardAction
} from "typesafe-actions";
import { InitializedProfile } from "../../../definitions/backend/InitializedProfile";

export const profileInfoLoadRequest = createStandardAction(
  "PROFILE_INFO_LOAD_REQUEST"
)();

export const profileInfoLoadSuccess = createStandardAction(
  "PROFILE_INFO_LOAD_SUCCESS"
)<InitializedProfile>();

export const profileInfoLoadFailure = createAction(
  "PROFILE_INFO_LOAD_FAILURE",
  resolve => (error: Error) => resolve(error, { error: true })
);

export type ProfileInfoActions =
  | ActionType<typeof profileInfoLoadRequest>
  | ActionType<typeof profileInfoLoadSuccess>
  | ActionType<typeof profileInfoLoadFailure>;
