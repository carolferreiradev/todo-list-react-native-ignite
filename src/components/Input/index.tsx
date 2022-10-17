import { TextInput, TextInputProps, View } from "react-native";

import { THEME } from "../../theme";

import { styles } from "./styles";

interface Props extends TextInputProps {}

export function Input(props: Props) {
  const { ...rest } = props;
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={THEME.COLOR.GRAY_300}
      {...rest}
    />
  );
}
