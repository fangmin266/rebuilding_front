import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../features/store";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  onSetTitleNum,
  onSetTitleName,
} from "../../../../features/admin/studioSlice";
import {
  ProjectLink,
  userInfoStudioIntro,
} from "../../staticLists/ProjectIntro";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LockIcon from "@mui/icons-material/Lock";

export const AsideHead = () => {
  const labelarr = ["프로젝트", "작성중"];
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const { titleIdx, titleName } = useSelector(
    (state: RootState) => state.studio
  );

  const labels = () => {
    return (
      <ul className="flex gap-x-2">
        {labelarr?.map((el) => (
          <li
            key={el}
            className="inline-block rounded p-1 text-white text-xs border border-white"
          >
            {el}
          </li>
        ))}
      </ul>
    );
  };

  const asidelists = () => {
    return (
      <>
        {ProjectLink?.map((el, idx) => {
          const open = userInfoStudioIntro.projectStatus[el.title.findopen];
          console.log(titleName, "*", el.title.name);
          return (
            <li
              key={el.id}
              onClick={() =>
                console.log(el.title.findopen, typeof el.title.findopen)
              }
            >
              <div
                className={
                  "flex justify-between p-4 " +
                  (titleName === el.title.name && toggle
                    ? " text-primary_100 "
                    : " text-gray-500 ")
                }
              >
                <span
                  onClick={() => {
                    navigate(el.title.link);
                    dispatch(onSetTitleName(el.title.name));
                  }}
                >
                  {el.title.name}
                </span>
                <span
                  onClick={() => {
                    if (open) {
                      dispatch(onSetTitleNum(el.id));
                      dispatch(onSetTitleName(el.title.name));
                      setToggle(!toggle);
                    }
                  }}
                >
                  {open ? (
                    <ArrowForwardIosIcon fontSize="small" />
                  ) : idx === 0 ? (
                    <ArrowForwardIosIcon fontSize="small" />
                  ) : (
                    <LockIcon fontSize="small" />
                  )}
                </span>
              </div>
              {el.id === titleIdx && toggle && (
                <ul className="bg-gray-100 px-16">
                  {el.subtitles?.map((sublist) => (
                    <li
                      key={sublist.name}
                      className="py-4"
                      onClick={() => navigate(sublist.link)}
                    >
                      {sublist.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </>
    );
  };
  return (
    <aside
      className={
        "w-[300px] h-screen overflow-auto " +
        (path?.includes("funding") ? " " : " opacity-60 pointer-events-none")
      }
    >
      <div className="p-4 bg-green-200 text-white">
        {labels()}
        <ul className="font-bold text-xl pt-3 ">
          <li>{userInfoStudioIntro.user.name}</li>
          <li>멋진 프로젝트</li>
        </ul>
        <div className="flex justify-between items-center">
          <span className="pt-2 font-semibold">
            프로젝트 번호 {userInfoStudioIntro.projectStatus.projectNum}
          </span>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
      <ul className="text-sm font-bold cursor-pointer">{asidelists()}</ul>
    </aside>
  );
};
