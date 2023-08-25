import * as React from 'react';

function ChatItem(props) {
  console.log(props);
  const { item } = props;
  return (
    <div className="chatItem">
      <div className="chatLeft">
        <div
          className="chatPicture"
          style={{ backgroundImage: `url(${item.userImage})` }}
        ></div>
        <div className="chatInfo">
          <p>{item.name}</p>
          <p>{item.lastMessage}</p>
        </div>
      </div>
      <div className="chatInfoOther">
        <p>{item.time}</p>
        {
          item.read && item.read.status == 0 ? 
          <p>
            <span className="noRead">{item.read.num}</span>
          </p> : null
        }
      </div>
    </div>
  );
}

export default ChatItem;
