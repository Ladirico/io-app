import * as pot from "@pagopa/ts-commons/lib/pot";
import { getType } from "typesafe-actions";
import { createSelector } from "reselect";
import { InitializedProfile } from "../../../definitions/backend/InitializedProfile";
import { capitalize } from "../../utils/strings";
import { profileInfoLoad } from "../actions/newProfile";
import { Action } from "../actions/types";
import { NetworkError } from "../../utils/errors";
import { GlobalState } from "./types";

export type NewProfileType = {
  prova: string;
  namesurname: string;
  fiscal_code: string;
  email: string;
};

export type NewProfileState = pot.Pot<InitializedProfile, NetworkError>;

const INITIAL_STATE: NewProfileState = pot.none;

// Selectors

export const profileSelector = (state: GlobalState) => state.newProfile;

export const profileInfoSelector = createSelector(
  profileSelector,
  (profile: NewProfileState) =>
    pot.map(profile, p => ({
      namesurname: capitalize(`${p.name} ${p.family_name}`),
      fiscal_code: p.fiscal_code,
      email: p.email,
      has_profile: p.has_profile
    }))
);

const reducer = (
  state: NewProfileState = INITIAL_STATE,
  action: Action
): NewProfileState => {
  switch (action.type) {
    case getType(profileInfoLoad.request):
      return pot.toLoading(state);
    case getType(profileInfoLoad.success):
      return pot.some({ ...action.payload });
    case getType(profileInfoLoad.failure):
      return pot.toError(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
