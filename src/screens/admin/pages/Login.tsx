import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailLogin,
  emailSignup
} from "../../../features/admin/loginsSignupSlice";
import { AppDispatch } from "../../../features/store";
import { ButtonDefault } from "../components/Button";
import { Header2 } from "../components/Header";
import { Head2 } from "../components/HeadTitle";
import fetch, { Headers } from "node-fetch";
import { InputDefault } from "../components/Input";
import SocialLoginBtn from "../components/SocialLoginBtn";
import toastCommonProps from "../../../common/toast";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
import { common } from "../../../common/api";
import Cookies from "universal-cookie";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmitLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3600/" + "auth/login", login, {
        withCredentials: true
      })
      .then((response) => {
        console.log(response);
        // console.log(document.cookie); //httpOnly속성때문에 자바스크립트에서 읽을수없음
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log(e.target.value);
    setLogin({ ...login, [name]: value });
  };

  return (
    <>
      <Header2 />0
      <div
        onClick={() => {
          console.log(document.cookie);
          document.cookie = "";
        }}
      >
        쿠키삭제
      </div>
      <div
        onClick={async () => {
          const accessTokenCookie = new Cookies().get("accessTokenCookie");
          // 인증 토큰 추출
          const authToken = accessTokenCookie.match(/Authentiation=([^;]+)/)[1];

          // 만료 시간 추출
          const maxAge = accessTokenCookie.match(/Max-Age=(\d+)/)[1];
          await axios
            .post("http://localhost:3600/testapi", {
              frontaccessToken: authToken
            })
            .then((res) => {
              console.log("res");
            });
        }}
      >
        누르면 쿠키확인
      </div>
      <div className="w-full mx-auto maxW">
        <form onSubmit={onSubmitLogin}>
          <Head2 title="로그인" />
          <div className="flex items-end gap-y-3 flex-col py-6">
            <InputDefault
              InType="email"
              Inplaceholder="이메일 입력"
              InonChangeFunction={onChangeLogin}
              InName="email"
              InValue={login.email}
            />
            <InputDefault
              InType="password"
              Inplaceholder="비밀번호 입력"
              InonChangeFunction={onChangeLogin}
              InName="password"
              InValue={login.password}
            />
            <span
              className="text-gray-600 text-xs tracking-wide cursor-pointer"
              onClick={() => navigate("/accountfind")}
            >
              로그인 정보를 잊으셨나요?
            </span>
          </div>
          <ButtonDefault
            title="로그인"
            bgcolor="bg-[#1ecfd9]"
            txtcolor="text-white"
          />
        </form>
        <SocialLoginBtn />
        <div className="text-sm w-full flex justify-center p-8">
          아직 와디즈 계정이 없나요?{" "}
          <a
            className="cursor-pointer inline-block pl-2 text-primary_100 underline"
            href="/signup"
          >
            회원가입
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
