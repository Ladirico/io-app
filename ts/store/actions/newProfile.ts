import { ActionType, createAsyncAction } from "typesafe-actions";
import { InitializedProfile } from "../../../definitions/backend/InitializedProfile";
import { NetworkError } from "../../utils/errors";

export const profileInfoLoad = createAsyncAction(
  "PROFILE_INFO_LOAD_REQUEST",
  "PROFILE_INFO_LOAD_SUCCESS",
  "PROFILE_INFO_LOAD_FAILURE"
)<void, InitializedProfile, NetworkError>();

export type ProfileInfoActions = ActionType<typeof profileInfoLoad>;
