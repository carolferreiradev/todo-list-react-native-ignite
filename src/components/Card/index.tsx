import { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import Checkbox from "expo-checkbox";

import { Trash } from "phosphor-react-native";

import { THEME } from "../../theme";

import { styles } from "./styles";

enum EStatus {
  TODO,
  DONE,
}

interface TodoProps {
  id: string;
  description: string;
  status: EStatus;
}

interface Props {
  todo: TodoProps;
  changeStatusTodo: (id: string, status: EStatus) => void;
  deleteTodo: (id: string) => void;
}

export function Card(props: Props) {
  const { todo, changeStatusTodo, deleteTodo } = props;
  const [isChecked, setChecked] = useState(false);

  function handleChangeStatusTodo(value: boolean, todoId: string) {
    setChecked(value);
    const status = value ? EStatus.DONE : EStatus.TODO;
    changeStatusTodo(todoId, status);
  }

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(value) => handleChangeStatusTodo(value, todo.id)}
        color={isChecked ? THEME.COLOR.PURPLE : undefined}
      />
      <Text
        style={
          todo.status === EStatus.TODO
            ? styles.descriptionTodo
            : styles.descriptionDone
        }
      >
        {todo.description}
      </Text>
      <TouchableOpacity
        style={styles.trashButton}
        onPress={() => deleteTodo(todo.id)}
      >
        <Trash color={THEME.COLOR.GRAY_300} />
      </TouchableOpacity>
    </View>
  );
}
