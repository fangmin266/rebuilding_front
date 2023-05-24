import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { common } from "../../../common/api";
import { AppDispatch } from "../../../features/store";
import { ButtonDefault } from "./Button";
import { useLocation } from "react-router-dom";
import KakaoLogin from "react-kakao-login";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {
  FACEBOOK_CLIENT_ID,
  GOOGLE_CLIENT_ID,
  KAKAO_CLIENT_ID,
  NAVER_CLIENT_ID,
} from "../../../common/env";
const SocialLoginBtn = () => {
  const social = ["구글", "페북"];
  const dispatch = useDispatch<AppDispatch>();

  const handleKakaoLogin = async () => {
    const REDIRECT_URI = "https://localhost/auth/kakao/callback";
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const handleNaverLogin = () => {
    const REDIRIECT_URI = "https://localhost/auth/naver/callback";
    const STATE = "false";
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRIECT_URI}`;
    window.location.href = naverURL;
  };

  const handleGoogleLogin = () => {
    const REDIRECT_URI = "https://localhost/auth/google/callback";
    const SCOPE = "profile email";
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  const handleFacebookLogin = () => {
    const REDIRECT_URI = "https://localhost/auth/facebook/callback";
    const SCOPE = "email";
    const FACEBOOK_AUTH_URL = `https://www.facebook.com/v13.0/dialog/oauth?response_type=code&client_id=${FACEBOOK_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

    window.location.href = FACEBOOK_AUTH_URL;
  };
  return (
    <>
      <div className="flex flex-col gap-y-3 pt-3 text-white font-bold">
        <button
          className="bg-[rgb(246,232,38)] p-3 flex justify-center items-center gap-x-3"
          onClick={handleKakaoLogin}
        >
          <img src="/images/kakao.jpg" className="w-6 inline-block" />
          <span>카카오로그인</span>
        </button>
        <button
          className="bg-[rgb(85,196,48)] p-3 flex justify-center items-center gap-x-3 "
          onClick={handleNaverLogin}
        >
          <img src="/images/naver.png" className="w-6 inline-block" />
          <span>네이버로그인</span>
        </button>
      </div>
      <div className="w-full flex justify-center gap-x-3 pt-12">
        {social?.map((el) => (
          <span
            className="block border rounded-full p-3"
            key={el}
            onClick={() => {
              if (el === "구글") {
                handleGoogleLogin();
              } else {
                handleFacebookLogin();
              }
            }}
          >
            {el}
          </span>
        ))}
      </div>
    </>
  );
};

export default SocialLoginBtn;
