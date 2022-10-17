import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_600,
  },
  content: {
    width: "100%",
    paddingHorizontal: 24,

    top: -27,
  },
  input: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonAdd: {
    backgroundColor: THEME.COLOR.BLUE_DARK,
    padding: 18,
    height: 54,
    borderRadius: 6,
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    marginTop: 200,
  },
});
