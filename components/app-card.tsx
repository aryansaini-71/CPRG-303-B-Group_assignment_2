import React, { useState } from "react";
import { Post } from "../data/mock";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getTheme } from "../styles/colors";

type Props = {
  post: Post;
  isDark: boolean;
  onPress?: () => void;
};

function fmtCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}

export function AppCard({ post, isDark, onPress }: Props) {
  const theme = getTheme(isDark);
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.92}
      style={[styles.card, { borderBottomColor: theme.border }]}
    >
      <View style={styles.row}>
        {/* Avatar */}
        <View style={[styles.avatar, { backgroundColor: post.avatarColor }]}>
          <Text style={styles.avatarText}>{post.avatarInitials}</Text>
        </View>

        <View style={styles.body}>
          {/* Header Row */}
          <View style={styles.metaRow}>
            <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
              {post.name}
            </Text>
            <Text style={[styles.handle, { color: theme.subtext }]} numberOfLines={1}>
              {post.handle}
            </Text>
            <Text style={[styles.dot, { color: theme.subtext }]}> · </Text>
            <Text style={[styles.time, { color: theme.subtext }]}>{post.time}</Text>
          </View>

          {/* Post Text */}
          <Text style={[styles.postText, { color: theme.text }]}>{post.body}</Text>

          {/* Action Row */}
          <View style={styles.actions}>
            <ActionBtn
              icon={<Ionicons name="chatbubble-outline" size={17} color={theme.actionIcon} />}
              count={post.comments}
              activeColor="#1d9bf0"
              active={false}
            />
            <ActionBtn
              icon={
                <Ionicons
                  name="repeat-outline"
                  size={19}
                  color={retweeted ? "#00ba7c" : theme.actionIcon}
                />
              }
              count={post.retweets + (retweeted ? 1 : 0)}
              activeColor="#00ba7c"
              active={retweeted}
              onPress={() => setRetweeted(r => !r)}
            />
            <ActionBtn
              icon={
                <Ionicons
                  name={liked ? "heart" : "heart-outline"}
                  size={17}
                  color={liked ? "#e0245e" : theme.actionIcon}
                />
              }
              count={post.likes + (liked ? 1 : 0)}
              activeColor="#e0245e"
              active={liked}
              onPress={() => setLiked(l => !l)}
            />
            <ActionBtn
              icon={<Ionicons name="bar-chart-outline" size={17} color={theme.actionIcon} />}
              count={post.views}
              activeColor="#1d9bf0"
              active={false}
            />
            <TouchableOpacity style={styles.actionItem} onPress={() => {}}>
              <Ionicons name="share-outline" size={17} color={theme.actionIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ActionBtn({
  icon,
  count,
  active,
  activeColor,
  onPress,
}: {
  icon: React.ReactNode;
  count?: number;
  active: boolean;
  activeColor: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.actionItem} onPress={onPress} activeOpacity={0.7}>
      {icon}
      {count !== undefined && (
        <Text style={[styles.actionCount, active && { color: activeColor }]}>
          {fmtCount(count)}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: { flexDirection: "row", gap: 10 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  avatarText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  body: { flex: 1 },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    marginBottom: 3,
  },
  name: { fontWeight: "700", fontSize: 15 },
  badge: { marginLeft: 3 },
  handle: { fontSize: 14, marginLeft: 3, flexShrink: 1 },
  dot: { fontSize: 14 },
  time: { fontSize: 14 },
  postText: { fontSize: 15, lineHeight: 22 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    maxWidth: 340,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  actionCount: { fontSize: 13, color: "#657786" },
});