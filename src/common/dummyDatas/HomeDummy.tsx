export interface IHomeCategoryDummy {
    title:string;
    count?:number, 
    percentage?:number, 
    unit:string, 
    category?:string, 
    price?:number, 
    score?:number, 
    freedel?:boolean, 
    quick?:boolean,
    only?:boolean
  }
  type ProductCategory = {
    name: string;
  };
  
export const HomeCategoryDummy1:IHomeCategoryDummy[] = [
    {title:"스텐팬 이제 걱정하지마세요! 당신의 첫 도전은 스텐의 원조 쿠자팬 으로", count:1323,unit:'명', category:"홈,리빙"},
    {title:"[제주 신상 특산물]제주당근의 돌코롬하고 건강한 맛,제주당근샌드", percentage:5196,unit:'%', category:"푸드"},
    {title:"[역대뷰티 1위]면봉 태워 속눈썹 올리기 알죠? 그 비법이 컬링기로!", count:3173,unit:'명', category:"뷰티"},
    {title:"이제 립밤말고 립버터하세요, 꽉찬 보습 함량! 쫀득착붙 립버터밤", percentage:12728,unit:'%', category:"뷰티"},
  ]
export const HomeCategoryDummy2:IHomeCategoryDummy[] = [
    {title:"[메이플스토리]귀여움최상! 핑크빈데스크테리어 세트로 능률UP!", percentage:14652,unit:'%', category:"테크,가전"},
    {title:"[앵콜요청쇄도]뜯고 짜고 다해 보셨죠? 모공청소는 이렇게 하는겁니다.", count:1216,unit:'명', category:"뷰티"},
    {title:"[1.5억 앵콜]피부관리 속도의 한계를 보여줄게요! 기적의 7초 앰플", count:2097,unit:'명', category:"뷰티"},
    {title:"촘촘한 두피는 수분이 결정합니다. 강남 두피관리센터가 만든 100년 샴푸바", percentage:14440,unit:'%', category:"뷰티"},
  ]
export const HomeCategoryDummy3:IHomeCategoryDummy[] = [
    {title:"애플다운 미니멀한 디자인! 아이폰 애플워치 동시 충전가능한 차량용 ", percentage:5220,unit:'%', category:"테크,가전"},
    {title:"첫사랑이 토끼에게 먹혔다<큐빌리언>", percentage:267,unit:'%', category:"출판"},
    {title:"마스카라 완벽대체 속눈썹 영양제. 브라운 컬러는 처음이지?", percentage:7059,unit:'명', category:"뷰티"},
    {title:"촘촘한 두피는 수분이 결정합니다. 강남 두피관리센터가 만든 100년 샴푸바", percentage:14440,unit:'%', category:"뷰티"},
  ]

export const HomeRealTimeDummy1:IHomeCategoryDummy[] = [
    {title:"산카이 마코토 원작소설 박스세터 & ,<스즈메의 문단속>스페셜 공식 굿즈", percentage:27844,unit:'%', category:'출판'},
    {title:'[살균과 진공을 동시에] 쌀의 신선함을 유지시켜주는 UVC 살균 진공쌀통!', percentage:1038, unit:'%', category:'출판'},
    {title:'[1.5억 앵콜]피부 관리 속도의 한계를 보여줄게요! 기적의 7초 앰플', count:2067, unit:'명', category:'뷰티'},
    {title:'[특수부대의 신발] 실전을 위한 극강의 기술, 일상에서 경험하세요', count:188, unit:'명',category:'패션,잡화'},
    {title:'매일 입는 가장 현대적인 한복, 일상에 녹아든 특별함 <창의 타이셔츠>', percentage:5490, unit:'%',category:'패션,잡화'}
]
export const HomeRealTimeDummy2:IHomeCategoryDummy[] = [
    {title:"[1억 펀딩] 한눈에 보는 코스모스 한국사& 세계사 연표", price:19500,unit:'원', score:4.8},
    {title:'술자리 인싸템 진로 소주 디스펜서', price:49000,unit:'원', score:4.8, freedel:true},
    {title:'[벌써와배송]운동 효율 끝판왕! 자석 헬스 거치대[Setro:세트로]', price:15900,unit:'원', score:4.8,freedel:true, quick:true},
    {title:'돌아온 뚠겹살! 와디즈 역대 삼겹살 펀딩 프로젝트 1위', price:19900,unit:'원', score:4.8},
    {title:'[집밖의발견]내 발에 3초만에 착감기는 남녀공용 벨롭 티바트 런닝화', price:59000,unit:'원', score:4.7, quick:true},
]

