export interface SubLink {
    subname: string;
    link?: string;
    icon?: string;
}

export interface MainLink {
    name: string;
    subLists?: SubLink[];
    mainLink?: string;
}

export const lists1: MainLink[] = [
    {name:'정책/약관',subLists:[
        {subname:'공통 정책/약관',link:'/1',icon:'icon1'},
        {subname:'와디즈 정책/약관',link:'/2'},
        {subname:'와디즈파이낸스 정책/약관',link:'/3'},
    ]},
    {name:'개인정보처리방침',subLists:[
        {subname:'와디즈 개인정보처리방침',link:'/1'},
        {subname:'와디즈 파이낸스 개인정보처리방침',link:'/2'},
    ]},
  ]
export const lists2: MainLink[] = [
    {name:'제휴문의',subLists:[
        {subname:'광고 서비스 문의',link:'/1'},
        {subname:'제휴 문의 ',link:'/2'},
        {subname:'마케팅 제휴/PR 문의 ',link:'/3'},
        {subname:'IP 제휴 문의 ',link:'/4'},
    ]},
    {name:'공지사항',mainLink:'/1'},
    {name:'인재채용',mainLink:'/2'},
    {name:'SNS',subLists:[
        {subname:'카카오펀딩',link:'/1',icon:'icon1'},
        {subname:'페이스북펀딩',link:'/2',icon:'icon2'},
        {subname:'브런치',link:'/3',icon:'icon3'},
        {subname:'인스타그램',link:'/4',icon:'icon4'},
        {subname:'블로그',link:'/5',icon:'icon5'},
        {subname:'유튜브',link:'/6',icon:'icon6'},
        {subname:'트위터',link:'/7',icon:'icon7'},
    ]},
    {name:'language',subLists:[
        {subname:'한국어'},{subname:'일본어'},{subname:'영어'}
    ]}
  ]