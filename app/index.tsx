import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Feed</Text>
      <Text>Member B will build the X-style posts here.</Text>
      
      {/* This button demonstrates Stack Navigation */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('../details')}
      >
        <Text style={{ color: 'white' }}>View Post Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  button: { backgroundColor: '#1DA1F2', padding: 15, borderRadius: 25, marginTop: 20 }
});