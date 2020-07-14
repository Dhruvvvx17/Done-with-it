import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Hey! Is this item still available?",
    description:
      "Was looking for a guitar in the same price range that you have offered. Wanted to know if the item is still available and what is the lowest you would go on it.",
    image: require("../assets/User.jpg"),
  },
  {
    id: 2,
    title: "Can you offer some discount?",
    description:
      "I am willing to pay 5000. If it is possible please let me know.",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  // state variables
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete message from messages array
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message tapped", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Hey! Is this item still available?",
              description:
                "Was looking for a guitar in the same price range that you have offered. Wanted to know if the item is still available and what is the lowest you would go on it.",
              image: require("../assets/User.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
