import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { notifications } from "../data/mockData";

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState("All");

  const renderNotification = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      {/* The Purple Star Icon from your reference image */}
      <View style={styles.leftColumn}>
        <Ionicons name="sparkles" size={22} color="#784ED1" />
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.headerRow}>
          {/* Circular Avatar Placeholder */}
          <View style={styles.avatarCircle} />
        </View>
        
        <Text style={styles.userText}>
          <Text style={styles.userName}>{item.user}</Text> · {item.time}
        </Text>
        
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Navigation Tabs */}
      <View style={styles.tabHeader}>
        {["All", "Mentions"].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            onPress={() => setActiveTab(tab)}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button (FAB) for consistency across screens */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabHeader: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFF3F4",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#1DA1F2",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6B7280",
  },
  activeTabText: {
    color: "#0F1419",
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFF3F4",
  },
  leftColumn: {
    width: 40,
    alignItems: "center",
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
  },
  avatarCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#E1E8ED",
    marginBottom: 8,
  },
  userText: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 4,
  },
  userName: {
    fontWeight: "bold",
    color: "#0F1419",
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "#536471",
  },
  headerRow: {
    marginBottom: 8,
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
  },
});