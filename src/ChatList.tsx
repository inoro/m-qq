import * as React from 'react';
import ChatItem from './ChatItem';
import chat from './data/chat.json';

function ChatList() {
  return (
    <div className="chatList">
      {chat.map((value, index) => (
        <ChatItem key={index} item={...value} />
      ))}
    </div>
  );
}

export default ChatList;
