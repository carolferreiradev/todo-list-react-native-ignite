import { useState } from "react";

import {
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Counters } from "../../components/Counters";
import { EmptyList } from "../../components/EmptyList";
import { Card } from "../../components/Card";

import { PlusCircle } from "phosphor-react-native";

import { THEME } from "../../theme";

import { styles } from "./styles";
import { Load } from "../../components/Load";

enum EStatus {
  TODO,
  DONE,
}

interface TodoListProps {
  id: string;
  description: string;
  status: EStatus;
}

interface QuantityByStatusProps {
  created: number;
  finish: number;
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);
  const [quantityByStatus, setQuantityByStatus] =
    useState<QuantityByStatusProps>({ created: 0, finish: 0 });

  function updateTodos(todos: TodoListProps[]) {
    counterTodo(todos);
    setTodoList(todos);
  }

  function counterTodo(list: TodoListProps[]) {
    const created = list.filter((todo) => todo.status === EStatus.TODO);
    const finish = list.filter((todo) => todo.status === EStatus.DONE);

    setQuantityByStatus({
      created: created.length,
      finish: finish.length,
    });
  }

  function handleAddTodo() {
    try {
      setIsLoading(true);

      if (description.trim().length === 0) {
        return Alert.alert(
          "Adição tarefa",
          "Adicione uma descrição para adicionar uma tarefa."
        );
      }
      const todo: TodoListProps = {
        id: String(Date.now()),
        description: description.trim(),
        status: EStatus.TODO,
      };
      const todos = [...todoList, todo];

      updateTodos(todos);
      setDescription("");

      Keyboard.dismiss();
    } catch (error) {
      Alert.alert(
        "Erro ao adicionar",
        `Ocorreu um erro ao tentar adicionar tarefa, tente novamente mais tarde!`
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleChangeStatusTodo(id: string, status: EStatus) {
    try {
      setIsLoading(true);
      const allTodos = [...todoList];
      const todos: TodoListProps[] = allTodos.map((todo) => {
        if (todo.id === id) {
          todo.status = status;
          return todo;
        }
        return todo;
      });
      updateTodos(todos);
    } catch (error) {
      Alert.alert(
        "Erro ao adicionar",
        `Ocorreu um erro ao tentar adicionar tarefa, tente novamente mais tarde!`
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleDeleteTodo(id: string) {
    try {
      setIsLoading(true);
      const todo = todoList.find((todo) => todo.id === id);
      const description =
        todo?.description && todo?.description?.length > 5
          ? `${todo?.description.substring(0, 5)}...`
          : todo?.description;

      Alert.alert(
        "Excluir tarefa",
        `Tem certeza que deseja excluir a tarefa: ${description}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              const todos: TodoListProps[] = todoList.filter(
                (todo) => todo.id !== id
              );
              updateTodos(todos);
            },
          },
          {
            text: "Não",
            style: "cancel",
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Erro ao adicionar",
        `Ocorreu um erro ao tentar adicionar tarefa, tente novamente mais tarde!`
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.input}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setDescription}
            value={description}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTodo}>
            <PlusCircle color={THEME.COLOR.GRAY_100} size={20} />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <View style={styles.loading}>
            <Load />
          </View>
        ) : (
          <>
            <Counters quantity={quantityByStatus} />

            <FlatList
              data={todoList}
              keyExtractor={(_, index) => `todo__item__${index}`}
              renderItem={({ item }) => (
                <Card
                  todo={item}
                  changeStatusTodo={handleChangeStatusTodo}
                  deleteTodo={handleDeleteTodo}
                />
              )}
              ListEmptyComponent={() => <EmptyList />}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </View>
  );
}
