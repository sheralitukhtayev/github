import React, { useState, useEffect } from "react";
import { getUserData, getUserRepositories } from "../providers/githubProvider";

import Navbar from "../components/NavBar";
import UserInfos from "../components/UserInfo";
import Repositories from "../components/Repositories";
import Tabs from "../components/Tabs";
import "./UserPage.css";

import Loading from "../components/Loading";

function UserPage({ match }) {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const userNameParams = match.params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepositories();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userNameParams);
    setRepositories(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfos className={"userinfo"} user={user} />
            <div className="container-right">
              <Tabs className={"tabs"} repos={repositories} user={user} />
              <Repositories repos={repositories} user={user} />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UserPage;
