import React from 'react';
import { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import './AccordianMenu.scss';

const AccordianMenu = () => {
  const MENU_LIST = [
    {
      title: '무료배송 및 반품',
      list: [
        {
          subtitle: '일반배송',
          text1: '· 배송지역: 전국(일부 지역 제외)',
          text2:
            '· 배송비: 무료배송 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.',
        },
        {
          subtitle: '오늘도착 서비스',
          text1:
            '· 이용시간: 12시까지 결세 시, 당일 도착 (일요일, 공휴일 제외)',
          text2: '· 서비스지역: 서울·과천·의왕·군포·수원·성남·안양시 ',
          text3: '· 전체·수지구·기흥구·부천시 중동·상동·심곡동',
          text4: '· 서비스비용: 5,000원',
        },
        {
          subtitle: 'A/S 안내',
          text1:
            '· 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키 고객센터(080-022-0182)에서 유선으로만 접수 가능합니다.',
        },
      ],
    },
    {
      title: '리뷰',
      list: [
        {
          subtitle: 'Reviews',
          text1: '리뷰 칸',
        },
      ],
    },
    {
      title: '추가 정보',
      list: [
        {
          subtitle: '상품정보제공고시',
          text1:
            '· 제조년월: 수입제품으로서 각 상품별 입고 시기에 따라 상이하여 제조연월 제공이 어렵습니다. 제조년원을 확인하시려면 고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을 참고하시기 바랍니다.',
          text2:
            '· A/S 책입자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182',
          text3:
            '· 세탁방법 및 취급시 주의사항: 자세한 내용은 자세히 보기를 클릭하여 확인 부탁드립니다.',
          text4:
            '· 미성년자 권리 보호 안내: 자세한 내용은 자세히 보기를 클릭하여 확인 부탁드립니다.',
          text5:
            '· 품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월), 가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지 않습니다.',
          text6:
            '· 제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc / (유)나이키코리아',
        },
      ],
    },
  ];
  const [activeIdx, setActiveIdx] = useState();

  return (
    <div className="detail">
      {MENU_LIST.map((item, idx) => {
        const active = idx === activeIdx ? 'active' : '';
        return (
          <ListItem
            key={idx}
            title={item.title}
            idx={idx}
            list={item.list}
            active={active}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        );
      })}
    </div>
  );
};

export default AccordianMenu;
