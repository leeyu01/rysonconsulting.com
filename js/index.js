'use strict';

const featTitle = `How are we different?`;

const feat1Title = `Pixel-Perfect Design`;
const feat1Desc = `
    Experience our Starter Kit featuring our original, signature sleek and modern design. 
    Unlike templates commonly utilized by platforms such as WordPress or Bootstrap, 
    our output is entirely unique. <br/><br/>
    Your website will boast an exclusive and professional appearance, ensuring it stands out distinctly from the crowd.
`;

const feat2Title = `Professional Branding`;
const feat2Desc = `
    Novice website creators often overlook critical features such as <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Glossary/Semantics'>semantic design</a>, <a target='_blank' href='https://www.w3schools.com/html/html_responsive.asp'>mobile responsiveness</a>, <a target='_blank' href='https://www.ada.gov/resources/web-guidance/'>accessibility</a>, and <a target='_blank' href='https://developers.google.com/search/docs#what-is-seo '>SEO optimization</a>.<br/><br/>                    
    Our Starter Kit ensures your website meets the modern web standards while enhancing your business credibility. With a custom domain name and a polished appearance, our kit simplifies professional website development.
`;

const feat3Title = `Zero Maintenance Costs`;
const feat3Desc = `
    Yes! We really mean <span class='tile-text-bold'>"Free"</span><br/><br/>
    We guide you through deploying your website on <span class='tile-text-bold'>ad-free</span> and  <span class='tile-text-bold'>reliable</span> web hosting. Once we deliver your website, you have full ownership of your domain and website, giving you complete control over your online presence.<br/><br/>
    The only optional ongoing expense is the annual domain registration (around $12 per year).
`;

const fillStaticText = () => {
  const phrase1Arr = phrase1.split(' ');
  getEl('js-title').innerHTML = phrase1;
  getEl('js-main-title').innerHTML = `${phrase1Arr[0]}<br/>${phrase1Arr[1]} ${phrase1Arr[2]}`;
  getEl('js-main-desc').innerHTML = mainDesc;
  getEl('js-feat1-title').innerHTML = `${feat1Title}<br/>`;
  getEl('js-feat2-title').innerHTML = `${feat2Title}<br/>`;
  getEl('js-feat3-title').innerHTML = `${feat3Title}<br/>`;
  getEl('js-notice-success').innerHTML = messageSuccess;
  getEl('js-notice-err').innerHTML = messageFail;
  getEl('js-feat-title').innerHTML = featTitle;
  getEl('js-feat1-desc').innerHTML = feat1Desc;
  getEl('js-feat2-desc').innerHTML = feat2Desc;
  getEl('js-feat3-desc').innerHTML = feat3Desc;
  getEl('js-contact-desc').innerHTML = `If you want to experience our web services, please fill out the form below or contact us directly at <a href='mailto:${email}'>${email}</a> or ${phone}`;
  getEl('js-contact-form').innerHTML = `<div class="contact-form-row">
    <div class="contact-form-text">
      <input type='off' class='form-textbox-input' id='name' name='name' autocomplete='nope' placeholder='Your name' required aria-label='Enter name'>
    </div>
    <div class='contact-form-sp'></div>
    <div class="contact-form-text">
      <input type='email' class='form-textbox-input' id='email' name='email' autocomplete='off' placeholder='Email address' required aria-label='Enter email'>
    </div>
    <div class='contact-form-sp'></div>
    <div id='js-contact-select' class="contact-form-text form-dropdown dropdown-fader">
      <select class="form-textbox-input form-dropdown-select" data-ignore-tracking="true" id="js-form-service" aria-labelledby="services-dropdown_label">
        <option disabled selected="" value="">Select a service type</option>
        <option class="services-dropdown-item" value="Starter Kit">Request Web Starter Kit</option>
        <option class="services-dropdown-item" value="Consulting">Consulting service</option>
        <option class="services-dropdown-item" value="Others">Others</option>
      </select>
    </div>
  </div>
  <textarea placeholder="Please briefly explain your business and website needs." class="form-textbox-input contact-form-textarea" name="message" rows="10" required></textarea>
  <button type='submit' class='button-blue'>Send your request</button>
  `;

  getEl('js-footer').innerHTML = `© 2024 ${phrase1}`;
}

