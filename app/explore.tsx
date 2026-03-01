import { FlatList, StyleSheet, Text, View } from "react-native";
import { todaysNews } from "../data/mockData";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Now</Text>

      <FlatList
        data={todaysNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.meta}>
              {item.topic} · {item.posts}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 14 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: { paddingVertical: 12 },
  cardTitle: { fontWeight: "bold", fontSize: 16 },
  meta: { marginTop: 5, fontSize: 12, color: "#6B7280" },
});
