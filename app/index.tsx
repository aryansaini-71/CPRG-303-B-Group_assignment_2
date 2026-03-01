import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { homePosts } from "../data/mockData";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <FlatList
        data={homePosts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>For you</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/details")}
            >
              <Text style={styles.buttonText}>View Post Details</Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.name}>
              {item.displayName}{" "}
              <Text style={styles.meta}>
                {item.handle} · {item.time}
              </Text>
            </Text>

            <Text style={styles.body}>{item.text}</Text>

            <View style={styles.metrics}>
              <Text style={styles.metric}>💬 {item.comments}</Text>
              <Text style={styles.metric}>🔁 {item.reposts}</Text>
              <Text style={styles.metric}>❤️ {item.likes}</Text>
              <Text style={styles.metric}>📈 {item.views}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#1DA1F2",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  post: {
    padding: 14,
  },
  name: {
    fontWeight: "bold",
  },
  meta: {
    color: "#6B7280",
  },
  body: {
    marginTop: 4,
  },
  metrics: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
  },
  metric: {
    fontSize: 12,
    color: "#6B7280",
  },
});
