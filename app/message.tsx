import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput, 
  TouchableOpacity 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";  
import { chatList } from "../data/mockData";

export default function MessagesScreen() {
  const renderChatItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatarCircle} />
      <View style={styles.messageContent}>
        <View style={styles.headerRow}>
          <Text style={styles.userName} numberOfLines={1}>
            {item.user} <Text style={styles.handleText}>{item.handle}</Text>
          </Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput 
            placeholder="Search Direct Messages" 
            style={styles.searchInput} 
            placeholderTextColor="#6B7280"
          />
        </View>
      </View>

      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={styles.listPadding}
      />


      <TouchableOpacity 
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={() => console.log("New Message Pressed")}
      >
        <Ionicons name="mail-outline" size={28} color="white" />
        <View style={styles.plusOverlay}>
          <Ionicons name="add" size={14} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFF3F4",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF3F4",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  chatItem: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  avatarCircle: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "#E1E8ED",
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  handleText: {
    fontWeight: "400",
    color: "#6B7280",
  },
  timeText: {
    color: "#6B7280",
    fontSize: 14,
  },
  lastMessage: {
    color: "#536471",
    fontSize: 15,
    marginTop: 2,
  },
  listPadding: {
    paddingBottom: 100,
  },

  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#1DA1F2', 
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 8,
  },
  plusOverlay: {
    position: 'absolute',
    top: 15,
    right: 12,
  }
});