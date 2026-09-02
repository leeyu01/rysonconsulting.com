'use strict';

const featTitle = `Technical Consulting Services`;

const feat1Title = `IT Infrastructure Consulting`;
const feat1Desc = `
    We assess and improve servers, networks, virtualization platforms, and business-critical systems.
    Our goal is to create a reliable, manageable IT environment aligned with your business needs.
`;

const feat2Title = `Cloud & System Architecture`;
const feat2Desc = `
    We help businesses plan, migrate, and optimize cloud and hybrid environments based on security,
    performance, availability, and cost requirements.
`;

const feat3Title = `Cybersecurity Consulting`;
const feat3Desc = `
    We identify security risks, strengthen technical controls, improve vulnerability management,
    and help organizations prepare for security and compliance requirements.
`;

const fillStaticText = () => {
  const phrase1Arr = phrase1.split(' ');
  getEl('js-title').innerHTML = `${phrase1} | Ryson Consulting`;
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
  getEl('js-contact-desc').innerHTML = `Tell us about your technology environment, challenges, and business requirements. Complete the form below or contact us directly at <a href='mailto:${email}'>${email}</a> or <a href='tel:+16316186882'>${phone}</a>.`;
  getEl('js-contact-form').innerHTML = `<div class="contact-form-row">
    <div class="contact-form-text">
      <input type='text' class='form-textbox-input' id='name' name='name' autocomplete='name' placeholder='Your name' required aria-label='Your name'>
    </div>
    <div class='contact-form-sp'></div>
    <div class="contact-form-text">
      <input type='email' class='form-textbox-input' id='email' name='email' autocomplete='email' placeholder='Email address' required aria-label='Email address'>
    </div>
    <div class='contact-form-sp'></div>
    <div id='js-contact-select' class="contact-form-text form-dropdown dropdown-fader">
      <select class="form-textbox-input form-dropdown-select" data-ignore-tracking="true" id="js-form-service" name="service" required aria-label="Select a consulting service">
        <option disabled selected value="">Select a service</option>
        <option class="services-dropdown-item" value="IT Infrastructure Consulting">IT Infrastructure Consulting</option>
        <option class="services-dropdown-item" value="Cloud and System Architecture">Cloud &amp; System Architecture</option>
        <option class="services-dropdown-item" value="Cybersecurity Consulting">Cybersecurity Consulting</option>
        <option class="services-dropdown-item" value="Technical Operations Support">Technical Operations Support</option>
        <option class="services-dropdown-item" value="Other Consulting Needs">Other Consulting Needs</option>
      </select>
    </div>
  </div>
  <textarea placeholder="Please briefly describe your current technology environment, technical challenges, and the assistance you need." aria-label="Technology needs" class="form-textbox-input contact-form-textarea" name="message" rows="10" required></textarea>
  <button type='submit' class='button-blue'>Request a Consultation</button>
  `;

  getEl('js-footer').innerHTML = `© 2026 Ryson Consulting LLC. All rights reserved.`;
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
  await typeText('js-type-02', phraseArr[2], 100);
  blinkCaret(true);
  getEl('js-main-img-1').classList.add('bw-opacity-trans');
  await elapseTime(2000);

  await selectText('js-type-02', 50);
  await elapseTime(1000);
  getEl('js-type-02').innerHTML = '';
  moveCaret('js-type-02');
  blinkCaret(false);
  await elapseTime(100);
  getEl('js-type-02').classList.add('text-subhead');
  await typeText('js-type-02', `${phraseArr[1]} ${phraseArr[2]}`, 30);
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

  await elapseTime(2000);
  getEl('js-type-03').innerHTML = '';
  getEl('js-switch-wr').remove();
  moveCaret('js-type-03');

  hideCaret();
  getEl('js-type-03').classList.remove('font-color-transition');
  getEl('js-type-03').innerHTML = phrase5.split(' ')[2];
  getEl('js-type-03').style.color = '#fff';
  moveVolume('js-next-02');
  await startVolume('js-type-03', 500);
  blinkCaret();
  await elapseTime(2000);

  getEl('js-volume-wr').remove();
  getEl('js-type-03').classList.remove('vol-color-high', 'vol-color-low', 'vol-color-off');
  await initBanner(30);

  getEl('js-main-img-3').classList.add('full-opacity-trans');
  await elapseTime(1500);

  getEl('js-banner-wr').style.textAlign = 'center';
  if (isMobile()) {
    getEl('js-banner-wr').style.marginLeft = 0;
    getEl('js-banner-wr').style.lineHeight = 0.4;
    getEl('js-type-02').style.lineHeight = 2.1;
  }

  const phrase6Arr = phrase6.split(' ');

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

  hideCaret();
  getEl('js-type-02').innerHTML = `<div class='image-wr globe-wr fi-short'><img id='js-globe' class='globe-size' src='./icon/globe-white-solid.svg' alt=''></div>`;
  await elapseTime(1000);

  getEl('js-link').style.opacity = 1;
  getEl('js-link-details').classList.add('flashing');
}

const gotoHome = () => {
  window.location.href = './index.html';
}

const startEventListener = () => {
  startContactListener();
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
