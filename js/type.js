'use strict';

/* Caret */
// get a caret element and unhide it. create one if not exist
const getCaretEl = () => {
  let caretEl = getEl('js-caret');
  if (!caretEl) {
    caretEl = document.createElement('span');
    caretEl.setAttribute('id', 'js-caret');
    caretEl.setAttribute('class', 'text-head caret caret-blink');  
  }
  return caretEl;
}

const blinkCaret = (blink = true) => {
  const caretEl = getCaretEl();
  if (blink) {
    caretEl.classList.add('caret-blink');
  } else {
    caretEl.classList.remove('caret-blink');
  }
}

const hideCaret = (hide = true) => {
  const caretEl = getCaretEl();
  if (hide) {
    caretEl.classList.add('hidden');
  } else {
    caretEl.classList.remove('hidden');
  }
}

const moveCaret = (parentId) => {
  const caretEl = getCaretEl();
  getEl(parentId).appendChild(caretEl);
  // hideCaret(false);
  blinkCaret(true);
}

/* Type */
// target elemen id, text, speed
const typeText = (id, text, delay = 150) => {
  const el = getEl(id);
  if (loc !== conv(cn)) el.innerHTML = '';

  return new Promise(resolve => {
    el.innerHTML = ''; //reset
    moveCaret(id);
    const caretEl = getCaretEl();
    blinkCaret(false);

    let index = 0;
    let typedText = '';
    const typeWriter = () => {
      if (index < text.length) {
        typedText += text.charAt(index++); 
        el.innerHTML = typedText;
        el.appendChild(caretEl);
        setTimeout(typeWriter, delay);
      } else {
        blinkCaret();
        resolve();
      }
    }
    typeWriter();
  });
}

/* Select */
const selectText = (id, delay = 150) => {
  const el = getEl(id);
  const text = el.textContent;

  return new Promise(async resolve => {
    moveCaret(id);
    blinkCaret(false);
    // changeCaret(false);
    
    for (let i = 0; i <= text.length; i++) {
      const selected = text.substring(0,i);
      const rest = text.substring(i);
      await elapseTime(delay);  
      const selectedSomething = i === 0 ? '' : 'selected-something'; 
      // debugger;
      el.innerHTML = `<span class='selected ${selectedSomething}'><div class='select-up'></div>${i === 0 ? "" : "<div class='select-down'></div>"}<span id='js-selected'>${selected}</span></span>${rest}`;    
    }

    resolve();
  });
}


/* Volume */
const getVolumeWrEl = () => {
  // debugger;
  let volumeWrEl = getEl('js-volume-wr');
  if (!volumeWrEl) {
    volumeWrEl = document.createElement('div');
    volumeWrEl.id = 'js-volume-wr';
    volumeWrEl.classList.add('image-wr', 'volume-wr-size');
    const img = document.createElement('img');
    img.id = 'js-volume';
    img.src = './icon/volume-off-solid.svg';
    volumeWrEl.appendChild(img);
  }
  return volumeWrEl;
}

// prevId to enter the switch to the next
const moveVolume = (prevId) => {
  const volumeWrEl = getVolumeWrEl();
  // debugger;
  getEl(prevId).insertAdjacentElement('afterend', volumeWrEl);
}

const startVolume = async (id, delay = 1000) => {
  const textEl = getEl(id);
  const imgEl = getEl('js-volume');
  imgEl.src = './icon/volume-off-solid.svg';
  await elapseTime(delay * 1.5);

  // debugger;
  imgEl.src = './icon/volume-low-solid.svg';
  textEl.classList.add('vol-color-off');
  
  await elapseTime(delay);
  imgEl.src = './icon/volume-med-solid.svg';
  textEl.classList.add('vol-color-low');
  await elapseTime(delay);
  imgEl.src = './icon/volume-high-solid.svg';
  textEl.classList.add('vol-color-high');
}

/* Switch */
const getSwitchWrEl = () => {
  let switchWrEl = getEl('js-switch-wr');
  if (!switchWrEl) {
    switchWrEl = document.createElement('div');
    switchWrEl.id = 'js-switch-wr';
    switchWrEl.classList.add('image-wr', 'switch-wr-size');

    const switchBg = document.createElement('div');
    switchBg.id = 'js-switch-bg';
    switchBg.classList.add('switch-bg', 'switch-bg-size');

    // Create the circle div
    const switchCircle = document.createElement('div');
    switchCircle.id = 'js-switch-circle';
    switchCircle.classList.add('switch-circle', 'switch-circle-size');

    // Append the background and circle to the wrapper
    switchWrEl.appendChild(switchBg);
    switchWrEl.appendChild(switchCircle);
  }
  return switchWrEl;
}

// prevId to enter the switch to the next
const moveSwitch = (prevId) => {
  const switchWrEl = getSwitchWrEl();
  getEl(prevId).insertAdjacentElement('afterend', switchWrEl);
}

const expandSwitch = async (delay = 8) => {
  const switchBgEl = getEl('js-switch-bg');
  const switchWrEl = getEl('js-switch-wr');
  
  const prevWidth = switchBgEl.offsetWidth;
  const maxWidth = switchWrEl.offsetWidth;

  for (let i = 0; i <= maxWidth - prevWidth; i+=1) {
    switchBgEl.style.width = `${prevWidth + i}px`;
    await elapseTime(delay); // width expansion speed
    
  }
}

const turnOnSwitch = async (delay = 10) => {
  const switchCircleEl = getEl('js-switch-circle');
  const switchBgEl = getEl('js-switch-bg');
  for (let i = 5; i <= 45; i += 3) {
    switchCircleEl.style.left = `${i}%`;
    await elapseTime(delay); // circle move speed
  }
  switchBgEl.classList.add('switch-color-transition')

}

const initBanner = async (delay = 0) => {
  getEl('js-type-03').innerHTML = '';
  await elapseTime(delay);
  getEl('js-type-02').innerHTML = '';
  await elapseTime(delay);
  getEl('js-type-01').innerHTML = '';
  getEl('js-space-01').classList.add('hidden');
  getEl('js-space-02').classList.add('hidden');
  getEl('js-next-01').classList.add('hidden');
  getEl('js-next-02').classList.add('hidden');
  getEl('js-type-03').classList.remove('text-subhead'); // 3rd small font reset on mobile
  getEl('js-type-03').style.color = '#1d1d1f';

}
