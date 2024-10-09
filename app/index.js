import { StyleSheet, Text, View } from "react-native";
import App from './../App';
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoForm";

export default function Page() {
  return (
    <View style={styles.container}>
        {/* <App /> */}
        <ToDoList />
        <ToDoForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
