import React from "react";

import "./UserInfo.css";

const UserInfo = ({ user }) => (
  <div className="user-infos">
    <img
      src={user.avatar_url}
      className="user-avatar avatar"
      width="130"
      height="130"
      alt="User"
    />
    <div className="user">
      <h5 className="name">{user.name}</h5>
      <p className="login">{user.login}</p>
      <h4 className="user-bio">{user.bio}</h4>
      <button>Edit profile</button>
      <div className="infos">
        <div className="followers">
          {user.followers && (
            <div className="info ">
              <i className="fa fa-group" />
              <span>{user.followers} followers · </span>
            </div>
          )}
          {user.following && (
            <div className="info">
              <span>{user.following} following </span>
            </div>
          )}
        </div>
        {user.location && (
          <div className="info">
            <i className="fa fa-map-marker pr-1" />
            <span>{user.location}</span>
          </div>
        )}
        {user.blog && (
          <div className="info">
            <i className="fa fa-chain pr-1" />
            <span>{user.blog}</span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <i className="fa fa-envelope pr-1" />
            <span>{user.email}</span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <i className="fa fa-twitter pr-1" />
            <span>{user.twitter_username}</span>
            <br />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(UserInfo);
