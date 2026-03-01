import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image, // Import Image component
} from "react-native";
import { categories, todaysNews } from "../data/mockData";

export default function SearchScreen() {
  const [active, setActive] = useState("For You");

  // This is the header content (Categories + Featured Image)
  const HeaderContent = () => (
    <View>
      {/* Category Tabs */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        style={styles.categoryList}
        renderItem={({ item }) => (
          <Pressable onPress={() => setActive(item)}>
            <View style={[active === item && styles.activeTab]}>
              <Text style={[styles.category, active === item && styles.activeCategoryText]}>
                {item}
              </Text>
            </View>
          </Pressable>
        )}
      />

      {/* Featured Image Section (Galaxy S26 Ultra) */}
      <View style={styles.featuredContainer}>
        <Image 
          source={require("../assets/images/samsung_ad.jpg")} 
          style={styles.featuredImage} 
        />
        <View style={styles.featuredOverlay}>
          <Text style={styles.featuredTag}>Promoted by Samsung Canada</Text>
          <Text style={styles.featuredTitle}>Galaxy S26 Ultra</Text>
          <Text style={styles.featuredSubtitle}>Can your phone do that?</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Today's News</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchBox}>
        <TextInput placeholder="Search" style={styles.input} />
      </View>

      {/* News List with Header */}
      <FlatList
        data={todaysNews}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HeaderContent}
        showsVerticalScrollIndicator={false}
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
  },
  searchBox: {
    backgroundColor: "#EFF3F4",
    padding: 10,
    borderRadius: 25,
    margin: 14,
  },
  input: {
    paddingLeft: 10,
  },
  categoryList: {
    paddingLeft: 14,
    marginBottom: 10,
  },
  category: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "#536471",
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#1DA1F2",
  },
  activeCategoryText: {
    color: "#0F1419",
  },
  featuredContainer: {
    width: "100%",
    height: 250,
    position: 'relative',
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)', // Slight dark fade to make text readable
  },
  featuredTag: {
    color: "#fff",
    fontSize: 12,
  },
  featuredTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  featuredSubtitle: {
    color: "#fff",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 14,
  },
  newsItem: {
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  newsTitle: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
  },
  meta: {
    fontSize: 13,
    color: "#536471",
    marginTop: 5,
  },
});