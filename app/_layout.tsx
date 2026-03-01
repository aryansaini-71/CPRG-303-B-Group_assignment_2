import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppLayout() {
  const [notifCount] = useState(20);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1DA1F2", 
        tabBarInactiveTintColor: "#6B7280",
        tabBarShowLabel: false,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#EFF3F4",
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "search" : "search-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (

            <Ionicons name={focused ? "flash" : "flash-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <BellWithBadge color={color} count={notifCount} focused={focused} />
          ),
        }}
      />


      <Tabs.Screen
        name="message" 
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "mail" : "mail-outline"} size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          href: null,
          title: "Post Details",
        }}
      />
    </Tabs>
  );
}

function BellWithBadge({ color, count, focused }: { color: string; count: number; focused: boolean }) {
  return (
    <View style={{ width: 28, height: 28 }}>
      <Ionicons name={focused ? "notifications" : "notifications-outline"} size={26} color={color} />
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#1DA1F2",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#fff", 
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },
});