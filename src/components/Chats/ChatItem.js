import * as React from 'react';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

export default function ChatItem ({ message }) {
  return (
    <View style={styles.chatItem}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: message.image }} style={styles.avatar}/>
      </View>
      <View style={styles.messageInfo}>
        <View style={styles.messageLeftColumn}>
          <Text style={styles.messageTitle}>{message.title}</Text>
          <View style={styles.lastMessageContainer}>
            <Ionicons name="ios-checkmark" size={24} color="#7e7f81" />
            <Text style={styles.lastMessage}>{message.message}</Text>
          </View>
        </View>
        <View style={styles.messageRightColumn}>
          <Text style={styles.date}>{moment(message.date).format('DD-MM-YYYY')}</Text>
          <Ionicons name="ios-arrow-forward" style={styles.enterMessageIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flex: 1, 
    flexDirection: 'row', 
    width: Dimensions.get('window').width, 
    paddingHorizontal: 10, 
    paddingBottom: 20
  },
  avatarContainer: {
    flex: 3, 
    justifyContent: 'center'
  },
  avatar: {
    height: 70, 
    width: 70, 
    borderRadius: 35
  },
  messageInfo: {
    flex: 10, 
    borderBottomWidth: 1, 
    borderColor: '#e3e3e3', 
    flexDirection: 'row', 
    marginTop: 10
  },
  messageLeftColumn: {
    flex: 8
  },
  messageRightColumn: {
    flex: 3, 
    alignItems: 'flex-end'
  },
  messageTitle: {
    fontWeight: '600'
  },
  lastMessageContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  lastMessage: {
    marginLeft: 3, 
    color: '#7e7f81', 
    top: -1
  },
  date: {
    color: "#7e7f81"
  },
  enterMessageIcon: {
    marginTop: 5, 
    marginRight: 5,
    color: '#7e7f81',
    fontSize: 14
  }
})
