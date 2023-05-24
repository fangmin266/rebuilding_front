import React, { useState, useEffect } from "react";
import { InputDefault } from "./Input";
import { ButtonDefault } from "./Button";
import { LabelLayoutInput } from "./LabelLayout";
import { sendEmail } from "../../../features/admin/loginsSignupSlice";
import { AppDispatch } from "../../../features/store";
import { useDispatch } from "react-redux";

interface TimerProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const TimerComponent: React.FC<TimerProps> = ({ setEmail, email }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [duration, setDuration] = useState<number>(180); // 초기 타이머 지속 시간 (초)
  const [remainingTime, setRemainingTime] = useState<number>(duration); // 남은 시간 (초)
  const [isRunning, setIsRunning] = useState<boolean>(false); // 타이머 실행 여부

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onClickOpenAuthenticate = async () => {
    const res = await dispatch(sendEmail({ email: email })).unwrap();
    if (res.statusCode === 200) {
      handleTimerStart();
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
        <div className="flex gap-x-2">
          <InputDefault
            InType="email"
            Inplaceholder="이메일 계정"
            InClassName="w-2/3"
            InonChangeFunction={onChangeEmail}
          />
          <ButtonDefault
            title="인증하기"
            bgcolor={"bg-primary_100"}
            txtcolor="text-white"
            btnWidth="w-1/3"
            onClickFunction={onClickOpenAuthenticate}
          />
        </div>
      </LabelLayoutInput>
      <div className=" flex gap-x-2 pt-6">
        <InputDefault
          InType="email"
          Inplaceholder={formatTime(remainingTime)}
          InClassName="w-2/3"
          // InonChangeFunction={onChangeNumber}
        />
        <ButtonDefault
          title="확인"
          bgcolor="bg-primary_100"
          txtcolor="text-white"
          btnWidth="w-1/3"
          // onClickFunction={onClickAuthenticateOK}
        />
      </div>
      {isRunning && <button onClick={handleTimerReset}>타이머 재설정</button>}
    </div>
  );
};

export default TimerComponent;
