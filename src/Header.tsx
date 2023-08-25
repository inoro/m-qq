import * as React from 'react';

function Header() {
  return (
    <div className="header">
      {/* 顶部用户信息 */}
      <div className="userInfo">
        <div className="userInfoLeft">
          <div
            className="userInfoPicture"
            style={{
              backgroundImage: `url(https://img.zcool.cn/community/03176d35c2b1e42a8012029ac8ac7fd.jpg)`,
            }}
          ></div>
          <div className="username">
            <span>inoro</span>
            <span>
              <i></i>隐身中
            </span>
          </div>
        </div>
      </div>
      {/* 搜索 */}
      <div className="search">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
  );
}

export default Header;
