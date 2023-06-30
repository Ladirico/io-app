import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ListItem } from "native-base";
import { IOStyles } from "../core/variables/IOStyles";
import { HSpacer } from "../core/spacer/Spacer";
import { Body } from "../core/typography/Body";
import { IOIconSizeScale, IOIcons, Icon } from "../core/icons";

interface Props {
  showIcon?: boolean;
  iconSize?: IOIconSizeScale;
  iconName?: IOIcons;
  title?: string;
  subTitle?: string;
  iconPosition: "LEFT" | "RIGHT";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  },
  listItemText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold"
  },
  flexRow2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
  },
  alignToStart: {
    alignSelf: "flex-start"
  },
  leftIconSpace: {
    marginRight: 20
  }
});

const ItemWithIconComponent: React.FC<Props> = props => {
  const {
    showIcon = true,
    iconSize = 24,
    iconName,
    title,
    style,
    subTitle,
    iconPosition,
    testID,
    onPress
  } = props;
  return (
    <ListItem
      style={[styles.listItem, IOStyles.rowSpaceBetween, style]}
      onPress={onPress}
      testID={testID}
    >
      {!!iconName && showIcon && iconPosition === "LEFT" && (
        <View style={(styles.alignToStart, styles.leftIconSpace)}>
          <Icon name={iconName} size={iconSize} color="blue" />
        </View>
      )}
      <View style={styles.flexColumn}>
        <View style={IOStyles.rowSpaceBetween}>
          <View style={styles.flexRow2}>
            <Text style={styles.listItemText} numberOfLines={2}>
              {title}
            </Text>
            <HSpacer size={16} />
          </View>
        </View>
        {subTitle && (
          <Body style={{ alignSelf: "flex-start" }}>{subTitle}</Body>
        )}
      </View>
      {!!iconName && showIcon && iconPosition === "RIGHT" && (
        <View style={styles.alignToStart}>
          <Icon name={iconName} size={iconSize} color="blue" />
        </View>
      )}
    </ListItem>
  );
};
export default ItemWithIconComponent;
