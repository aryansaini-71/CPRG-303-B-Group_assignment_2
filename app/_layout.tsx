import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#1DA1F2', // X (Twitter) Blue color
      headerShown: true,               // Shows the top title bar
    }}>
      {/* 1. Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />

      {/* 2. Notifications Tab */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
        }}
      />

      {/* 3. This screen is hidden from the bottom bar, but exists in the app */}
      <Tabs.Screen
        name="details"
        options={{
          href: null, // This hides it from the bottom tab bar
          title: 'Post Details',
        }}
      />
    </Tabs>
  );
}