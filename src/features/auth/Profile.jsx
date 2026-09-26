import React from "react";

import { useAppSelector } from "../../app/hooks";

function Profile() {

  const { user, token, isAuthenticated } = useAppSelector(

    (state) => state.auth

  );

  if (!isAuthenticated) {

    return <h2>Please Login</h2>;

  }

  return (

    <div>

      <h2>{user.name}</h2>

      <p>{user.email}</p>

      <p>{token}</p>

    </div>

  );

}

export default Profile;