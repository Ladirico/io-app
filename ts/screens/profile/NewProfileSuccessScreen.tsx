import React from "react";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { List } from "native-base";
import I18n from "../../i18n";
import TopScreenComponent from "../../components/screens/TopScreenComponent";
import { ContextualHelpPropsMarkdown } from "../../components/screens/BaseScreenComponent";
import ScreenContent from "../../components/screens/ScreenContent";
import ItemWithIconComponent from "../../components/screens/ItemWithIconComponent";
import { profileInfoSelector } from "../../store/reducers/newProfile";
import { useIOSelector } from "../../store/hooks";
import { RemoteSwitch } from "../../components/core/selection/RemoteSwitch";

const NewProfileSuccessScreen: React.FC = () => {
  const userInfo = useIOSelector(profileInfoSelector);
  const contextualHelpMarkdown: ContextualHelpPropsMarkdown = {
    title: "services.contextualHelpTitle",
    body: "services.contextualHelpContent"
  };

  return (
    <>
      <TopScreenComponent
        goBack={true}
        accessibilityLabel="Profilo"
        headerTitle="Profilo"
        contextualHelpMarkdown={contextualHelpMarkdown}
        faqCategories={["profile"]}
      >
        <ScreenContent title="Profilo">
          <List withContentLateralPadding>
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"profile"}
              title={I18n.t("profile.data.list.nameSurname")}
              subTitle=""
              // subTitle={userInfo.value.namesurname}
              testID="name-surname"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"creditCard"}
              title={I18n.t("profile.fiscalCode.fiscalCode")}
              subTitle=""
              // subTitle={userInfo.value.fiscal_code}
              testID="fiscal-code"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"email"}
              title={I18n.t("profile.data.list.email")}
              // subTitle={userInfo.value.email}
              subTitle=""
              testID="email"
            />
            <RemoteSwitch value={pot.some(true)} />
          </List>
        </ScreenContent>
      </TopScreenComponent>
    </>
  );
};

export default NewProfileSuccessScreen;
