
const headerString = '<div class="headers-container">'+
'    <div class="recently-viewed">'+
'        <div class="g-container g-clearfix">'+
'            <div class="row">'+
'                <a class="close-btn ion-close-round"></a>'+
'                <div class="col-1of1">'+
'                    <p><span id="numRecentlyViewed">0</span> Recently Viewed Full-Time Program(s) <a class="g-btn-4 g-btn-sm g-pull-right" onclick="PrintProgramsPdf(); location.href=\'/Sait/PrintProgramsPdf\'"><span class="g-icon-left ion-android-download"></span>Download Your Career and Program Guide</a></p>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    <header class="g-header-v2">'+
'        <div class="g-header-top">'+
'            <div class="g-container g-clearfix">'+
'                <div class="logo-sm" style="display: none;">'+
'                    <a href="" itemprop="url" target="">'+
'                        <img class="desktop-logo" src="https://www.sait.ca/assets/images/saitlogo_sm.svg" alt="SAIT Small Logo">'+
'                        <img class="mobile-logo" src="https://www.sait.ca/assets/images/sait_logo_mobile.svg" alt="SAIT Small Logo">'+
'                    </a>'+
'                </div>'+
'                <div class="logo box-shadow">'+
'                    <a href="" itemprop="url" target=""><img src="https://www.sait.ca/assets/images/saitlogo.svg" alt="SAIT Logo " itemprop="logo"></a>'+
'                </div>'+
'                <div class="row secondary-menu-row">'+
'                    <div class="col-1of1">'+
'                        <div id="mobile-header-slider">'+
'                            <mobileheader id="r-mobile-promo" style="position:absolute; top:17px; font-size:1em;"><div class="r-slider r-visible"></div>'+
'                            </mobileheader>'+
'                        </div>'+
'                        <ul class="secondary-menu">'+
'                            <li><a class="recentlyViewedToggle"><span class="ion-eye g-icon-left"></span>Recently Viewed Programs</a></li>'+
'                            <li><a class="tooltip-login tooltipstered"><span class="ion-locked g-icon-left"></span>Login<span class="ion-ios-arrow-down g-icon-right"></span></a></li>'+
'                            <li class="search searchToggle"><a><span class="ion-search"></span></a></li>'+
'                        </ul>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'        <div class="g-header-bottom">'+
'            <div class="g-container g-clearfix">'+
'                <div class="row main-menu-row">'+
'                    <div class="col-1of1">'+
'                        <div class="navToggle"><a class="g-tab-toggle"><span class="ion-navicon-round" aria-hidden="true"></span>Menu</a></div>'+
'                        <ul class="main-menu">'+
'                            <li class="">'+
'                                <a href="programs-and-courses" target="">Programs & Courses<span class="ion-chevron-down"></span></a>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu" style="top: 102px;">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <ul class="g-primary-list">'+
'                                                    <li><a href="/programs-and-courses">View Programs A-Z</a></li>'+
'                                                    <li><a href="/areas-of-interest">View Areas of Interest</a></li>'+
'                                                    <li><a href="https://coned.sait.ca/" target="_blank" class="extLink" title="Continuing Education" rel="noopener">Continuing Education</a></li>'+
'                                                    <li><a class="intLink" href="/programs-and-courses/continuing-education-and-part-time-studies" title="Part-Time Studies">Part-Time Studies</a></li>'+
'                                                    <li><a href="/programs-and-courses/apprenticeships-and-trades">Apprenticeships & Trades</a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Other</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/programs-and-courses/full-time-studies/academic-upgrading" title="Academic Upgrading">Academic Upgrading</a></li>'+
'                                                    <li><a href="/programs-and-courses/full-time-studies/academic-upgrading-indigenous-program">Academic Upgrading - Indigenous</a></li>'+
'                                                    <li><a href="/programs-and-courses/full-time-studies/english-language-foundations">English Language Foundations</a></li>'+
'                                                    <li><a href="/openstudies" class="intLink" title="Open Studies">Open Studies</a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Youth Programs</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a class="intLink" href="/youth-programs/career-exploration-centre" title="Career Exploration Centre">Career Exploration Centre</a></li>'+
'                                                    <li><a href="/programs-and-courses/dual-credit-programs">Dual-Credit Programs</a></li>'+
'                                                    <li><a class="intLink" href="/youth-programs/year-round-youth-programs" title="Year-round youth programs">Year-Round Youth Programs</a></li>'+
'                                                    <li><a class="intLink" href="/student-life/your-campus/sait-recreation" title="Youth recreation programs">Youth Recreation Programs</a></li>'+
'                                                    <li><a href="/summer-camps">Summer Camps</a></li>'+
'                                                    <li><a class="all-link" href="/youth-programs" title="Youth Programs">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">More Offerings</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="http://culinarycampus.ca" rel="noopener" target="_blank">Culinary Campus <span class="ion-forward g-icon-right"></span></a></li>'+
'                                                    <li><a href="https://tastemarket.ca" rel="noopener" target="_blank">The Tastemarket <span class="ion-forward g-icon-right"></span></a></li>'+
'                                                    <li><a href="/student-life/your-campus/sait-recreation" title="SAIT Recreation">SAIT Recreation</a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <div id="r-pc-bottom"><div></div></div>'+
'                                    <div id="ban-ani-menu"></div>'+
'                                    <div class="info-banner info-banner-bottom" style="background-image: url(\'Prebuilt/img/campaign-assets/2020/future-proof/2020-6-future-proof-mm-banner-bg.jpg\');"><a href="https://www.sait.ca/futureproof" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Future-Proof-June-2020\');"><img style="max-height: 20px;" alt="Are you ready to be future-proofed" src="https://sait.ca/assets/Prebuilt/img/campaign-assets/2020/future-proof/2020-6-fp-title-mm.png" caption="false" height="20">            Start here <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px;"></a></div>'+
'                                    <!--'+
'                                      <div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/open-house" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Open-House-Feb-2020\');"><img alt="Open House - Feb 8" src="https://www.sait.ca/assets//Prebuilt/img/campaign-assets/2020/openhouse/february/2020-2-oh-title-mm.png" style="max-height: 14px; padding-right: 10px;" />     Explore our programs starting in spring and fall.     Register now'+
'                                          <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>'+
'                                      --><!--<div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Info-Sessions-Mar-2020\');"><img alt="Infomation sessions - March 5-20" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/mar/2020-3-is-title-mm.png" style="max-height: 16px; padding-right: 10px;" />     Get the program details you need.      '+
'            <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>--></div>    </li>'+
'                            <li class="">'+
'                                <a href="admissions" target="">Admissions<span class="ion-chevron-down"></span></a>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu" style="top: 102px;">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <ul class="g-primary-list">'+
'                                                    <li><a href="/admissions/admission-and-selection/admission-requirements">Admission Requirements</a></li>'+
'                                                    <li><a href="/student-life/academic-help/academic-services/testing-services">Admission Testing</a></li>'+
'                                                    <li><a href="/admissions/how-to-apply/how-to-apply">How to Apply</a></li>'+
'                                                    <li><a href="/admissions/how-to-apply/how-to-apply-checklist">How to Apply Checklist</a></li>'+
'                                                    <li><a href="/admissions/transfer-options">Transfer Options </a></li>'+
'                                                    <li><a href="/admissions/admission-and-selection/english-proficiency">English Proficiency</a></li>'+
'                                                    <li><a class="all-link" href="/admissions">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">International Students</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/international-students/programs-for-international-students">Programs for International Students</a></li>'+
'                                                    <li><a href="/admissions/tuition-and-financial-aid/tuition-and-fees">International Tuition & Fees</a></li>'+
'                                                    <li><a href="/international-students/future-international-students/how-to-apply">How to Apply</a></li>'+
'                                                    <li><a href="/admissions/how-to-apply/how-to-apply-checklist">How to Apply Checklist</a></li>'+
'                                                    <li><a href="/admissions/admission-and-selection/international-document-assessment">International Document Assessment</a></li>'+
'                                                    <li><a href="/international-students/future-international-students/study-and-live-in-canada">Study and Live in Canada</a></li>'+
'                                                    <li><a class="all-link" href="/international-students">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Tuition and Financial Aid</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/admissions/tuition-and-financial-aid/payment-options">Payment Options</a></li>'+
'                                                    <li><a href="/admissions/tuition-and-financial-aid/student-loans">Student Loans</a></li>'+
'                                                    <li><a href="/admissions/tuition-and-financial-aid/student-awards">Student Awards</a></li>'+
'                                                    <li><a class="all-link" href="/admissions/tuition-and-financial-aid">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title openhousepromote">Events</div>'+
'                                                <a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Online-Info-Sessions-Apr-2020\');"><img alt="Online Information Sessions" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/apr/2020-4-is-title-mm.png" style="width: 100%;"></a><!--<a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Info-Sessions-Mar-2020\');"><img alt="Information Sessions - March 5-20" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/mar/2020-3-info-sessions-mm-rect.jpg" style="width: 100%;" /></a>--><!--<a href="https://www.sait.ca/future-students/shape-your-world" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'SYW-into-2019\');"><img alt="Applications open for 2019" src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/2018/applications-open-mm-ad.jpg" style="width: 100%;" /></a>--><!--<a href="https://www.sait.ca/future-students/visit-campus/continuing-education-info-night" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Continuing-Education-Night-2018\');"><img alt="Continuing Education Night, November 20, 2018" src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/coned-info-night/coned-information-night-mm-ad.jpg" style="width: 100%;" /></a>--><!--<div class="t18-adm"></div>-->'+
'                                                <div id="r-admissions-event"></div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a class="all-link" href="/event-calendar" style="padding-bottom: 20px;">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <div id="r-admission-bottom"><div></div></div>'+
'                                    <div class="info-banner info-banner-bottom" style="background-image: url(\'Prebuilt/img/campaign-assets/2020/future-proof/2020-6-future-proof-mm-banner-bg.jpg\');"><a href="https://www.sait.ca/futureproof" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Future-Proof-June-2020\');"><img style="max-height: 20px;" alt="Are you ready to be future-proofed" src="https://sait.ca/assets/Prebuilt/img/campaign-assets/2020/future-proof/2020-6-fp-title-mm.png" caption="false" height="20">            Start here <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px;"></a></div>'+
'                                    <!--<div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Info-Sessions-Mar-2020\');"><img alt="Infomation sessions - March 5-20" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/mar/2020-3-is-title-mm.png" style="max-height: 16px; padding-right: 10px;" />     Get the program details you need.      '+
'                                          <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>--><!--<div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Info-Sessions-May-2019\');"><img alt="Info Sessions – May 13, 14, 15" src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/5/2019-5-is-title-mm.png" style="max-height: 14px; padding-right: 10px;" />     Get the program details you need.    '+
'            <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div><div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/campus-tours" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Tour-Days-Mar-2019\');">Campus Tours - March 20       Explore our state-of-the-art labs and learning spaces.       REGISTER NOW  <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/open-house/2019-2-oh-mm-go.png" style="max-height: 14px; padding-bottom: 2;" /></a></div><div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Info-Sessions-Apr-2019\');"><img alt="Info Sessions – April 9 and 10" src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/4/2019-4-is-title-mm.png" />     Get the program details you need.     <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>--></div>    </li>'+
'                            <li class="">'+
'                                <a href="student-life" target="">Student Life<span class="ion-chevron-down"></span></a>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu" style="top: 102px;">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Academic Support</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/student-life/academic-help/academic-services/academic-coaching-and-tutoring">Academic Coaching and Tutoring</a></li>'+
'                                                    <li><a class="intLink" href="/student-life/academic-help/academic-services/accessibility-services">Accessibility Services</a></li>'+
'                                                    <li><a href="/student-life/reg-erhardt-library/reg-erhardt-library">Library</a></li>'+
'                                                    <li><a href="/student-life/student-services/technical-support-and-resources"> Technical Support and Resources</a></li>'+
'                                                    <li><a href="/student-life/academic-help/academic-services" title="Testing Services">Testing Services</a></li>'+
'                                                    <li><a class="intLink" href="/admissions/transfer-options">Transfer Options</a></li>'+
'                                                    <li><a class="all-link" href="/student-life">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Health, Wellness & Security</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/student-life/health-wellness-and-safety/health-services-clinic">Health Clinic</a></li>'+
'                                                    <li><a href="/about-sait/campus/campus-security">Security</a></li>'+
'                                                    <li><a href="/student-life/health-wellness-and-safety/safewalk">Safewalk</a></li>'+
'                                                    <li><a href="/student-life/health-wellness-and-safety/student-development-and-counselling">Student Development & Counselling</a></li>'+
'                                                    <li><a href="/student-life/health-wellness-and-safety/student-health-and-dental-plan">Student Health & Dental</a></li>'+
'                                                    <li><a class="all-link" href="/student-life">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Your Campus</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/student-life/your-campus/sait-recreation">SAIT Recreation</a></li>'+
'                                                    <li><a href="http://www.bookstore.sait.ca/" rel="noopener" target="_blank">SAIT Bookstore <span class="ion-forward g-icon-right"></span></a></li>'+
'                                                    <li><a href="/about-sait/campus/dining-on-campus">Dining on Campus</a></li>'+
'                                                    <li><a class="intLink" href="/about-sait/campus/housing">Housing</a></li>'+
'                                                    <li><a href="/student-life/your-campus/pride-at-sait" class="intLink" title="Pride at SAIT">Pride at SAIT</a></li>'+
'                                                    <li><a class="all-link" href="/student-life">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Student Services</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/student-life/your-campus/career-advancement-services">Career Advancement Services</a></li>'+
'                                                    <li><a href="/student-life/student-services/graduation/convocation">Convocation</a></li>'+
'                                                    <li><a href="/about-sait/campus/helpline">Helpline</a></li>'+
'                                                    <li><a href="/student-life/student-services/office-of-the-registrar">Office of the Registrar</a></li>'+
'                                                    <li><a href="/student-life/student-services/office-of-the-registrar/order-transcripts-and-credentials">Order Transcripts & Credentials</a></li>'+
'                                                    <li><a href="/student-life/student-services/sait-ecard">SAIT e-card</a></li>'+
'                                                    <li><a class="all-link" href="/student-life">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="info-banner info-banner-bottom" style="background-image: url(\'Prebuilt/img/campaign-assets/2020/future-proof/2020-6-future-proof-mm-banner-bg.jpg\');"><a href="https://www.sait.ca/futureproof" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Future-Proof-June-2020\');"><img style="max-height: 20px;" alt="Are you ready to be future-proofed" src="https://sait.ca/assets/Prebuilt/img/campaign-assets/2020/future-proof/2020-6-fp-title-mm.png" caption="false" height="20">            Start here <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px;"></a></div>'+
'                                    <!--<div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/student-life/student-services/convocation" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Convocation-June-2019\');">Convocation will be held June 11 - 13 at the Jubilee Auditorium.     LEARN MORE'+
'                                          <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>-->'+
'                                    <div id="r-student-bottom"><div></div></div>'+
'                                </div>    </li>'+
'                            <li class="">'+
'                                <a href="alumni" target="">Alumni<span class="ion-chevron-down"></span></a>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu" style="top: 102px;">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 g-empty"></div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <ul class="g-primary-list">'+
'                                                    <li><a href="/alumni/link-magazine">LINK Magazine</a></li>'+
'                                                    <li><a href="/alumni/sait-alumni-awards">Alumni Awards</a></li>'+
'                                                    <li><a href="/alumni/alumni-perks">Alumni Perks</a></li>'+
'                                                    <li><a href="/alumni/stay-connected">Stay Connected</a></li>'+
'                                                    <li><a href="/alumni">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Donors</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/donors/donor-stories">Donor Stories</a></li>'+
'                                                    <li><a href="/donors/ways-to-give">Ways to Give</a></li>'+
'                                                    <li><a href="/donors/donate-to-sait">Donate to SAIT</a></li>'+
'                                                    <li><a href="/donors/reports-to-donors">Reports to Donors</a></li>'+
'                                                    <li><a class="all-link" href="/donors" title="Donors">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Alumni Events</div>'+
'                                                <!--<div class="timely-uevents-widget nav-cal"></div>-->'+
'                                                <div id="r-alumni-event"></div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a class="all-link" href="/event-calendar">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <br><!--<div class="info-banner info-banner-bottom" style="background: #4e6e20; box-shadow: none; margin-left: auto; margin-right: auto; text-align: center;"><a href="https://sait.imodules.com/s/1615/gid2/18/interior.aspx?sid=1615&gid=2&pgid=4844" event-category="Internal-Campaigns" event-label="AZ-Golf-Tournie-2019" event-action="Click-mm" class="event-ga-links">Register now for the 2019 SAIT Centennial Classic Golf Tournament</a></div>-->'+
'                                    <div id="r-alumni-bottom"><div></div></div>'+
'                                </div>    </li>'+
'                            <li>'+
'                                <a href="about-sait" target="">About SAIT<span class="ion-chevron-down"></span></a>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu" style="top: 102px;">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Campus</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/about-sait/campus/contact-us">Contact Us</a></li>'+
'                                                    <li><a href="/visit-campus">Visit Campus</a></li>'+
'                                                    <li><a href="http://tour.sait.ca/gsv/tour-sait.html" rel="noopener" target="_blank">Take Virtual Tour <span class="ion-forward g-icon-right"></span></a></li>'+
'                                                    <li><a href="/about-sait/campus/transit-and-parking">Transit and Parking</a></li>'+
'                                                    <li><a href="/about-sait/campus/dining-on-campus">Dining on Campus</a></li>'+
'                                                    <li><a href="/about-sait/campus/campus-map">Campus Map <span class="ion-map g-icon-right" style="color: #c0c0c0;"></span></a></li>'+
'                                                    <li><a class="all-link" href="/about-sait">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Who We Are</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/about-sait/who-we-are/sait-schools">SAIT Schools</a></li>'+
'                                                    <li><a href="/about-sait/media-centre/news-and-events">News & Events</a></li>'+
'                                                    <li><a href="/about-sait/media-centre/media-centre">Media Centre</a></li>'+
'                                                    <li><a href="/about-sait/who-we-are/publications">Publications </a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title">Administration</div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a href="/about-sait/administration/departments">Departments</a></li>'+
'                                                    <li><a href="/about-sait/administration/governance">Governance</a></li>'+
'                                                    <li><a href="/about-sait/administration/policies-and-procedures">Policies & Procedures</a></li>'+
'                                                    <li><a href="/about-sait/administration/your-future-starts-now-at-sait">Work at SAIT</a></li>'+
'                                                    <li><a class="all-link" href="/about-sait">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <div class="title openhousepromote">Events</div>'+
'                                                <div id="r-about-event"></div>'+
'                                                <a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Online-Info-Sessions-Apr-2020\');"><img alt="Online Information Sessions" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/apr/2020-4-is-title-mm.png" style="width: 100%;"></a><!--<a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Info-Sessions-Mar-2020\');"><img alt="Information Sessions - March 5-20" src="https://www.sait.ca/assets/Prebuilt/img/campaign-assets/2020/info-sessions/mar/2020-3-info-sessions-mm-rect.jpg" style="width: 100%;" /></a>--><!--<a href="https://www.sait.ca/future-students/visit-campus/campus-tours" onclick="ga(\'send\', \'event\', { eventCategory: \'Internal-Campaigns\', eventAction: \'Click-mm-ad\', eventLabel: \'Tour-Days-Mar-2019\' })"><img alt="Campus Tours - March 16 & 20. Register now to explore our state-of-the-art labs and learning spaces. Register today." src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/2019/td/3/2019-3-campus-tours-mm-ad.png" style="width: 100%;" /></a>--><!--<a href="http://sait.imodules.com/s/1615/crowdfunding/home.aspx?sid=1615&gid=2&pgid=3536&appealcode=19GDMSAIT" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm-ad\', \'Giving-Day-2018\');"><img alt="SAIT Giving Day - Oct 30 & 31, 2018" src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/givingday18/sait-giving-day-2018.jpg" style="width: 100%;" /></a>'+
'                      graphical promo<a href="#" onclick="ga(\'send\', \'event\', { eventCategory: \'Internal-Campaigns\', eventAction: \'Click\', eventLabel: \'Open-House-2018\' }); location.href = \'https://www.sait.ca/future-students/visit-campus/open-house-2018\';"><img alt="SAIT Open House - Friday, Oct. 19 & Saturday, Oct. 20 | 9 am - 3 pm" src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/openhouse18/2018-openhouse-mm.png" style="width: 100%;" /></a>'+
'                      -->'+
'                                                <div class="timely-uevents-widget nav-cal">'+
'                                                    <div class="t18-about"></div>'+
'                                                </div>'+
'                                                <ul class="g-secondary-list">'+
'                                                    <li><a class="all-link" href="/event-calendar" style="padding-bottom: 20px;">View All <span class="ion-ios-arrow-forward g-icon-right"></span></a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <div id="r-about-bottom"><div></div></div>'+
'                                    <div class="info-banner info-banner-bottom" style="background-image: url(\'Prebuilt/img/campaign-assets/2020/future-proof/2020-6-future-proof-mm-banner-bg.jpg\');"><a href="https://www.sait.ca/futureproof" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Future-Proof-June-2020\');"><img style="max-height: 20px;" alt="Are you ready to be future-proofed" src="https://sait.ca/assets/Prebuilt/img/campaign-assets/2020/future-proof/2020-6-fp-title-mm.png" caption="false" height="20">            Start here <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px;"></a></div>'+
'                                    <!--'+
'                                      <div class="info-banner info-banner-bottom" style="background-image: url(\'Prebuilt/img/campaign-assets/2020/convocation/2020-6-conv-mm-banner-bg.jpg\');"><a href="https://www.sait.ca/student-life/student-services/graduation/convocation/watch-live" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Convocation-Spring-2020\');"> Watch our Spring Convocation Ceremony     Watch Now'+
'                                          <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>--><!--<div class="info-banner info-banner-bottom"><a href="https://www.sait.ca/future-students/visit-campus/information-sessions" onclick="ga(\'send\', \'event\', \'Internal-Campaigns\', \'Click-mm\', \'Info-Sessions-Sept-2019\');"><img alt="Info Sessions – Sept 17, 18, 19, 24 & 25" src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/9/2019-9-is-title-mm.png" style="max-height: 14px; padding-right: 10px;" />     Get the program details you need.    '+
'            <img src="https://sait.ca/assets/prebuilt/img/campaign-assets/2019/is/3/2019-3-is-mm-go.png" style="max-height: 18px; padding-bottom: 0;" /></a></div>--></div>    </li>'+
'                            <li class="mobile-only heading-style">'+
'                                <div class="heading">Information for</div>'+
'                                <span class="ion-chevron-down mobileNavToggle"></span>'+
'                                <div class="mega-menu">'+
'                                    <div class="g-container">'+
'                                        <div class="row">'+
'                                            <div class="col-1of4 sm-1of2">'+
'                                                <ul class="g-primary-list">'+
'                                                    <li><a>Future students</a></li>'+
'                                                    <li><a>Aboriginal students</a></li>'+
'                                                    <li><a>International students</a></li>'+
'                                                    <li><a>Current students</a></li>'+
'                                                    <li><a>Business and industry</a></li>'+
'                                                    <li><a>Alumni</a></li>'+
'                                                    <li><a>Donors</a></li>'+
'                                                </ul>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </li>'+
'                        </ul>'+
'                        <div class="info-dropdown g-clearfix">'+
'                            <div class="label">Info for:</div>'+
'                            <div class="infoSelect select-container">'+
'                                <div class="selected">Current students</div>'+
'                                <div class="infoDropdown dropdown">'+
'                                    <div class="infoSelectItem dropdown-item g-active">Current students</div>'+
'                                    <div class="infoSelectItem dropdown-item">Future students</div>'+
'                                    <div class="infoSelectItem dropdown-item">Aboriginal students</div>'+
'                                    <div class="infoSelectItem dropdown-item">International students</div>'+
'                                    <div class="infoSelectItem dropdown-item">Business and industry</div>'+
'                                    <div class="infoSelectItem dropdown-item">Alumni</div>'+
'                                    <div class="infoSelectItem dropdown-item">Donors</div>'+
'                                </div>'+
'                            </div>'+
'                            <button type="submit">Go</button>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </header>'+
'</div>';

document.write(headerString);