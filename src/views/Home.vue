<template>
  <div id="wrap">
    <h1
      v-show="pageInfoList.length - 1 != nowPage"
    >놀라바</h1>
    <swiper
      class="swiper swiperMain"
      ref="swiperMain"
      :options="swiperOptionMain"
      @slideChange="onSlideChange"
    >
      <!-- introduce -->
      <swiper-slide>
        <div class="introduceBox">
          <h2>
            <em>Unbelievable</em>
            <span>Smart Store</span>
            <strong>NOLLARVA</strong>
            <span>Grand Open</span>
          </h2>
          <h3>무인 스마트 스토어 - 놀라바!<span>그랜드 오픈!!</span></h3>
        </div>
      </swiper-slide>
      <!-- //introduce -->

      <!-- value -->
      <swiper-slide>
        <swiper
          class="swiper vertical valueBox"
          :options="swiperOptionSub01"
          ref="swiperSub01"
        >
          <swiper-slide class="value1">
            <h2>콘텐츠의 절대강자<span>라바하고 막놀아바</span></h2>
            <ul>
              <li>
                <span class="thumb1"></span>
                <p>25개국<br> 상품 라이선싱 계약, <span>190개국<br> 애니메이션 방영</span></p>
              </li>
              <li>
                <span class="thumb2"></span>
                <p>6억 800만 명의<br> 실 시청자 <span>넷플릭스<br> 오리지널 시리즈 방영</span></p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide class="value2">
            <h2>무인샵의 눈이부신<span>가능성을 왜몰라바</span></h2>
            <ul>
              <li>
                <p>1,238<em>%</em></p>
                <p>
                  <span>국내 빅4 <span>무인점포 증가율</span></span>
                  <span>(2019.4 ~ 2021.5)</span>
                </p>
              </li>
              <li>
                <p>64<em>%</em></p>
                <p>
                  <span>인건비<br />상승율</span>
                  <span>(2019.4 ~ 2021.5)</span>
                </p>
              </li>
              <li>
                <p>55.9<em>%</em></p>
                <p>
                  <span>야간 시간대<br /><span>매출 신장율</span></span>
                  <span>(2014년기준,전년동기대비)</span>
                </p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide class="value3">
            <h2>요즘대세 취향저격<span>트렌드에 깜놀라바</span></h2>
            <ul>
              <li>
                <span class="thumb3"></span>
                <p>
                  <span>유튜브 구독자 <span>950만 명</span></span>
                  <span>누적 100억 뷰를 통한 <span>글로벌소통</span></span>
                </p>
              </li>
              <li>
                <span class="thumb4"></span>
                <p>
                  <span>250만<span> 진성 팔로워를 통한</span></span>
                  <span>6억 3천 명의 <span>홍보 규모</span></span>
                </p>
              </li>
              <li>
                <span class="thumb5"></span>
                <p>
                  <span>모바일 게임 <span>4천만 다운로드</span></span>
                  <span>매월 <span>250만 명 플레이</span></span>
                </p>
              </li>
            </ul>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-pagination-h"
            slot="pagination"
          ></div>
        </swiper>
      </swiper-slide>
      <!-- //value -->

      <!-- nollarva -->
      <swiper-slide>
        <div class="nollarvaBox">
          <h2>
            재미에 놀라<br />
            수익에 놀라<br />
            공간에 놀라
          </h2>
          <h3>
            <span>놀라바</span>
            무인 스마트 스토어와<br />
            인기 캐릭터 라바와의 놀라운 만남
          </h3>
        </div>
      </swiper-slide>
      <!-- //nollarva -->

      <!-- special -->
      <swiper-slide>
        <div class="specialBox">
          <h2>
            <span>트렌드와 재미가 있는 <span>스페셜 코너로</span></span>
            <br />
            <span>고객의 눈길을 사로잡다</span>
          </h2>
          <ul>
            <li>
              <span class="title1">가격에 놀라바</span>
              <p>Trend <br>best item 20</p>
            </li>
            <li>
              <span class="title2">제품에 놀라바</span>
              <p>브랜드 Item 들의<br> 컨셉 매대</p>
            </li>
            <li>
              <span class="title3">재미에 놀라바</span>
              <p>우리 동네 인플루언서,<br> 아티스트들의 MD 추천</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <!-- //special -->

      <!-- benefit -->
      <swiper-slide>
        <div class="benefitBox">
          <h2>
            <span>편안하고 신뢰할 수 있는 <span>운영 시스템과</span></span>
            <br />
            <span>경쟁력있는 독자성으로 무장하다</span>
          </h2>
          <ul>
            <li>
              <strong>편안한 점포 운영</strong>
              <p>
                <span>하루 1시간 이내의 시간 투자로</span>
                <span>정상 운영이 가능한 <br /><span>무인 스마트 스토어</span></span>
              </p>
            </li>
            <li>
              <strong>안정적 수익</strong>
              <p>
                <span>식음료 제품은 물론, <br /><span>라바의 브랜드를 통한</span></span>
                <span>독자적인 상품과 큐레이션</span>
              </p>
            </li>
            <li>
              <strong>믿음직한 시스템</strong>
              <p>
                <span>투바앤과 신세계아이앤씨의 <br /><span>전략적 제휴로</span></span>
                <span>통합운영관리 솔루션 제공</span>
              </p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <!-- //benefit -->

      <!-- store -->
      <swiper-slide>
        <swiper
          class="swiper vertical storeBox"
          :options="swiperOptionSub01"
          ref="swiperSub02"
        >
          <swiper-slide class="store1">
            <h2>Store<br> Front SIDE</h2>
            <span>
              <img src="~@/assets/img/bg_store1_mo.jpg" alt="">
              <img src="~@/assets/img/bg_store1_pc.jpg" alt="">
            </span>
          </swiper-slide>
          <swiper-slide class="store2">
            <h2>Interior<br> Front SIDE</h2>
            <span>
              <img src="~@/assets/img/bg_store2_mo.jpg" alt="">
              <img src="~@/assets/img/bg_store2_pc.jpg" alt="">
            </span>
          </swiper-slide>
          <swiper-slide class="store3">
            <h2>Interior<br> LEFT SIDE</h2>
            <span>
              <img src="~@/assets/img/bg_store3_mo.jpg" alt="">
              <img src="~@/assets/img/bg_store3_pc.jpg" alt="">
            </span>
          </swiper-slide>
          <swiper-slide class="store4">
            <h2>Interior<br> RIGHT SIDE</h2>
            <span>
              <img src="~@/assets/img/bg_store4_mo.jpg" alt="">
              <img src="~@/assets/img/bg_store4_pc.jpg" alt="">
            </span>
          </swiper-slide>
          <swiper-slide class="store5">
            <h2>Store<br> BACK SIDE</h2>
            <span>
              <img src="~@/assets/img/bg_store5_mo.jpg" alt="">
              <img src="~@/assets/img/bg_store5_pc.jpg" alt="">
            </span>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-pagination-h"
            slot="pagination"
          ></div>
        </swiper>
      </swiper-slide>
      <!-- //store -->

      <!-- system -->
      <swiper-slide>
        <div class="systemBox">
          <h2>신세계아이앤씨의 첨단 시스템 도입으로<br> 차별화된 안정성을 확보하다</h2>
          <span>
            <img src="~@/assets/img/bg_system_mo.jpg" alt="">
            <img src="~@/assets/img/bg_system_pc.jpg" alt="">
          </span>
        </div>
      </swiper-slide>
      <!-- //system -->

      <!-- qna -->
      <swiper-slide>
        <div class="qnaBox">
          <div class="inner">
            <ul>
              <li>
                <strong>놀라바만의 장점은 무엇인가요?</strong>
                <p>하나. 강력한 라바 브랜드를 바탕으로 누구나 오고 싶은 핫플레이스 매장입니다. 둘. 탄탄한 물류 시스템을 기반으로 메이저 편의점보다 저렴하게 물품을 공급합니다. 셋. 무인 점포로 인건비 0로 수익을 극대화할 수 있습니다.</p>
              </li>
              <li>
                <strong>투잡으로도 가능한가요?</strong>
                <p>네 가능합니다. 무인점포이기에 가맹점주님들이 하루 1시간 정도 시간만 내시면 운영 가능하게 시스템이 구비되어 있습니다.</p>
              </li>
              <li>
                <strong>가게 운영은 한 번도 해보지 않았는데 오픈이 가능할까요?</strong>
                <p>네 물론입니다. 가맹본사, 신세계, 물류업체에서 가맹점주님들께 오픈 및 원할한 운영이 가능하도록 지속적인 지원을 해 드립니다.</p>
              </li>
              <li>
                <strong>무인상점이면 도난이 많이 발생하진 않을까요?</strong>
                <p>아닙니다. 통계에 따르면 무인 편의점은 1%대의 손실율을 보이고 있어, 유인 편의점과 큰 차이가 없다고 말씀드릴 수 있습니다.</p>
              </li>
              <li>
                <strong>지방인데 매장 자리를 어떻게 찾아야 하나요?</strong>
                <p>본사 상권 분석팀이 예비 점주님들을 돕습니다. 서울뿐만 아니라 전국 어디서든 오픈이 가능합니다. 본사 영업팀에서 지역 특성에 맞는 상권 분석 후 가맹점주님 거주지 1km이내 위주로 각 가맹점주님들께 최적의 자리를 찾아 드립니다.</p>
              </li>
              <li>
                <strong>내가 원하는 위치와 입지에서도 오픈이 가능한가요?</strong>
                <p>입지 및 경제성이 있을 경우 오픈 가능합니다. 다만 경제성이 미비할 경우 가맹점주님께 다른 자리를 추천해 드립니다.</p>
              </li>
              <li>
                <strong>창업을 위해서 점포가 어느 정도의 면적이 필요한가요?</strong>
                <p>실평수 기준 놀라바 무인점포 소상공인 창업평수 12평 기준이 가장 보편적인 평수입니다. 10평~20평 정도가 적정 수준입니다. 30평~50평 큰 평수도 가능합니다.</p>
              </li>
              <li>
                <strong>가맹사업에 대해 자세하게 알고 싶은데 어떻게 해야 할까요?</strong>
                <p>광화문 본사 직영 매장에 방문하시면 일일 점장교육 및 대면 상담을 통해, 매장에 대한 상세한 정보를 얻으실 수 있습니다.</p>
              </li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <!-- //qna -->

      <!-- contact -->
      <swiper-slide>
        <div class="contactBox">
          <div class="inner">
            <div class="info">
              <h2>놀라바 무인 스마트 스토어</h2>
              <ul>
                <li>
                  <span>가맹사업문의.</span>
                  <span><strong>070. 4609. 6511</strong></span>
                </li>
                <li>
                  <span>주소</span>
                  <span>서울특별시 종로구 경희궁 1길 1  투바앤빌딩<br>(우. 03176)</span>
                </li>
              </ul>
            </div>

            <naver-maps :width="600" :height="250" :mapOptions="mapOptions">
              <naver-marker :lat="37.5706558427026" :lng="126.971684721382"></naver-marker>
            </naver-maps>
          </div>
        </div>
      </swiper-slide>
      <!-- //contact -->

      <!-- footer -->
      <swiper-slide class="footer">
        <div>
          <span>놀라바</span>
          <address>
            주소 : 서울특별시 종로구 경희궁 1길 1 투바앤빌딩 (우03176)
            문의 전화 : 070-4609-6511
          </address>
          <p>Copyright 2021 TubanRetail all rights reserved.</p>
        </div>
      </swiper-slide>
      <!-- //footer -->

    </swiper>
      <div
        class="swiper-pagination swiper-pagination-v"
        slot="pagination"
        v-show="pageInfoList.length - 1 != nowPage"
        ref="pagination"
      ></div>
      <!-- <ul style="position:absolute;bottom:30px;left:30px;z-index:500;background:red;">
        <li @click="qwe(0)">1</li>
        <li>2</li>
        <li>3</li>
      </ul> -->
    <button
      type="button"
      @click.self="scrollClickBtn($event)"
      :class="{ on: pageInfoList.length - 1 == nowPage }"
    ></button>
  </div>
