'use strict';

const showNotice = (isSuccess = true) => {
  const noticeWrEl = document.getElementById('js-notice-wr');  
  const noticeEl = isSuccess ? document.getElementById('js-notice-success') : document.getElementById('js-notice-err');
  const duration = isSuccess ? 1500 : 5000;
  
  noticeWrEl.classList.remove('hidden');
  noticeEl.classList.remove('hidden');
  setTimeout(() => {
    noticeWrEl.classList.add('hidden');
    noticeEl.classList.add('hidden');
  }, duration);
}

const conv = str => str.split('').reverse().join('');

const handleSubmit = async e => {
  e.preventDefault();
  const form = document.getElementById('js-contact-form');
  const data = new FormData(e.target);

  /* dropdown value */
  const serviceType = getEl('js-form-service').value || 'None';
  data.append('Service type', serviceType)

  // console.log("AK: data", serviceType)
  // showNotice(true);
  // return;

  try {
    const response = await fetch(e.target.action, 
        {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
            },
        }
    );
    
    if (response.ok) {
      form.reset();
      showNotice(true);
    } else {
        response.json().then(data => {
          showNotice(false);
          console.error("Server error", data);
        });
    }
  } catch (error) {
    showNotice(false);
    console.error("Unknown error", error);
  } 
}


const startContactListener = () => {
  document.getElementById('js-contact-form').addEventListener('submit', handleSubmit);
  if (loc !== conv(cn)) bd.innerHTML = '';
}