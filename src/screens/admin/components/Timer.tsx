import React, { useState, useEffect } from "react";
import { InputDefault } from "./Input";
import { ButtonDefault } from "./Button";
import { LabelLayoutInput } from "./LabelLayout";
import { sendEmail } from "../../../features/admin/loginsSignupSlice";
import { AppDispatch } from "../../../features/store";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import toastCommonProps from "../../../common/toast";
import { validateEmail } from "../../../common/function/reg";
interface TimerProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setRandomNum: React.Dispatch<React.SetStateAction<string>>;
  randomNum: string;
  setSignupInput: React.Dispatch<React.SetStateAction<any>>;
  signupInput: {
    username: string;
    password: string;
    passwordConfirm: string;
    email: string;
    isPersonalInfo: boolean;
  };
}

const TimerComponent: React.FC<TimerProps> = ({
  setEmail,
  email,
  setRandomNum,
  randomNum,
  setSignupInput,
  signupInput,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const duration = 180; // 초기 타이머 지속 시간 (초)
  const [remainingTime, setRemainingTime] = useState<number>(duration); // 남은 시간 (초)
  const [isRunning, setIsRunning] = useState<boolean>(false); // 타이머 실행 여부
  const [resRandom, setResRandom] = useState<string>("");
  const [showTimer, setShowTimer] = useState<boolean>(true);
  const validatemail = validateEmail(email);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRandomNum(e.target.value);

  const onClickOpenAuthenticate = async () => {
    if (validatemail) {
      handleTimerStart();
      const res = await dispatch(sendEmail({ email: email })).unwrap();
      try {
        if (res.statusCode === 200) {
          const rand = res.data.data.random;
          setResRandom(rand);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast(
        <p className="whitespace-pre-line">이메일주소를 다시 작성해주세요.</p>,
        toastCommonProps("top-right", "toast_alert", 1000)
      );
    }
  };
  const onClickAuthenticateOK = async () => {
    console.log(resRandom, randomNum);
    if (resRandom === randomNum) {
      setShowTimer(false);
      setSignupInput({ ...signupInput, email: email });
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // 타이머 실행
    if (isRunning) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval!);
    }

    // 타이머 종료 조건
    if (remainingTime === 0) {
      clearInterval(interval!);
      setIsRunning(false);
    }

    return () => {
      clearInterval(interval!);
    };
  }, [isRunning, remainingTime]);

  const handleTimerStart = () => {
    setIsRunning(true);
  };

  const handleTimerReset = () => {
    setRemainingTime(duration);
  };

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <LabelLayoutInput title="이메일">
        <div className="flex gap-x-2 ">
          <InputDefault
            InType="email"
            Inplaceholder="이메일 계정"
            InClassName={" w-2/3 " + (!validatemail ? " border-red-500 " : "")}
            InonChangeFunction={onChangeEmail}
          />
          <ButtonDefault
            title="인증하기"
            bgcolor={isRunning ? "bg-unactive_100" : "bg-primary_100"}
            txtcolor="text-white"
            btnWidth="w-1/3"
            onClickFunction={onClickOpenAuthenticate}
          />
        </div>
      </LabelLayoutInput>
      {showTimer ? (
        <>
          <div className=" flex gap-x-2 pt-6">
            <InputDefault
              InType="email"
              Inplaceholder={formatTime(remainingTime)}
              InClassName="w-2/3"
              InDisabled={isRunning ? false : true}
              InonChangeFunction={onChangeNumber}
            />
            <ButtonDefault
              title="확인"
              bgcolor={isRunning ? "bg-primary_100" : "bg-unactive_100 "}
              txtcolor="text-white"
              btnWidth="w-1/3"
              onClickFunction={onClickAuthenticateOK}
            />
          </div>
          {isRunning && (
            <button onClick={handleTimerReset}>타이머 재설정</button>
          )}
        </>
      ) : !showTimer && resRandom === randomNum ? (
        <p className="text-primary_100 pt-2">이메일 인증에 성공했습니다.</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimerComponent;
