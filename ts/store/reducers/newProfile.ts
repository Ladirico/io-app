import * as pot from "@pagopa/ts-commons/lib/pot";
import { getType } from "typesafe-actions";
import { createSelector } from "reselect";
import { InitializedProfile } from "../../../definitions/backend/InitializedProfile";
import { capitalize } from "../../utils/strings";
import {
  profileInfoLoadRequest,
  profileInfoLoadSuccess,
  profileInfoLoadFailure
} from "../actions/newProfile";
import { Action } from "../actions/types";
import { GlobalState } from "./types";

export type NewProfileState = pot.Pot<InitializedProfile, Error>;

const INITIAL_STATE: NewProfileState = pot.none;

// Selectors

export const profileSelector = (state: GlobalState): NewProfileState =>
  state.newProfile;

export const profileInfoSelector = createSelector(
  profileSelector,
  (profile: NewProfileState): any =>
    pot.getOrElse(
      pot.map(profile, p => ({
        prova: "prova",
        namesurname: capitalize(`${p.name} ${p.family_name}`),
        fiscal_code: p.fiscal_code,
        email: p.email
      })),
      undefined
    )
);

const reducer = (
  state: NewProfileState = INITIAL_STATE,
  action: Action
): NewProfileState => {
  switch (action.type) {
    case getType(profileInfoLoadRequest):
      return pot.toLoading(state);

    case getType(profileInfoLoadSuccess):
      return pot.some({ ...action.payload, prova: "proviamoci" });

    case getType(profileInfoLoadFailure):
      return pot.toError(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
