import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { categories, todaysNews } from "../data/mockData";

export default function SearchScreen() {
  const [active, setActive] = useState("For You");

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput placeholder="Search" />
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable onPress={() => setActive(item)}>
            <Text
              style={[
                styles.category,
                active === item && styles.activeCategory,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />

      <Text style={styles.sectionTitle}>Today's News</Text>

      <FlatList
        data={todaysNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.meta}>
              {item.time} · {item.topic} · {item.posts}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14,
  },
  searchBox: {
    backgroundColor: "#F3F4F6",
    padding: 10,
    borderRadius: 20,
  },
  category: {
    marginRight: 15,
    marginTop: 15,
    fontWeight: "bold",
  },
  activeCategory: {
    borderBottomWidth: 2,
    borderBottomColor: "#1DA1F2",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  newsItem: {
    marginBottom: 15,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  meta: {
    color: "#6B7280",
    fontSize: 12,
  },
});
