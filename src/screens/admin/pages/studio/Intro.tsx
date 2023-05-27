import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../../components/Button";
import { StudioHeader } from "../../components/Header";
import { Head4_4xl } from "../../components/HeadTitle";
import { IntroLoadingBar } from "../../components/LoadingBar";
import { ProjectIntroSteps } from "../../staticLists/ProjectIntro";
import { AsideHead } from "./AsideHead";
const Intro = () => {
  const navigate = useNavigate();

  const sayHello = [
    "프로젝트 개설을 축하드려요.",
    "서포터님들께 제품,서비스,콘텐츠를 드리며 잊지 못할 경험을 선물해 보세요.",
    "프로젝트가 성공할 수 있도록 와디즈가 함께 할께요",
    "그럼 출발해 볼까요?",
  ];
  const [introActive, setIntroActive] = useState(0);
  const handleClick = () => {
    setIntroActive(1);
  };

  const Intro0 = () => {
    return (
      <>
        <Head4_4xl title={"mj 님, 반갑습니다!"} />
        <ul className="flex flex-col gap-y-1 pt-6">
          {sayHello?.map((el, idx) => (
            <li
              key={el}
              className={sayHello?.length === idx + 1 ? "pt-12 pb-8" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
        <ButtonDefault
          title="좋아요"
          bgcolor="bg-primary_100"
          txtcolor="text-white"
          btnWidth="w-[330px]"
          onClickFunction={handleClick}
        />
      </>
    );
  };

  const ProjectList = () => {
    return (
      <ul className="relative right-2.5">
        {ProjectIntroSteps?.map((el, idx) => (
          <li
            key={idx}
            className={
              "relative border-l-4 pb-4 " +
              (ProjectIntroSteps?.length === idx + 1
                ? "border-white"
                : "border-primary_100 ")
            }
          >
            <span className="bg-primary_100 inline-block w-4 h-4 rounded-full absolute top-0 left-[-10px]"></span>
            <div className="flex flex-col gap-y-2 px-10 relative top-[-6px]">
              <span className="text-lg font-bold pb-1">{el.title}</span>
              <p className="leading-3 text-sm">{el.content1}</p>
              <p className="leading-3 text-sm">{el.content2}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  // const AsideHead = () =>{
  //     return(
  //         <div className='p-4 bg-green-200 text-white'>
  //             {labels()}
  //             <ul className='font-bold text-xl pt-3'>
  //                 <li>{"pei의"}</li>
  //                 <li>멋진 프로젝트</li>
  //             </ul>
  //             <div className='flex justify-between items-center'>
  //                 <span className='pt-2 font-semibold'>프로젝트 번호 19999</span>
  //                 <span>화살</span>
  //             </div>
  //         </div>
  //     )
  // }

  const Intro1 = () => {
    return (
      <>
        <Head4_4xl title={"프로젝트는 4단계로 진행돼요"} />
        <div className="pt-10">
          {ProjectList()}
          <div className="flex gap-x-12 items-center pt-16">
            <ButtonDefault
              title="시작하기"
              bgcolor="bg-primary_100"
              txtcolor="text-white"
              btnWidth="w-[300px]"
              onClickFunction={() => {
                navigate("/studio/intro/funding");
              }}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <StudioHeader />
      <div className="flex h-full">
        <AsideHead />
        <div className="w-full">
          <IntroLoadingBar introActive={introActive} />
          <div className="p-20 ">
            {introActive === 0 ? Intro0() : introActive === 1 ? Intro1() : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
