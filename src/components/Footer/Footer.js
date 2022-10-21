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
        </div>
      </section>
      <section className="footerCenter">
        <div className="footerCenterLeftItem">
          <MdOutlineWhereToVote className="where" />
          <div className="logoList">
            <span>WECODE</span>
            <div>
              <span>© 2022 Just, WE All Rights </span>
            </div>
          </div>
        </div>
        <div className="footerCenterRightItem">
          <ul className="termsOfServiceList">
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomLeft">
          <div>
            (WE)WECODE 대표 JUST WE DO IT, | 서울특별시 강남구 테헤란로 427,
            10층(삼성동) | 통신판매업신고번호 1111-1111-1111-1111 | 등록번호
            999-99-99999사업자 정보 확인
          </div>
          <div>
            고객센터 전화 문의 123-456-7889 FAX 02-1111-2222 | 이메일
            wecode@gmail.com | 호스팅서비스사업자 (WE)WECODE
          </div>
        </div>
        <div className="footerBottomRight">
          <div>JUST WE DO IT 팀은 보다 정확하고 깔끔한 코드를 추구합니다.</div>
          <div>JUST WE DO IT</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
