import React, { useEffect } from "react";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { constNull } from "fp-ts/lib/function";
import { useNavigation } from "@react-navigation/native";
import I18n from "../../i18n";
import { profileInfoSelector } from "../../store/reducers/newProfile";
import { useIODispatch, useIOSelector } from "../../store/hooks";
import { profileInfoLoad } from "../../store/actions/newProfile";
import { LoadingErrorComponent } from "../../features/bonus/bonusVacanze/components/loadingErrorScreen/LoadingErrorComponent";
import GenericErrorComponent from "../../features/fci/components/GenericErrorComponent";
import NewProfileSuccessScreen from "./NewProfileSuccessScreen";

const NewProfileMainScreen: React.FC = () => {
  const dispatch = useIODispatch();
  const userInfo = useIOSelector(profileInfoSelector);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(profileInfoLoad.request());
  }, [dispatch]);

  const LoadingComponent = () => (
    <LoadingErrorComponent
      isLoading={true}
      loadingCaption={""}
      onRetry={constNull}
      testID={"FciRouterLoadingScreenTestID"}
    />
  );

  const renderErrorComponent = () => (
    <GenericErrorComponent
      title={I18n.t("features.fci.errors.generic.default.title")}
      subTitle={I18n.t("features.fci.errors.generic.default.subTitle")}
      onPress={() => navigation.goBack()}
      testID="GenericErrorComponentTestID"
    />
  );

  return pot.fold(
    userInfo,
    () => <LoadingComponent />,
    () => <LoadingComponent />,
    () => <LoadingComponent />,
    renderErrorComponent,
    () => <NewProfileSuccessScreen />,
    () => <LoadingComponent />,
    () => <LoadingComponent />,
    () => renderErrorComponent()
  );
};

export default NewProfileMainScreen;
