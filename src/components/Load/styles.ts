import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLOR.GRAY_700,
  },
  animation: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
  },
});
