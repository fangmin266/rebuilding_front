1. docker nginx 환경 띄우기
2. cors (같은 로컬에서 서버와 클라이언트 테스트)

- package.json에 proxy(backend) 설정
- front withcredentials 허용

```
      const res = await axios.post("http://localhost:3600/auth/login", login, {
        baseURL: "http://localhost:3600/auth/login",
        withCredentials: true, // 쿠키 받아오기 위한 옵션
      });
```

- back enableCors option

```
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
    // allowedHeaders: 'Content-Type, Authorization',
  });
```

3. social Login
   - backend callback api 를 redirect_uri로 설정하게 되면 backend callback api에 소셜로그인의 정보가 들어오게 되는데,
     정보가 들어오게 되면 이동원하는 페이지로 redirect해준다.
     //back
     <img width="734" alt="스크린샷 2023-05-28 오후 4 28 36" src="https://github.com/fangmin266/gitlevelup/assets/123913446/e7eef8b6-4df3-4e8a-94f8-e229e7e3ee47">
     //front
     <img width="1283" alt="스크린샷 2023-05-28 오후 4 32 07" src="https://github.com/fangmin266/gitlevelup/assets/123913446/ae93d571-6fac-499a-a827-6b7104c3dd31">

- 자주발생하는 문제
  - developers에서 uri 등의 정보 바꾸면 적용되는데 5~10분정도의 처리 시간이 걸림(이것때문에 엄청해맸다)
  - redirect url은 backend callback 주소이며 로그인 창이 안뜰 경우 현재 해당 계정이 로그인되어있나 확인해봐야함
  - google 설정은 https://console.cloud.google.com/apis/dashboard 여기서 진행
  - facebook의 경우 사업자계정 필요

4. cookie(login)
   <img width="1002" alt="스크린샷 2023-05-28 오후 4 48 41" src="https://github.com/fangmin266/gitlevelup/assets/123913446/738f6104-a8d5-4f20-92d3-4da1a708f80f">
   //back

```
    res.setHeader('Set-Cookie', 'key=value; HttpOnly; Path=/;'); //클라이언트 자동저장됨
    console.log(res.getHeader('Set-Cookie'), 'res');
    res.send({});
```

//front

```
      const res = await axios.post("http://localhost:3600/auth/login", login, {
        baseURL: "http://localhost:3600/auth/login",
        withCredentials: true, // 쿠키 받아오기 위한 옵션
      });
      console.log(res);
      // const cookiesFromHeader = res.headers["Set-Cookie"]; // undefined, 노춛되지 않고 자동저장됨
      // console.log(cookiesFromHeader, "header");

      console.log(document.cookie);
      //쿠키 저장되어있는지 확인, 굳이 다른 라이브러리 안써도됨. react-cookie 썼다가 헷갈려서 많이 헤맸음(react-cookie는 클라이언트에서 쿠키생성할때 사용하는 것 같다)
```

- 자주발생하는 문제
- authorization 401 : 미 회원가입시 발생 =>@UseGuards(LocalAuthGuard) 에서 발생하여 에러핸들링
- cors 에러 : 프론트 백엔드 도메인 확인(반드시 동일 도메인)
- cookie 들어오지 않는 경우 : 백엔드 cookie 옵션값 체크(추가하지 않을 경우 front cookie에 자동 저장 되지 않음), 도메인 일치 체크, enableCors 및 credential 체크
