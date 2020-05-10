import React, { useState, useEffect, useCallback } from 'react';
import { Dimensions, View, Text, SafeAreaView, TextInput, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatItem from '~/components/Chats/ChatItem';
import Proxy from '~/proxies/Proxy';

export default function Chats() {
  const [value, onChangeText] = useState('');
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMessages();
  }, [refreshing]);

  const fetchMessages = async () => {
    const messages = await new Proxy('chats').getData();
    setMessages(messages);
    setRefreshing(false);
  };

  return (
    <View style={styles.chats}>
      <SafeAreaView style={styles.fullFlex}>
        <View style={styles.topBar}>
          <Text style={styles.editText}>Edit</Text>
          <Ionicons name="ios-create" style={styles.newMessageIcon} />
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Chats</Text>
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="ios-search" style={styles.inputIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={styles.messageOperations}>
          <Text style={styles.textBlue}>Broadcast Lists</Text>
          <Text style={styles.textBlue}>New Group</Text>
        </View>
        <View style={styles.fullFlex}>
          <ScrollView
            contentContainerStyle={styles.messagesContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            { messages && messages.map(message => (
               <ChatItem key={message.id} message={message} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  chats: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  fullFlex: {
    flex: 1
  },
  topBar: {
    width: Dimensions.get('window').width, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20, 
    alignItems: 'center'
  },
  editText: {
    color: '#147EFB', 
    fontSize: 18
  },
  newMessageIcon: {
    fontSize: 24, 
    color: '#147EFB'
  },
  headerWrapper: {
    width: Dimensions.get('window').width, 
    flexDirection: 'row', 
    paddingLeft: 20, 
    alignItems: 'center'
  },
  header: {
    fontSize: 36, 
    fontWeight: 'bold'
  },
  searchContainer: {
    width: Dimensions.get('window').width, 
    flexDirection: 'row', 
    paddingLeft: 20, 
    paddingRight: 20, 
    alignItems: 'center'
  },
  inputIcon: {
    fontSize: 20, 
    color: '#7e7f81', position: 'absolute', 
    left: 30, 
    top: 20, 
    zIndex: 1
  },
  searchInput: {
    backgroundColor: '#dedfe1', 
    width: '100%', 
    height: 40, 
    paddingLeft: 30, 
    borderRadius: 10, 
    marginTop: 10, 
    color: '#7e7f81'
  },
  messageOperations: {
    width: Dimensions.get('window').width, 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderColor: 'grey', 
    borderWidth: .3, 
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    marginTop: 20
  },
  textBlue: {
    color: '#147EFB'
  },
  messagesContainer: {
    flex: 1, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});