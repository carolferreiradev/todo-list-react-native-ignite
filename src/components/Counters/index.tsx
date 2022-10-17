import { View, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  quantity: {
    created: number;
    finish: number;
  };
}

export function Counters(props: Props) {
  const { quantity } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.numberTodo}>{quantity.created}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.finish}>Concluídas</Text>
        <Text style={styles.numberTodo}>{quantity.finish}</Text>
      </View>
    </View>
  );
}
