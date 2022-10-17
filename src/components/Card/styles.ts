import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.COLOR.GRAY_400,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  checkbox: {
    borderRadius: 12,
    width: 24,
    height: 24,
    borderColor: THEME.COLOR.BLUE_DARK,
  },
  descriptionTodo: {
    flex: 1,
    color: THEME.COLOR.GRAY_100,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginHorizontal: 8,
  },
  descriptionDone: {
    color: THEME.COLOR.GRAY_300,
    textDecorationColor: THEME.FONT_FAMILY.REGULAR,
    textDecorationLine: "line-through",
    fontSize: THEME.FONT_SIZE.MD,
    marginHorizontal: 8,
    flex: 1,
  },
  trashButton: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
});
