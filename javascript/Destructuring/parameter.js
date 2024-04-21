const news = [
    {
        title: "sbs",
        imageUrl: "https://search.naver.com/search.naver?where=news&query=sbs&sm=tab_clk.jou&sort=0&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=&office_section_code=&news_office_checked=&nso=&is_sug_officeid=1",
        newslist: [
            "[HOT 브리핑] '봉고파직 · 위리안치'…이재명, 국민의힘 지도부 맹공",
            "[HOT 브리핑] '화천대유' 의혹 제기 한 달 만에 늑장수사…실효성 의문도",
            "[날씨] '가시거리 10m' 짙은 안개 주의…큰 일교차"
        ]
    },
    {
        title: "mbc",
        imageUrl: "https://search.naver.com/search.naver?where=news&query=mbc&sm=tab_clk.jou&sort=0&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=&office_section_code=&news_office_checked=&nso=&is_sug_officeid=1",
        newslist: [
            "음주 상태로 차몰던 50대 건물 6층에서 밖으로 추락",
            "'노사 교섭 타결' 대전 시내버스 파업 하루 만에 종료",
            "술집서 지인 폭행한 국회의원 전 보좌관 벌금 100만원"
        ]
    }
];

function getNewsList([, {newslist}]) {
    console.log(newslist);
}

getNewsList(news);