export const HomeStoreRecommendDummy1:IHomeCategoryDummy[] = [
  {title:"내 손안의 스마트한 스튜디오,저스트 모바일 셔터그립2", price:59900, unit:'원', score:4.5, only:true},
  {title:"블루라이트 차단 렌즈+풀 티타늄 티에어 명품 안경테",price:65000, unit:'원', score:4.5, only:true},
  {title:"5.1억, 돌아온 에이블러 롤링, 이제 주문하면 바로 옵니다!",price:148000, unit:'원', score:4.5, freedel:true},
  {title:"쿠션유목민의 종착지 샤르드 순간쿠션 (리필포함)",price:23200, unit:'원', score:4.5, quick:true, only:true},
  {title:"좁은 냉장고에 쏙! 이중밀폐 이유식 얼음틀 퍼기 멀티큐브 4구/6구",price:9900, unit:'원', score:4.8, quick:true},
  {title:"1만원대 기모슬랙스ㅣ바지전문 공장이 자신있게 선보이는 슬랙스!", price:19900, unit:'원', score:4.4, only:true},
]
export const HomeStoreRecommendDummy2:IHomeCategoryDummy[] = [
  {title:"겨울이 두렵지 않은 2in1 아우터! 방수+방풍+투습 [페트 드라이코트]", price:258000, unit:'원', score:4.8, freedel:true},
  {title:"펠체아주라 145년 향수가문의 바디워시 650ml",price:10900, unit:'원', score:4.7, freedel: true, only:true},
  {title:"피스코리아 60년 기술력 한식도 중식도 평화 주방가위",price:9900, unit:'원', score:4.5, freedel:true, only:true},
  {title:"술자리 인싸템 진로 소주 디스펜서",price:49000, unit:'원', score:4.8, freedel:true, quick:true, only:true},
  {title:"[집밖의발견] 여름 외출 필수품, 111g 초경량 카본 자외선 차단 우산",price:15900, unit:'원', score:4.7, freedel:true, only:true},
  {title:"[캐나다 아소부] 페어 화제템! 자꾸 눈길이 가는 파스텔 컬렉션 텀블러", price:44900, unit:'원', score:4.5}
]
export const DonationRandomStrings:string[] =[
  '아이의 첫그림을 전시하고 싶어요',
  '어려운 지역 농가의 사연을 들려주고 싶어요',
  '북극곰의 서식지를 되살리고 싶어요',
  '저희 아마추어 극단의 연극을 보여주고 싶어요',
  '교육이 필요한 아이들에게 공부방을 제공하고 싶어요',
  '보호 종료 아동의 안식처를 마련해주고 싶어요'
];

export const ProductServiceContentsCategories: ProductCategory[] = [
  { name: '패션,잡화' },
  { name: '홈,리빙' },
  { name: '클래스,컨설팅' },
  { name: '출판' },
  { name: '캐릭터,굿즈' },
  { name: '테크,가전' },
  { name: '뷰티' },
  { name: '푸드' },
  { name: '레저,아웃도어' },
  { name: '스포츠,모빌리티' },
  { name: '여행,숙박' },
  { name: '베이비,키즈' },
  { name: '반려동물' },
  { name: '게임,취미' },
  { name: '컬처,아티스트' },
  { name: '기부,캠페인' },
  { name: '모임' },
  { name: '나중에 선택' },
];

export const RelationMenuGo =[
  "메이커서비스 알아보기", "와디즈 스쿨 가기", "IP라이선스 알아보기", "메이커센터 가기"
]
