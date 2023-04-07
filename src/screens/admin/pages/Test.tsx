import React from 'react';
import axios from 'axios';

function KakaoLoginButton() {
  const handleKakaoLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3600/auth/kakao');
      const { redirectUrl } = response.data;
      window.location.replace(redirectUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleKakaoLogin}>카카오 로그인</button>;
}

function KakaoLoginCallback() {
  const handleKakaoLoginCallback = async () => {
    try {
      const response = await axios.get('http://localhost:3600/auth/kakao/callback');
      const { user } = response.data;
      // 로그인 성공 시 처리할 코드를 작성합니다.
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    handleKakaoLoginCallback();
  }, []);

  return <div>카카오 로그인 중입니다...</div>;
}

export default function Test() {


  return (

        <>
          <KakaoLoginButton />
          <KakaoLoginCallback />
        </>

  );
}