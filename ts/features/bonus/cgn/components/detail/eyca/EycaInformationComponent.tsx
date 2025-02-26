import * as React from "react";
import { View } from "react-native";
import Markdown from "../../../../../../components/ui/Markdown";
import I18n from "../../../../../../i18n";
import { useLegacyIOBottomSheetModal } from "../../../../../../utils/hooks/bottomSheet";
import { openWebUrl } from "../../../../../../utils/url";
import ButtonDefaultOpacity from "../../../../../../components/ButtonDefaultOpacity";
import { Label } from "../../../../../../components/core/typography/Label";
import { showToast } from "../../../../../../utils/showToast";
import { VSpacer } from "../../../../../../components/core/spacer/Spacer";
import { EYCA_WEBSITE_BASE_URL } from "../../../utils/constants";

/**
 * this component shows information about EYCA card. It is included within a bottom sheet
 * @constructor
 */
const EycaInformationComponent: React.FunctionComponent = () => {
  const [isMarkdownloaded, setMarkdownloaded] = React.useState(false);
  return (
    <View>
      <VSpacer size={16} />
      <View>
        <Markdown avoidTextSelection onLoadEnd={() => setMarkdownloaded(true)}>
          {I18n.t("bonus.cgn.detail.status.eycaDescription")}
        </Markdown>
        <VSpacer size={16} />
        {isMarkdownloaded && (
          <ButtonDefaultOpacity
            style={{ width: "100%" }}
            bordered
            onPress={() =>
              openWebUrl(EYCA_WEBSITE_BASE_URL, () =>
                showToast(I18n.t("bonus.cgn.generic.linkError"))
              )
            }
            onPressWithGestureHandler
          >
            <Label color={"blue"}>
              {I18n.t("bonus.cgn.detail.cta.eyca.bottomSheet")}
            </Label>
          </ButtonDefaultOpacity>
        )}
      </View>
    </View>
  );
};

export const useEycaInformationBottomSheet = () =>
  useLegacyIOBottomSheetModal(
    <EycaInformationComponent />,
    I18n.t("bonus.cgn.detail.status.eycaBottomSheetTitle"),
    420
  );
