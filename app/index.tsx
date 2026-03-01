import React from 'react';
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Built-in Expo icons for a professional look [cite: 8]
import { homePosts } from "../data/mockData";

export default function HomeScreen() {
  const router = useRouter();

  // This function handles how each individual post looks [cite: 19]
  const renderPost = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.postContainer} 
      onPress={() => router.push("/details")} // Fulfills Stack Navigation requirement [cite: 19]
    >
      {/* Profile Picture Placeholder */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle} />
      </View>

      <View style={styles.contentContainer}>
        {/* User Info Row */}
        <View style={styles.nameRow}>
          <Text style={styles.displayName}>{item.displayName}</Text>
          <Ionicons name="checkmark-circle" size={14} color="#1DA1F2" style={styles.verifiedIcon} />
          <Text style={styles.handleText}>{item.handle} · {item.time}</Text>
        </View>

        {/* Post Text */}
        <Text style={styles.postText}>{item.text}</Text>

        {/* Post Image: Only shows if 'image' exists in mockData.ts [cite: 19] */}
        {item.image && (
          <Image
            source={item.image} 
            style={styles.postImage}
          />
        )}

        {/* Social Metrics Row [cite: 14] */}
        <View style={styles.statsRow}>
          <View style={styles.statGroup}>
            <Ionicons name="chatbubble-outline" size={16} color="#6B7280" />
            <Text style={styles.statValue}>{item.comments}</Text>
          </View>
          <View style={styles.statGroup}>
            <Ionicons name="repeat-outline" size={16} color="#6B7280" />
            <Text style={styles.statValue}>{item.reposts}</Text>
          </View>
          <View style={styles.statGroup}>
            <Ionicons name="heart-outline" size={16} color="#6B7280" />
            <Text style={styles.statValue}>{item.likes}</Text>
          </View>
          <View style={styles.statGroup}>
            <Ionicons name="stats-chart-outline" size={16} color="#6B7280" />
            <Text style={styles.statValue}>{item.views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      {/* Dynamic Content List [cite: 19] */}
      <FlatList
        data={homePosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>For you</Text>
            <View style={styles.activeTabIndicator} />
          </View>
        }
      />

      {/* Floating Action Button (+) as seen in your X reference [cite: 14] */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EFF3F4',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  activeTabIndicator: {
    height: 4,
    width: 60,
    backgroundColor: '#1DA1F2',
    borderRadius: 2,
  },
  postContainer: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFF3F4",
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E1E8ED",
  },
  contentContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  verifiedIcon: {
    marginLeft: 2,
    marginRight: 2,
  },
  handleText: {
    color: "#6B7280",
    fontSize: 14,
  },
  postText: {
    fontSize: 15,
    lineHeight: 20,
    color: "#0F1419",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  statGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  statValue: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1DA1F2',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  }
});