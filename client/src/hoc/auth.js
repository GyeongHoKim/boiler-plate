import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option: null(아무나), true(로그인한 유저만), false(로그인 안된 유저만)
  function AuthenticationChck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // did not login
        if (!response.payload.isAuth) {
          if (option) props.history.push("/login");
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (!option) props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent {...props} />;
  }

  return AuthenticationChck;
}
