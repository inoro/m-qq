import * as React from 'react';
import Header from './Header'
import ChatList from './ChatList'
import './style.css';

export default function App() {
  return (
    <div className="container">
      {/* 顶部 */}
      <Header/>
      {/* 聊天列表 */}
      <ChatList/>
    </div>
  );
}
