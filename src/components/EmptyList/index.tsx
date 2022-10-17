import { View, Image, Text } from "react-native";

import ClipboardImg from "../../assets/clipboard.png";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={ClipboardImg} />
      <Text style={styles.strong}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.normal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
