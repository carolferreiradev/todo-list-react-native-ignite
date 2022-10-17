import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_500,
    height: 54,
    borderRadius: 8,
    color: THEME.COLOR.GRAY_100,
    padding: 16,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
