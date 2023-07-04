import React from "react";
import { List } from "native-base";
import { connect } from "react-redux";
import I18n from "../../i18n";
import TopScreenComponent from "../../components/screens/TopScreenComponent";
import { ContextualHelpPropsMarkdown } from "../../components/screens/BaseScreenComponent";
import ScreenContent from "../../components/screens/ScreenContent";
import ItemWithIconComponent from "../../components/screens/ItemWithIconComponent";
import { GlobalState } from "../../store/reducers/types";
import { profileInfoSelector } from "../../store/reducers/newProfile";
type Props = ReturnType<typeof mapStateToProps>;

const NewProfileMainScreen: React.FC<Props> = (props: Props) => {
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
              subTitle={props.userInfo.namesurname}
              testID="name-surname"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"creditCard"}
              title={I18n.t("profile.fiscalCode.fiscalCode")}
              subTitle={props.userInfo.fiscal_code}
              testID="fiscal-code"
            />
            <ItemWithIconComponent
              iconPosition="LEFT"
              iconName={"email"}
              title={I18n.t("profile.data.list.email")}
              subTitle={props.userInfo.email}
              testID="email"
            />
          </List>
        </ScreenContent>
      </TopScreenComponent>
    </>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  userInfo: profileInfoSelector(state)
});

export default connect(mapStateToProps)(NewProfileMainScreen);
