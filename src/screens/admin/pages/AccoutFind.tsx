import React, { useState } from "react";
import { ButtonDefault } from "../components/Button";
import { Header2 } from "../components/Header";
import { Head2 } from "../components/HeadTitle";
import { InputDefault } from "../components/Input";
import { validateEmail } from "../../../common/function/reg";
import { AppDispatch } from "../../../features/store";
import { useDispatch } from "react-redux";
import {
  EmailState,
  findEmail,
  sendPasswordResetLink,
} from "../../../features/admin/loginsSignupSlice";
import toastCommonProps from "../../../common/toast";
import { toast } from "react-toastify";

const AccoutFind = () => {
  const tabs = ["아이디 찾기", "비밀번호 찾기"];
  const [onTab, setOnTab] = useState("아이디 찾기");
  const [emailInput, setEmailInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const onSubmitFind = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(emailInput);
    e.preventDefault();
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const findMyEmail = async () => {
    const emailState: EmailState = {
      email: emailInput,
    };
    try {
      const res = await dispatch(findEmail(emailState)).unwrap();
      if (res.data.statusCode === 200) {
        toast(
          <p className="whitespace-pre-line">가입된 이메일입니다.</p>,
          toastCommonProps("top-right", "toast_alert", 1000)
        );
      }
    } catch (error) {
      toast(
        <p className="whitespace-pre-line">가입되지 않은 이메일입니다.</p>,
        toastCommonProps("top-right", "toast_alert", 1000)
      );
    }
  };

  // const sendNewPassLink;

  return (
    <>
      <Header2 />
      <div className="w-full bg-gray-100 h-screen">
        <div className="w-full bg-white">
          <div className=" w-[960px] mx-auto">
            <Head2 title={"아이디·비밀번호 찾기"} />
            <ul className="pt-10 flex gap-x-6 ">
              {tabs?.map((el) => (
                <li
                  className={
                    "py-3 cursor-pointer " +
                    (el === onTab
                      ? " text-primary_100 border-b border-primary_100 "
                      : " text-gray-400 ")
                  }
                  onClick={() => {
                    setOnTab(el);
                    setEmailInput("");
                  }}
                  key={el}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form className="w-full border-t  py-4" onSubmit={onSubmitFind}>
          <div className="w-[396px] mx-auto">
            <p className="w-3/5 leading-5 text-sm text-gray-500 pb-8">
              {onTab === "아이디 찾기"
                ? "와디즈는 이메일을 아이디로 사용합니다.소유하고 계신 계정을 입력해보세요.가입여부를 확인해드립니다."
                : "가입하셨던 이메일 계정을 입력하시면, 비밀번호를 새로 만들 수 있는 링크를 이메일로 발송해드립니다."}
            </p>
            <InputDefault
              InType="email"
              Inplaceholder="이메일 계정"
              InonChangeFunction={onChangeEmail}
              InName="email"
              InValue={emailInput}
            />
            <div className="h-6"></div>
            {onTab === "아이디 찾기" ? (
              <ButtonDefault
                title="확인"
                InDisabled={
                  emailInput !== "" && validateEmail(emailInput) ? false : true
                }
                bgcolor={
                  emailInput !== "" && validateEmail(emailInput)
                    ? "bg-primary_100"
                    : "bg-unactive_100"
                }
                txtcolor="text-white"
                onClickFunction={findMyEmail}
              />
            ) : (
              <ButtonDefault
                title="링크 발송"
                InDisabled={
                  emailInput !== "" && validateEmail(emailInput) ? false : true
                }
                bgcolor={
                  emailInput !== "" && validateEmail(emailInput)
                    ? "bg-primary_100"
                    : "bg-unactive_100"
                }
                txtcolor="text-white"
                onClickFunction={async () => {
                  const emailState: EmailState = {
                    email: emailInput,
                  };
                  try {
                    const res = await dispatch(
                      sendPasswordResetLink(emailState)
                    ).unwrap();
                    if (res.data.statusCode === 200) {
                      toast(
                        <p className="whitespace-pre-line">
                          이메일로 링크 발송되었습니다.
                        </p>,
                        toastCommonProps("top-right", "toast_alert", 1000)
                      );
                    }
                  } catch (error) {
                    toast(
                      <p className="whitespace-pre-line">
                        가입되지 않은 이메일니다.
                      </p>,
                      toastCommonProps("top-right", "toast_alert", 1000)
                    );
                  }
                }}
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AccoutFind;
