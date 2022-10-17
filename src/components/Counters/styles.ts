import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 20,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
  },
  created: {
    color: THEME.COLOR.BLUE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
  finish: {
    color: THEME.COLOR.PURPLE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
  numberTodo: {
    marginLeft: 8,
    backgroundColor: THEME.COLOR.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLOR.GRAY_200,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
});
