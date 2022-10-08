import React from "react";

import "./Repository.css";

const Repository = ({ repo, user }) => (
  <div className="repo">
    <div className="top-row">
      <div className="title">
        <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span className="repo-name">{repo.name}</span>
        </a>
      </div>
      <p className="visibility">{repo.visibility}</p>
    </div>
    <span className="description">{repo.description}</span>
    <div className="bottom-row">
      <div className="subitem">
        <i className="fa fa-code pr-1" />
        <span>{repo.language}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-star pr-1" />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-code-fork pr-1" />
        <span>{repo.forks}</span>
      </div>
    </div>
  </div>
);

export default Repository;
