import React, { useCallback, useEffect, useState } from "react";
import {
  HomeRealTimeDummy1,
  HomeRealTimeDummy2,
  HomeStoreRecommendDummy1,
  HomeStoreRecommendDummy2,
} from "../../../common/dummyDatas/HomeDummy";
import { ContentHead1 } from "../components/ContentHead";
import Footer from "../components/Footer";

import { Header } from "../components/Header";
import { deliveryStyle, pricePercent, scoreRate } from "../components/Units";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../features/store";
import { ProductState } from "../../../features/admin/productSlice";
import { getAllProduct } from "../../../features/admin/productSlice";

const Home = () => {
  const [event, setEvent] = useState(true);
  const [aiNum, setAiNum] = useState<number>(1);
  const [tabName, setTabname] = useState("펀딩/프리오더");
  const [storeNext, setStoreNext] = useState(1);
  const [aiProduct, setAIproduct] = useState<ProductState[]>([]);
  const [ranking, setRanking] = useState<ProductState[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const getBooks = async (clicknum: number) => {
    try {
      const res = await dispatch(getAllProduct()).unwrap();
      const resData = res.data;
      const data = resData.data;
      if (resData.statusCode === 200) {
        if (clicknum === 1) {
          setAIproduct(data?.slice(0, 4));
        } else if (clicknum === 2) {
          setAIproduct(data?.slice(4, 8));
        } else {
          setAIproduct(data?.slice(8, 12));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRanking = async (clicknum: number) => {
    try {
      const res = await dispatch(getAllProduct()).unwrap();
      const resData = res.data;
      const data = resData.data;
      if (resData.statusCode === 200) {
        if (clicknum === 1) {
          setRanking(data?.slice(0, 5));
        } else if (clicknum === 2) {
          setRanking(data?.slice(5, 10));
        } else {
          setRanking(data?.slice(10, 15));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eventCoupon = () => {
    return (
      <>
        {event && (
          <div className="p-3 bg-black text-white flex justify-center gap-x-6">
            <div>
              <span className="text-primary_100">[첫 결제 65,000원]</span>
              <span>쿠폰 혜택 받고 사라져요</span>
            </div>
            <span
              className="border cursor-pointer"
              onClick={() => setEvent(false)}
            >
              닫기
            </span>
          </div>
        )}
      </>
    );
  };

  const categorySection = (heresample: ProductState[]) => {
    return (
      <>
        {heresample?.map((el, idx) => (
          <li className="pt-4" key={idx}>
            <div className="h-[100px] overflow-hidden bg-gray-100 rounded">
              <img src={el.thumbnail} alt={el.title} />
            </div>
            <div>{el.title}111</div>
            <div className="pt-2 ">{el.content}</div>
            <div className="flex items-center gap-x-1">
              {/* <span className='text-primary_100'>{el.count?el.count?.toLocaleString('ko-KR'):el.percentage?.toLocaleString('ko-KR')}{el.unit}</span> */}
              {/* <span className='text-gray-400 text-xs'>{el.createdAt}</span> */}
            </div>
          </li>
        ))}
      </>
    );
  };
  const specialExhibition = () => {
    return (
      <li className="pt-4 col-span-2">
        <div className="h-[100px] bg-gray-100"></div>
        <div className="flex gap-x-2 pt-2">
          <span className="border rounded-sm text-xs flex items-center">
            기획전
          </span>
          <p>오직 와디즈에서만! 앵콜프로젝트 모음</p>
        </div>
      </li>
    );
  };

  const aiRecommentBtn = () => {
    return (
      <div
        className="border rounded px-3 py-2 text-sm w-[140px] flex justify-center items-center cursor-pointer"
        onClick={() => {
          if (aiNum === 3) {
            setAiNum(1);
            getBooks(1);
          } else {
            setAiNum(aiNum + 1);
            getBooks(aiNum + 1);
          }
        }}
      >
        <span>#</span>
        <span className="text-primary_100">AI</span>
        <span>추천 더보기 </span>
        <span className="text-xs text-primary_100">{aiNum}</span>
        <span className="text-xs">/3</span>
      </div>
    );
  };
  const RealTimeLankingTab = () => {
    const tabs = ["펀딩/프리오더", "스토어"];
    return (
      <ul className="text-gray-400 text-sm flex gap-x-4 cursor-pointer py-6">
        {tabs?.map((el) => (
          <li
            key={el}
            className={tabName === el ? "text-black border-b border-black" : ""}
            onClick={() => {
              setTabname(el);
              if (el === "펀딩/프리오더") {
                getRanking(1);
              } else {
                getRanking(2);
              }
            }}
          >
            {el}
          </li>
        ))}
      </ul>
    );
  };

  const RealTimeLists = (TAB: string) => {
    const lists =
      TAB === "펀딩/프리오더" ? HomeRealTimeDummy1 : HomeRealTimeDummy2;
    return (
      <ul className="flex flex-col gap-y-3 ">
        {lists?.map((el, idx) => (
          <li key={idx} className="flex justify-between">
            <div className="w-2/3">
              <div className="flex gpa-x-2">
                <span className="font-bold text-lg">{idx + 1}</span>
                <div className="text-sm tracking-wide pt-1">
                  <span className="pr-3">{el?.title}</span>
                </div>
              </div>
              <div>
                {pricePercent(el)}
                <div className="flex items-center">
                  {scoreRate(el)}
                  {deliveryStyle(el)}
                </div>
              </div>
            </div>
            <div className="w-24 h-16 bg-gray-100"></div>
          </li>
        ))}
      </ul>
    );
  };

  const StoreRecommendList = (option: number) => {
    const lists =
      option === 1 ? HomeStoreRecommendDummy1 : HomeStoreRecommendDummy2;
    return (
      <div className="relative">
        <ul className="pt-3 flex justify-between">
          {lists?.map((el, idx) => (
            <li key={idx} className="w-[200px] flex flex-col gap-y-2">
              <div className="h-[200px] rounded-xl bg-gray-100 relative">
                {el?.only && (
                  <span className="bg-primary_100 absolute top-3 left-0 text-xs text-white font-semibold px-1">
                    mindiz-only
                  </span>
                )}
              </div>
              <p>{el.title}</p>
              {pricePercent(el)}
              {deliveryStyle(el)}
            </li>
          ))}
        </ul>
        <span
          className={
            "bg-white w-10 h-10 inline-block rounded-full shadow-lg text-center absolute bottom-40 " +
            (option === 1 ? " right-[-20px] " : " left-[-20px] ")
          }
          onClick={() => {
            setStoreNext(storeNext === 2 ? 1 : 2);
          }}
        >
          화살
        </span>
      </div>
    );
  };
  useEffect(() => {
    getBooks(1);
    getRanking(1);
  }, []);
  return (
    <>
      {eventCoupon()}
      <Header />
      <div className="home_content ">
        <div className="bg-gray-100 h-[300px] flex justify-center items-center">
          swiper
        </div>
        <div className="content1 px-20  mx-auto max-w-layout 2xl:w-100 flex gap-x-20">
          <div className="w-2/3 py-10">
            <ContentHead1
              title="취향 맞춤 프로젝트"
              subtitle="지금 함께 만드는 성공"
              option={1}
            />
            <ul className="grid grid-cols-3 gap-x-8">
              {categorySection(
                aiNum === 1 ? aiProduct : aiNum === 2 ? aiProduct : aiProduct
              )}
              {specialExhibition()}
            </ul>
            <div className="flex justify-end">{aiRecommentBtn()}</div>
          </div>
          <div className="w-1/3 py-10 border-l border-gray-100 pl-20">
            <ContentHead1 title="실시간 랭킹" subtitle={""} option={2} />
            <div>
              {RealTimeLankingTab()}
              {RealTimeLists(tabName)}
            </div>
          </div>
        </div>
        <div className="w-full border-t">
          <div className="content2 px-20 py-10 mx-auto max-w-layout 2xl:w-100 ">
            <ContentHead1
              title="스토어 추천 제품"
              subtitle="팬들이 인정한 성공 펀딩 집합샵"
              option={1}
            />
            {StoreRecommendList(storeNext)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
