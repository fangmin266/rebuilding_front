import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LoginState,
  emailLogin,
  emailSignup,
} from "../../../features/admin/loginsSignupSlice";
import { AppDispatch } from "../../../features/store";
import { ButtonDefault } from "../components/Button";
import { Header2 } from "../components/Header";
import { Head2 } from "../components/HeadTitle";
import { InputDefault } from "../components/Input";
import SocialLoginBtn from "../components/SocialLoginBtn";
import Cookies from "universal-cookie";
import axios from "axios";
import toastCommonProps from "../../../common/toast";
import { toast } from "react-toastify";

// import { useCookies } from "react-cookie";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // const [cookies] = useCookies(["Set-Cookie"]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  //useDispatch만 사용할 경우 이슈발생 => useDispatch 훅 AppDispatch는 dispatch, thunkdispatch 포함
  const onSubmitLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await dispatch(emailLogin(login)).unwrap();

      const resdata = res.data;
      if (resdata.statusCode === 200) {
        toast(
          <p className="whitespace-pre-line">로그인 성공</p>,
          toastCommonProps("top-right", "toast_alert", 1000)
        );
        // const cookies = res.headers["Authorization"];
        // const setcookie = res.headers["Set-Cookie"];
        // console.log(cookies);
        // console.log(cookies); // Set-Cookie 값 출력
        // console.log(cookies, "cookies");
        const accessTokenCookie = new Cookies();
        console.log(accessTokenCookie, "cookie");
      }
    } catch (error) {
      toast(
        <p className="whitespace-pre-line">로그인 실패</p>,
        toastCommonProps("top-right", "toast_alert", 1000)
      );
    }
  };

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <>
      <Header2 />
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
          const accessTokenCookie = new Cookies();
          // .get("Authorization");
          // 인증 토큰 추출
          // const authToken = accessTokenCookie.match(/Authentiation=([^;]+)/)[1];

          console.log(accessTokenCookie);
          // 만료 시간 추출
          // const maxAge = accessTokenCookie.match(/Max-Age=(\d+)/)[1];
          // await axios
          //   .post("https://localhost/testapi", {
          //     frontaccessToken: authToken,
          //   })
          //   .then((res) => {
          //     console.log("res");
          //   });
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
              InClassName="w-full"
              Inplaceholder="이메일 입력"
              InonChangeFunction={onChangeLogin}
              InName="email"
              InValue={login.email}
            />
            <div className="relative w-full">
              <InputDefault
                InType="password"
                InClassName="w-full"
                Inplaceholder="비밀번호 입력"
                InonChangeFunction={onChangeLogin}
                InName="password"
                InValue={login.password}
              />
            </div>

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