</template>

<script>
export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  computed: {
    swiperMain() {
      return this.$refs.swiperMain.$swiper;
    },
    swiperSub01() {
      return this.$refs.swiperSub01.$swiper;
    },
    swiperSub02() {
      return this.$refs.swiperSub02.$swiper;
    },
  },
  data() {
    return {
      mapOptions: {
        lat: 37.5706558427026,
        lng: 126.971684721382,
        zoomControl: false,
        draggable: false
      },
      swiperOptionMain: {
        slidesPerView :'auto',
        direction: "vertical",
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        speed: 500,
        pagination: {
          el: ".swiper-pagination-v",
          clickable: true,
          renderBullet: function (index, className) {
            if (index == 0) {
              index = "<em>I</em>NTRODUCE";
            } else if (index == 1) {
              index = "<em>V</em>ALUE";
            } else if (index == 2) {
              index = "<em>N</em>OLLARVA";
            } else if (index == 3) {
              index = "<em>S</em>PECIAL SPACE";
            } else if (index == 4) {
              index = "<em>B</em>ENEFIT";
            } else if (index == 5) {
              index = "<em>S</em>TORE DESIGN";
            } else if (index == 6) {
              index = "<em>S</em>YSTEM";
            } else if (index == 7) {
              index = "<em>Q</em> & A";
            } else if (index == 8) {
              index = "<em>C</em>ONTACT";
            } else if (index == 9) {
              index = "<em>F</em>OOTER";
            }
            return '<span class="' + className + '">' + index + "</span>";
          },
        },
      },
      swiperOptionSub01: {
        direction: "horizontal",
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        speed: 500,
        pagination: {
          el: ".swiper-pagination-h",
          clickable: true,
        },
      },
      nowPage: 0,
      nowSubPage: 0,
      pageInfoList: [
        { page: 1, child: [1], refKey: "" },
        { page: 2, child: [1, 2, 3], refKey: "swiperSub01" },
        { page: 3, child: [1], refKey: "" },
        { page: 4, child: [1], refKey: "" },
        { page: 5, child: [1], refKey: "" },
        { page: 6, child: [1, 2, 3, 4, 5], refKey: "swiperSub02" },
        { page: 7, child: [1], refKey: "" },
        { page: 8, child: [1], refKey: "" },
        { page: 9, child: [1], refKey: "" },
        { page: 10, child: [1], refKey: "" },
      ],
      touchStartY: 0,
      currentY: 0,
    };
  },
  mounted() {
    this.swiperMain.mousewheel.disable();
    this.swiperSub01.mousewheel.disable();
    this.swiperSub02.mousewheel.disable();
    // console.log(this.pageInfoList);
    window.addEventListener("wheel", this.debounce(this.wheelDetect, 250));

    this.$refs.swiperMain.$el.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    this.$refs.swiperMain.$el.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    this.$refs.swiperMain.$el.addEventListener("touchend", this.touchEnd, { passive: false }); // mobile devices
  },
  watch: {
    nowPage(idx) {
      this.swiperMain.slideTo(idx);
      console.log("nowPage", idx);
    },
    nowSubPage(idx) {
      var refKey = this.pageInfoList[this.nowPage].refKey;
      if (refKey.length > 0) {
        this[refKey].slideTo(idx);
      } else {
        this.nowSubPage = 0;
      }
      // console.log("nowSubPage", idx)
    },
  },
  methods: {
    // qwe(num){
    //   console.log(num);
    //   this.swiperMain.slideTo(num);
    // },
    nextPage() {
      if (this.pageInfoList[this.nowPage].child.length - 1 > this.nowSubPage) {
        this.nowSubPage += 1;
      } else {
        if (this.pageInfoList.length - 1 > this.nowPage) {
          this.nowPage = this.nowPage + 1;
          this.nowSubPage = 0;
        }
      }
      console.log("nextPage.now / sub ::: ", this.nowPage, " / ", this.nowSubPage);
    },
    prevPage() {
      if (this.nowSubPage === 0 && this.nowPage > 0) {
        this.nowPage = this.nowPage - 1;

        var tmpData = this.pageInfoList[this.nowPage].child;
        this.nowSubPage = tmpData.length - 1;
      } else {
        if (this.nowSubPage > 0) {
          this.nowSubPage = this.nowSubPage - 1;
        }
      }
      console.log(
        "prevPage.now / sub ::: ",
        this.nowPage,
        " / ",
        this.nowSubPage
      );
    },
    debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    },
    wheelDetect(e) {
      if (e.deltaY < 0) {
        // console.log('up')
        this.prevPage();
      } else {
        // console.log('down')
        this.nextPage();
      }
    },
    onSlideChange() {
      // pagination click 시 슬라이드 순서 연동
      this.nowPage = this.swiperMain.realIndex;
    },
    scrollClickBtn(event) {
      this.nextPage();
      if( event.target.classList.contains('on') ){
        this.swiperMain.slideTo(0);
        this.swiperSub01.slideTo(0);
        this.swiperSub02.slideTo(0);
      }
    },
    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      e.preventDefault();
      this.currentY = e.touches[0].clientY;
    },
    touchEnd(e) {
      e.preventDefault();
      console.log(this.touchStartY, this.currentY);
      if(this.currentY != 0){
        if (this.touchStartY > this.currentY ) {
          this.nextPage();
        } else {
          this.prevPage();
        }
      }
      this.currentY = 0;
    },
  },
  created() {
    //window.addEventListener("touchstart", this.pagination, { passive: false }); // mobile devices
    //window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    //window.addEventListener("touchend", this.touchEnd, { passive: false }); // mobile devices
  },
  destroyed() {
    //window.removeEventListener("touchstart", this.touchStart); // mobile devices
    //window.removeEventListener("touchmove", this.touchMove); // mobile devices
    //window.removeEventListener("touchend", this.touchEnd); // mobile devices
  },
};
</script>