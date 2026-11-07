// Markup of the invitation (converted from the original page).
export default function Page() {
  return (
    <>



<div id="opening"><video id="opening-video" playsInline preload="metadata" muted poster="assets/video-poster.jpg"><source src="opening-video.mp4" type="video/mp4" /></video><div id="tap-hint"><div className="tap-ring"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L20 12L6 20V4Z" fill="rgba(212,175,55,0.92)"></path></svg></div><span className="tap-label">Tap to Open</span></div></div>



<div id="petal-layer"></div>



<button id="music-control" aria-label="Toggle music"><svg className="disc" id="discIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.3"></circle><circle cx="12" cy="12" r="2.4" fill="#D4AF37"></circle></svg></button>



<div id="site"><section id="hero" className="banner-section"><img className="banner-img" src="assets/hero.jpg" alt="Kajol & Raj wedding invitation" /><div className="banner-overlay-card hero-overlay-card" data-fade=""><div className="hero-countdown"><div className="hc-unit"><div className="hc-num" id="hc-days">--</div><div className="hc-label">Days</div></div><div className="hc-sep">:</div><div className="hc-unit"><div className="hc-num" id="hc-hours">--</div><div className="hc-label">Hours</div></div><div className="hc-sep">:</div><div className="hc-unit"><div className="hc-num" id="hc-mins">--</div><div className="hc-label">Mins</div></div><div className="hc-sep">:</div><div className="hc-unit"><div className="hc-num" id="hc-secs">--</div><div className="hc-label">Secs</div></div></div></div><div className="scroll-cue"><span>Scroll</span><span className="line"></span></div></section><section className="banner-section" id="calligraphy"><img className="banner-img" src="assets/calligraphy.jpg" alt="A special day awaits" /></section><section className="section paper-texture" id="details"><div className="container"><div className="section-head"><div className="eyebrow">Join Us</div><h2 className="section-title">Wedding Details</h2><div className="detail-divider"></div></div><div className="details-grid"><div className="detail-card" data-fade=""><div className="detail-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#D4AF37" strokeWidth="1.3"></rect><path d="M3 10H21" stroke="#D4AF37" strokeWidth="1.3"></path><path d="M8 3V7M16 3V7" stroke="#D4AF37" strokeWidth="1.3" strokeLinecap="round"></path></svg></div><div className="detail-label">Date</div><div className="detail-main" id="detailDate">Wednesday</div><div className="detail-sub" id="detailDateSub">2 December 2026</div></div><div className="detail-card" data-fade=""><div className="detail-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.3"></circle><path d="M12 7V12L15.5 14" stroke="#D4AF37" strokeWidth="1.3" strokeLinecap="round"></path></svg></div><div className="detail-label">Time</div><div className="detail-main" id="detailTime">7:00 PM</div><div className="detail-sub">Onwards</div></div><div className="detail-card" data-fade=""><div className="detail-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22C12 22 19 14.6 19 9.5C19 5.36 15.64 2 12 2C8.36 2 5 5.36 5 9.5C5 14.6 12 22 12 22Z" stroke="#D4AF37" strokeWidth="1.3"></path><circle cx="12" cy="9.5" r="2.5" stroke="#D4AF37" strokeWidth="1.3"></circle></svg></div><div className="detail-label">Venue</div><div className="detail-main" id="detailVenue">Shiv Angan Banquet &amp; Resort</div><div className="detail-sub" id="detailVenueSub">Ring Road Phase 1, Dandupur, Varanasi</div></div></div></div></section><section className="banner-section" id="location"><img className="banner-img" src="assets/map.jpg" alt="Shiv Angan Banquet & Resort location map" /><a className="map-hit" id="mapLink2" href="#" target="_blank" rel="noopener" aria-label="View location in Maps"></a></section></div>



<footer id="footer" className="banner-section"><img className="banner-img" src="assets/footer.jpg" alt="Thank you for celebrating with us" /></footer>

<audio id="bgMusic" src="assets/wedding-song.mp3" loop preload="auto"></audio>





    </>
  )
}