const renderBanner = async () => {
  await initBanner(0);

  const phraseArr = phrase1.split(' ');
  moveCaret('js-type-01');
  await elapseTime(500);
  getEl('js-header').scrollIntoView();
  await elapseTime(1500);
  await typeText('js-type-01', phraseArr[0], 70);
  await elapseTime(300);
  getEl('js-space-01').classList.remove('hidden');
  getEl('js-next-01').classList.remove('hidden');
  await typeText('js-type-02', phraseArr[1], 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', phraseArr[2], 40);
  blinkCaret(true);
  getEl('js-main-img-1').classList.add('bw-opacity-trans');
  await elapseTime(2000);

  await selectText('js-type-03', 50);
  await elapseTime(1000);
  getEl('js-type-03').innerHTML = '';
  moveCaret('js-type-03');
  blinkCaret(false);
  await elapseTime(100);
  getEl('js-type-03').classList.add('text-subhead');
  await typeText('js-type-03', phrase2.split(' ')[2], 30);
  blinkCaret(true);
  await elapseTime(1500);
   
  await initBanner(0);
  
  if (!isMobile()) getEl('js-banner-wr').style.lineHeight = 2;
  
  const phrase3Arr = phrase3.split(' ');
  moveCaret('js-type-01');
  await typeText('js-type-01', phrase3Arr[0], 50);
  getEl('js-space-01').classList.remove('hidden');
  await typeText('js-type-02', phrase3Arr[1], 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', phrase3Arr[2], 20);
  await elapseTime(1000);

  await selectText('js-type-03', 50);
  await elapseTime(1000);
  getEl('js-type-03').innerHTML = '';
  moveCaret('js-type-03');
  blinkCaret(false);


  // switch
  hideCaret();
  getEl('js-type-03').style.color = '#a2a2a2';
  getEl('js-type-03').innerHTML = phrase4.split(' ')[2];
  moveSwitch('js-next-02');
  await expandSwitch(3);
  await elapseTime(500);
  await turnOnSwitch(20);
  getEl('js-type-03').classList.add('font-color-transition');
  getEl('js-main-img-2').classList.add('col-opacity-trans');
  blinkCaret();

  // clear switch
  await elapseTime(2000);
  getEl('js-type-03').innerHTML = '';
  getEl('js-switch-wr').remove();
  moveCaret('js-type-03');

  // volume
  hideCaret();
  getEl('js-type-03').classList.remove('font-color-transition');
  getEl('js-type-03').innerHTML = phrase5.split(' ')[2];
  getEl('js-type-03').style.color = '#fff';
  moveVolume('js-next-02');
  await startVolume('js-type-03', 500);
  blinkCaret();
  await elapseTime(2000);

  getEl('js-volume-wr').remove(); // remove speaker
  getEl('js-type-03').classList.remove('vol-color-high', 'vol-color-low', 'vol-color-off');
  await initBanner(30);

  getEl('js-main-img-3').classList.add('full-opacity-trans');
  await elapseTime(1500);

  getEl('js-banner-wr').style.textAlign = 'center'; // list one is centered
  if (isMobile()) {
    getEl('js-banner-wr').style.marginLeft = 0;
    getEl('js-banner-wr').style.lineHeight = 0.4;
    getEl('js-type-02').style.lineHeight = 2.1;
  }

  const phrase6Arr = phrase6.split(' ');

  // last "make it yours"
  if (isMobile()) getEl('js-banner-wr').style.paddingLeft = 0;
  getEl('js-type-01').style.color = '#fff';
  getEl('js-type-02').style.color = '#fff';
  getEl('js-type-03').style.color = '#fff';
  moveCaret('js-type-01');
  await typeText('js-type-01', phrase6Arr[0], 50);
  getEl('js-space-01').classList.remove('hidden');
  if (isMobile())getEl('js-next-01').classList.remove('hidden'); 
  await typeText('js-type-02', phrase6Arr[1], 100);
  getEl('js-space-02').classList.remove('hidden');
  if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', phrase6Arr[2], 40);
  await elapseTime(1500);

  // replace "it" with global
  getEl('js-type-02').innerHTML = `<div class='image-wr globe-wr fi-short'><img  id='js-globe' class='globe-size' src='./icon/globe-white-solid.svg'></div>`;
  await elapseTime(1000);

  hideCaret();
  getEl('js-link').style.opacity = 1;
  getEl('js-link-details').classList.add('flashing');

}

const gotoHome = () => {
  window.location.href = './index.html';
}

const startEventListener = () => {
  startContactListener(); // start listener
}

const main = async () => {
  startEventListener();

  if (!isMobile()) {
    getEl('js-main-img-1').src = './img/banner-bw.jpg';
    getEl('js-main-img-2').src = './img/banner-col.jpg';
    getEl('js-main-img-3').src = './img/banner-full.jpg';
  }
  await loadFont();

  renderBanner();
  fillStaticText();


}

main();