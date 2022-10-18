import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';
import { MdOutlineWhereToVote } from 'react-icons/md';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footerTop">
        <div className="footerTopLeftItem">
          <ul className="newsList">
            <li>새로운 소식</li>
            <li>멤버가입</li>
            <li>매장안네</li>
            <li>나이키 저널</li>
          </ul>
          <ul className="helpList">
            <li>도움말</li>
            <li>로그인 안내</li>
            <li>주문배송조회</li>
            <li>반품 정책</li>
            <li>결제 방법</li>
            <li>공지사항</li>
            <li>문의하기</li>
          </ul>
          <ul className="aboutList">
            <li>ABOUT NIKE</li>
            <li>소식</li>
            <li>채용</li>
            <li>투자자</li>
            <li>지속가능성</li>
          </ul>
        </div>
        <div className="footerTopRightItem">
          <AiFillTwitterCircle className="twitterIcon" />
          <AiFillYoutube className="youtubeIcon" />
          <AiFillInstagram className="instagramIcon" />
        </div>
      </section>
      <section className="footerCenter">
        <div className="footerCenterLeftItem">
          <MdOutlineWhereToVote className="where" />
          <div className="logoList">
            <span>대한민국</span>
            <div>
              <span>© 2022 Nike, Inc. All Rights Reserved</span>
            </div>
          </div>
        </div>
        <div className="footerCenterRightItem">
          <ul className="TermsOfServiceList">
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomA">
          <div>
            (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
            통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068사업자
            정보 확인
          </div>
          <div>
            고객센터 전화 문의 080-022-0182 FAX 02-6744-5880 | 이메일
            service@nike.co.kr | 호스팅서비스사업자 (유)나이키코리아
          </div>
        </div>
        <div className="footerBottomB">
          <div>
            현금 등으로 결제 시 안전 거래를 위해 저희 쇼핑몰에서 가입한
            파이서브코리아의 구매 안전 서비스(결제대금예치)를 이용하실 수
            있습니다.
          </div>
          <div>
            온라인디지털콘텐츠산업발전법에 의한 콘텐츠 보호 안내자세히 보기
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
