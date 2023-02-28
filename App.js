import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = [
    {alimento: "Banana", calorias: 25},
    {alimento: "Maçã", calorias: 12},
    {alimento: "Pessego", calorias: 20},
    {alimento: "Maracujá", calorias: 5},
    {alimento: "Amora", calorias: 3},

  ];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item.alimento} - {item.calorias}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
