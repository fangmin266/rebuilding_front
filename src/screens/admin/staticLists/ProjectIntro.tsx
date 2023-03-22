import React from "react";

export const ProjectIntroSteps = [
  {title: "1단계: 프로젝트 작성", content1: "필수 항목들을 작성해 제출해주면 끝이랍니다."},
  {title: "2단계: 프로젝트 심사", content1: "와디즈 심사 정책을 바탕으로 프로젝트 진행에 필요한 요건과 콘텐츠를 검토해요.", content2: "필요시 와디즈 담당자가 피드백을 요청할 수 있어요."},
  {title: "3단계: 프로젝트 공개", content1: "모든 준비가 완료된 프로젝트들은 최종 승인이 돼요.",content2: "메이커님이 직접 바로 공개하거나 원하는 공개 날짜를 예약할 수 있어요."},
  {title: "4단계: 프로젝트 심의 및 모니터링", content1:"프로젝트 오픈 이후 담당 부서에서 모니터링 및 광고 심의가 진행돼요.", content2:"결과에 따라 프로젝트 수정 요청이 진행될 수 있어요." }
]

interface IProjectLink {
    id: number;
    title: {
      name: string;
      link: string;
      findopen:string;
    };
    subtitles?: {
      name: string;
      link: string;
    }[];
    [key: string]: any;
  }
  
export const ProjectLink:IProjectLink[] = [
  {
  id:1,
  title:{name: "프로젝트 관리",link: "/studio/intro/funding",findopen:"default"},
  subtitles:[
      {name:"요금제 선택",link:"/studio/intro/funding/plan"},
      {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
      {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
      {name:"스토리 작성",link:"/studio/intro/funding/story"},
      {name:"리워드 설계",link:"/studio/intro/funding/condition"},
      {name:"정책",link:"/studio/intro/funding/policy"},
      {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
      {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
      ]
  },
  {
      id:2,
      title:{name: "새소식",link: "/studio/intro/new",findopen:"open"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:3,
      title:{name: "오픈예정 현황",link: "/studio/intro/openDate",findopen:"openExpect"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:4,
      title:{name: "프로젝트 현황",link: "/studio/intro/projectProceed", findopen:"open"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:5,
      title:{name: "결제 현황",link: "/studio/intro/pay",findopen:"end"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:6,
      title:{name: "발송,환불 관리",link: "/studio/intro/refund",findopen:"open"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:7,
      title:{name: "수수료,정산관리",link: "/studio/intro/charge",findopen:"submit"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:8,
      title:{name: "민디즈 광고 서비스",link: "/studio/intro/advertise",findopen:"default"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:9,
      title:{name: "메이커 서비스",link: "/studio/intro/makerservice",findopen:"default"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  },
  {
      id:10,
      title:{name: "자료 및 도움말",link: "/studio/intro/help",findopen:"default"},
      subtitles:[
        {name:"요금제 선택",link:"/studio/intro/funding/plan"},
        {name:"프로젝트 정보",link:"/studio/intro/funding/screening"},
        {name:"기본 정보",link:"/studio/intro/funding/baseinfo"},
        {name:"스토리 작성",link:"/studio/intro/funding/story"},
        {name:"리워드 설계",link:"/studio/intro/funding/condition"},
        {name:"정책",link:"/studio/intro/funding/policy"},
        {name:"메이커 정보",link:"/studio/intro/funding/makerInfo"},
        {name:"대표자 및 정산 정보",link:"/studio/intro/funding/contactInfo"}
        ]
  }
]

interface User {
    name: string;
    profile: null;
  }
  
  interface ProjectStatus {
    projectNum: string;
    proceed: string;
    default:boolean;
    open: boolean;
    openExpect: boolean;
    end: boolean;
    submit: boolean;
    [key: string]: any;
  }
  
  interface UserInfoStudioIntro extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLElement>,HTMLElement>{
    status: string;
    user: User;
    projectStatus: ProjectStatus;
  }

export const userInfoStudioIntro:UserInfoStudioIntro = 
    {
      status:"ok",
      user:{name:"pei", profile:null},
      projectStatus:{
          projectNum:"123456",
          proceed:"작성중",
          default:true,
          open: false,
          openExpect:false,
          end:false,
          submit:false
      }
    }

    interface IFundingSelectList {
      status: string;
      selectStatus: {
        name: string;
        value: string;
      }[];
    }
    
    export const fundingSelectList: IFundingSelectList = {
      status: "ok",
      selectStatus: [
        { name: "요금제 선택",value: "작성중"},
        { name: "프로젝트 정보",value: "작성완료"},
        { name: "기본 정보",value: "작성전"},
        { name: "스토리 작성",value: "작성중"},
        { name: "리워드 설계",value: "작성전"},
        { name: "정책",value: "작성중"},
        { name: "메이커 정보",value: "작성전"},
        { name: "대표자 및 정산 정보",value: "작성전"}
      ],
    };
  
    export const fundingIntroImgs = [
      'image1','image2','image3','image4'
    ]