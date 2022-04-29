export default function Pages() {
    return (
        <div id="Home">
            <div id="content">
                <section id="fiest_section">
                    <div className="section-inner">
                        <h2>
                            <span>Welcom to KOREA!!</span><br />
                            <span>night view spots</span><br />
                            <span>Please visit</span>
                        </h2>
                        <p>
                            한국 안에 있는 야경 명소에 대한 정보들을 담아 보았습니다.<br />
                            야경을 좋아하는 사람들을 위한 페이지 입니다. 방문해 주셔서 감사합니다.<br />
                            오늘 하루도 좋은 배경을 보며 하루의 마무리를 즐겁게 끝내셨으면 좋겠습니다.
                        </p>
                        <button type="button" className="btn-video-watch">
                            <span> Watch vidio</span>
                        </button>
                        <div className="btn-app-down">
                            <a href="https://namu.wiki/w/%EC%95%BC%EA%B2%BD">나무위키</a>
                            <a href="https://ko.wikipedia.org/wiki/%EC%95%BC%EA%B2%BD">위키백과</a>
                        </div>
                    </div>    
                    <div className="movie-area">
                        <video muted autoplay loop>
                            <source src="https://vod-progressive.akamaized.net/exp=1649057002~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3498%2F23%2F592491784%2F2792184565.mp4~hmac=834b788f5c7c32b0d32ed6d19ec03a2a0fdce3293547d378016d96ee7eb9d939/vimeo-prod-skyfire-std-us/01/3498/23/592491784/2792184565.mp4?filename=Tower+-+86350.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>
                <section id="second_section">
                    <div className="movie-area viewportable">
                        <video muted autoplay loop >
                            <source src="https://vod-progressive.akamaized.net/exp=1649056862~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4699%2F12%2F323496013%2F1259751207.mp4~hmac=ad60ae957b721e51ec144eaf61f2e01ab5d31a6a88d40dbca190f04b7ad0719d/vimeo-prod-skyfire-std-us/01/4699/12/323496013/1259751207.mp4?filename=Seoul+-+21985.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="section-inner"  >
                      <h2 className="viewportable show">
                          <span>도시의 밤</span><br />
                          <span>빛으로 하는 힐링</span>
                      </h2>
                    </div>
                </section>
                <section id="third_section">
                    <div className="section-inner">
                      <h2>
                          <span> SNS 명소</span><br />
                          <span>sns 비슷한 사진으로 구성하기 혹은 전국에 명소를 포인트 지도로 만들기</span> 
                      </h2>
                      <p>
                      방문 후기 글 만들기<br />
                      We build the tools to make that dream a reality. 
                      </p>
                    </div>
              </section>
              <section id="fourth_section">
                  <div className="section-inner">
                      원형 스와이프
                  </div>
              </section>
              <section id="fifth_section" bg-color="gray" data-nav-color="gray">
                  <div className="section-inner">
                      <h2>New</h2>
                      <p>설명</p>
                      <div className="new-container">
                          <ul>
                              <li className="viewportable show">
                                  <a href="#!">
                                      <div className="contents">
                                          <p className="msg">
                                              데이트 코스로 야경 만한게 없죠!! 와 같은 방명록 혹은 뉴스 기사 모으기
                                          </p>
                                      </div>
                                  </a>
                              </li>
                              <li className="viewportable show">
                                  <a href="#!">
                                      <div className="contents">
                                          <p className="msg">
                                              Gluwa has made it to the Big Apple! 🗽 Watch our enthralling 3D advert which is on display now at Times Square New York City! 📺 ...
                                          </p>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      댓글기능
                  </div>
              </section>
          </div> 
      </div>
  )
}