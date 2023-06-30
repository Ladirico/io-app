import React from "react";
import { List } from "native-base";
import I18n from "../../i18n";
import TopScreenComponent from "../../components/screens/TopScreenComponent";
import { ContextualHelpPropsMarkdown } from "../../components/screens/BaseScreenComponent";
import ScreenContent from "../../components/screens/ScreenContent";
import ItemWithIconComponent from "../../components/screens/ItemWithIconComponent";

const NewProfileMainScreen = () => {
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
              subTitle="Martina Rossi"
              testID="name-surname"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"creditCard"}
              title={I18n.t("profile.fiscalCode.fiscalCode")}
              subTitle="MEDCLA76T80F463V"
              testID="fiscal-code"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"email"}
              title={I18n.t("profile.data.list.email")}
              subTitle="martina.rossi@pagopa.it"
              testID="email"
            />
          </List>
        </ScreenContent>
      </TopScreenComponent>
    </>
  );
};
export default NewProfileMainScreen;
