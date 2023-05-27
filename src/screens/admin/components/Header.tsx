import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectMadeModal from "../pages/components/Home/ProjectMadeModal";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
export interface Link {
  name: string;
  link: string;
}
export const lists1: Link[] = [
  { name: "오픈예정", link: "/1" },
  { name: "펀딩+", link: "/2" },
  { name: "프리오더", link: "/3" },
  { name: "스토어", link: "/4" },
  { name: "더보기", link: "/5" },
];
export const lists2: Link[] = [
  { name: "로그인", link: "/login" },
  { name: "회원가입", link: "/signup" },
];
export const reapeateList = (option: number) => {
  return (
    <>
      {option === 1
        ? lists1?.map((el: Link) => (
            <li key={el.name}>
              <a href={el.link}>{el.name}</a>
            </li>
          ))
        : lists2.map((el: Link) => (
            <li key={el.name}>
              <a href={el.link}>{el.name}</a>
            </li>
          ))}
    </>
  );
};

export const Logo = () => {
  return (
    <h1 className="logo font-bold text-2xl">
      <a href="/">mindiz</a>
    </h1>
  );
};
export const Header = () => {
  const [madeModal, setMadeModal] = useState(false);
  return (
    <header className="header-wrapper max-w-layout w-full flex items-center mx-auto 2xl:w-100 px-20 py-2 justify-between bg-white relative">
      <Logo />
      <ul className="GNBdesktop flex gap-x-4 font-semibold text-lg">
        {reapeateList(1)}
      </ul>
      <div className="home_search relative">
        <input
          className="border rounded-md border-primary_100 px-3 py-2 text-sm w-[300px]"
          placeholder="새로운 것을 찾으시나요?"
        />
        <span className="absolute top-1/2 right-3 transformY-50">돋보기</span>
      </div>
      <div className="home_login">
        <ul className="logindesktop flex gap-x-4 items-center">
          {reapeateList(2)}
          <button
            className="text-primary_100 border border-primary_100 rounded py-2 px-4 text-sm"
            onClick={() => {
              setMadeModal(!madeModal);
            }}
          >
            프로젝트 만들기
          </button>
        </ul>
      </div>
      {madeModal && <ProjectMadeModal />}
    </header>
  );
};

export const Header2 = () => {
  return (
    <header className="header-wrapper w-full flex items-center mx-auto 2xl:w-100 px-20 py-3 justify-between bg-white border-b border-gray-100">
      <div className="w-[112.9px]"></div>
      <Logo />
      <ul className="flex gap-x-4 items-center">{reapeateList(2)}</ul>
    </header>
  );
};

export const StudioHeader = () => {
  const arrs = ["min", "maker studio"];
  const navigate = useNavigate();
  return (
    <header className=" px-6 py-3 flex justify-between items-center border border-b">
      <div className="">
        {arrs?.map((el) => (
          <span
            key={el}
            className="inline-block mr-2 bg-black rounded-full py-1 px-2 text-white text-xs font-bold"
          >
            {el}
          </span>
        ))}
      </div>
      <div className="flex gap-x-2 items-center">
        <span className="bg-gray-100 p-2 rounded-full inline-block">img</span>
        <span>name</span>
      </div>
      <div className="flex items-center gap-x-6 cursor-pointer">
        <span className="block" onClick={() => navigate("/")}>
          <NotificationsIcon fontSize="small" />
        </span>

        <span className="block" onClick={() => navigate("/")}>
          <CloseIcon fontSize="small" />
        </span>
      </div>
    </header>
  );
};
