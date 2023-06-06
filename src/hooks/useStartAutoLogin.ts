import { useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
  autoLogin,
  loginInfo,
  setLoginReady,
} from "../features/admin/loginsSignupSlice";
import { getUserInfo } from "../features/admin/userSlice";
import { AppDispatch } from "../features/store";
import { useLocation } from "react-router-dom";

const useStartAutoLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const path = useLocation().pathname;
  const [cookies, setCookie, removeCookie] = useCookies([
    "Refresh",
    "Authentication",
  ]);

  const startAutoLogin = useCallback(async () => {
    const param = {
      refreshToken: cookies["Refresh"],
      accessToken: cookies["Authentication"],
    };
    try {
      const res = await dispatch(autoLogin(param)).unwrap();
      if (res.status === 200) {
        dispatch(setLoginReady(true));
        const user = await dispatch(
          getUserInfo({
            userId: res.data.user.id,
            accessToken: param.accessToken,
            refreshToken: param.refreshToken,
          })
        ).unwrap();
        if (user.statusCode === 200) {
          dispatch(loginInfo(user.data));
        }
        console.log(user.data, "user");
      } else {
        console.log(res.data);
      }
    } catch (error) {
      dispatch(setLoginReady(false));
      removeCookie("Authentication");
      removeCookie("Refresh");
    }
  }, [cookies, dispatch, removeCookie]);

  useEffect(() => {
    startAutoLogin();
  }, [startAutoLogin]);

  return startAutoLogin;
};

export default useStartAutoLogin;
