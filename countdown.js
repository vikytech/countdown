const targetDate = new Date("2025-11-22T11:11:11");
const messageEl = document.getElementById("romanticMessage");
let initialLoad = true;

const photoUrls = [
  "https://lh3.googleusercontent.com/pw/AP1GczP1lDbJD-2DioOJCaEio-Oo5gHRxAhrssXxolzml93CiVD7JtS8iC5pgMyxWKkkR8h-66-YF_jNyT4se36OgUhLQXsrktRZcL-XLpfS4HMu-i2gSGCd",
  "https://lh3.googleusercontent.com/pw/AP1GczNUBA4CpDyOvVPZnoOuRAMTzlpJueO0F4XVPbgDdKPa0zVRopSqUFrhEbU8LK6Ap21snPaNT_TxJUTXexlTetp1tj3hnaPok_kQI1lB6lqvdcz9Oxty",
  "https://lh3.googleusercontent.com/pw/AP1GczPR6orMO4QdeBory3FyPqasPd4rWT6_wVk5GJ4Uq-oySEVgqj8XvG_Q8lAd3owhSLQDsIGdSLRIDv7P_hfgLVMDYKw8vkJkaelaeeQCwRkKb9ccEux9",
  "https://lh3.googleusercontent.com/pw/AP1GczMJofOWDQKoR073MmVpinE_E7hsvuzio2it-BOZax7lPBBUa2Myuzajxvr-n3As2hLdltN2oD5_thHMJmRWn_AGqo1wACbO-Qf6K9GkQQXYomFVs6jD",
  "https://lh3.googleusercontent.com/pw/AP1GczOLm6bb-mzUJoUFIvQKVqcX8HYXnIvkg1ggPxQZehSA2jxQWAtihB8me-Y1wU2xJM_xAo-eSjP7SlEFScMptklDL2XsfhtbvBzxMmq4rvpPy_9qHiXA",
  "https://lh3.googleusercontent.com/pw/AP1GczMdmcQcM7Vb4EqfwIMK_eg4O0ew7UpE6l94O-G5RCY06AAqUlxC9qpjg2fFg4ExC3iX_It4Xpftc1qvV75u3bIns-CLyfGCaMPEyAnnPVTxYBt5YCaV",
  "https://lh3.googleusercontent.com/pw/AP1GczNwb54qn625WO2vaHcyOfuVNj7Uz9EEhuucK75My_i5mURKrNiyJYrVa4ZwvWDM4Q7l4DTOE-98EdoDBwwhOYOCEM6rrJq8q4gSbmdrnslagR4fH1uj",
  "https://lh3.googleusercontent.com/pw/AP1GczOqg00bhPTnpJ5nsWc1qVKzm8n7zTFWgVY-aydErl2cPizNQYwWfDM5O162Lb62hy_enRcvGzENFSV8M-M2HWNFQYHz82UT0rgFqf2tz7f2J2YpPQQ3",
  "https://lh3.googleusercontent.com/pw/AP1GczMJGGHvkbmxtFkAexsb5KVJQJei-8EgDFooR4hP1q2qF2oMaNb8dLXo9IaPHKWq-b-OQTTE_UBaA1r-mSddPWT0WPLIQ8N6wNrmWwUYZIJjsrr3t_M1",
  "https://lh3.googleusercontent.com/pw/AP1GczOs-GLoTu0k-OXuJMxB6mwcpPdsQpOQ3U9kdy-GswlHGGu57-x1Bf9zH8hYjYjCa7X7FKLWy4rb_itOWr_4DZ8pwQ9-m_sJ2_qvK1Xh7uh8_aaB96CH",
  "https://lh3.googleusercontent.com/pw/AP1GczOGQQhprLd910UBB6zN7sSckH4TfTV_yuR42MRnYO9BbGr9-sFq1wNtQTusdO3SrA6gsFawpUVu5S9U2aJmQSZ1pGaQpAmbaYCh73zr_KnZDdFYKQw_",
  "https://lh3.googleusercontent.com/pw/AP1GczNRKzxGpLEv1UcOuqmQ4e4f-NjNQD7B9jG4n67fUgQiocpptijgTr7BX3fETL7xbh3IiJevjfgFN-lohGOGRwj_ReriO0T5PxO4HSdAnk32nliMooRg",
  "https://lh3.googleusercontent.com/pw/AP1GczMIiFmQb9IxchlS8w2z5b1jv54T4qBzWA0NY31k0EGVXtliiJIqvqVerwFuXE5Sk1zbXcQWRh2dx59eoM78u4kyRVhCgPHT-Yt1t0twfeWuMgCVyKZf",
  "https://lh3.googleusercontent.com/pw/AP1GczPn1n6wO1I9x-rwsZFj5lhZFFELsRze1vj9bA_LKEVtbdXrouz5Vx0iqyxBM6NXA88Dk3kjRUzV3r0x2fkn-OKfNV79rCvOTJTudeWQvhThcbeX6bm_",
  "https://lh3.googleusercontent.com/pw/AP1GczM0_S-rssSxE6M2Lqaxgm9_U4uUXixCw2gw91cgPxW3DkOTYoIrLZ8Ovzsm-L3p0087JcVOfWnxqp4AEoBQfjhPhY4e_9uD0SzQgKshZ6k5jQcNcHjW",
  "https://lh3.googleusercontent.com/pw/AP1GczN5-ElmqO1ZyS5plBWoL3jwbFUB388zyat4dAEs6LbRgEm2Q98H1ldJk4GdIp9o1NSE2gU4fwiLa4sJT7QTfh3Zw-VYIe2oBoWqVGzRZ8Qdv6dxUJSY",
  "https://lh3.googleusercontent.com/pw/AP1GczPb3xsVxZkbhAw8P7F9X2m3hH9oDF-XPmqaSnrXp6DwiL1_V6sLy4AivmzZXD32CZXIOD7_76YSQ0yKKwctuqJhuNbdBdDppfHud_rwrqsyHUZ6X6Aq",
  "https://lh3.googleusercontent.com/pw/AP1GczPybNeX6qlAcIs6VbsOjIk5gKUQ1JBH-I6wqd15RdswUiM7_r84kKu7fhpxMYXR9yF7CTsUst1m6cO6-zNZv3kc-CtUDtSi2fDApPrProinyavUFLdM",
  "https://lh3.googleusercontent.com/pw/AP1GczN2bfSoGRYLvp1_sXiHBQ9sno49ze_HFbYWz6bHn_SxLUidP7kqCMF0fZHVbge_7E935G1rAOhqVsAq8yKIcVDwTGlUHHBCbYWniuItWpxy3EdAroDc",
  "https://lh3.googleusercontent.com/pw/AP1GczM89j2aU0fXMNQ1vJN6VbQX53R-ktmaUHPAr6TwosCqZiurqTXZz6sexMsmOP-tIT08aJy0RKqDbs6QTBnIxjMFgLD2N00A7o9YQH4k5xiqelMUP7Q9",
  "https://lh3.googleusercontent.com/pw/AP1GczOgfSNZnwoeXnVqDK-58c9Qdo7_FEX95oSpZLSvgR33x0AggOLPuxx9_vBOugQk5vArhIUoqItOs6caj9evIDRSE0faKhZf6TiYUQ2lGjV6M_Py06qW",
  "https://lh3.googleusercontent.com/pw/AP1GczOLjKdcrBmFWNKptlaR3WCtqZqiH9nYHtVSmTsEbU0_Wn27qvbkLUy7enHY_RfmcmT_LHp6OZcFsDKj5uOIOjy_eNUkPGX1_k7Oit1j7T9XvFdrj67s",
  "https://lh3.googleusercontent.com/pw/AP1GczM6bLaTgkoevfCGFgP8TIWAU9TuMyn3_m18rLEFLoRDFBduxA_UnTA02CX-PTNH5HVCbD-YFIrZ8_-EM2smuAvEDHoVTtiMWSKqnPNJ-REnKjH8PDiM",
  "https://lh3.googleusercontent.com/pw/AP1GczPS8J48ghJicSzEsdQFRUoVagydr77bcSo-ikOPVEvreM6xuzHQL4UL6L_XPNd5uElzLHfTGDckuNdfCrW53qt3EMmN7llM8nPHOtQuxrSikcfgi26H",
  "https://lh3.googleusercontent.com/pw/AP1GczOaV4h4hlcSmYE52KlLPKwl-TwO-QxQktLdQtjfoMxSOyHcH46hqt_XBrZ1e-KkS9_oRdZZbxaCplYfnKF_Pc2Ly27NEWEDvPr0oPuYNEc13A2gvLof",
  "https://lh3.googleusercontent.com/pw/AP1GczNn96ffKd-YSBSkAOZxWkeod3BJ7hlJTgzisY5Nid3Jqf4dVwWI2sTftlinSud1gv_9n28E-9-cTSOr2OdGoFv3DE2vdm0zxPw8wPVK5cvaPPNaXvPY",
  "https://lh3.googleusercontent.com/pw/AP1GczPf0oZys9ETQYJW5qnEAkufNnqqZHSXlzOz3un9PnbGS9BVTVLnev4UMGRxQ5OFJvkmJcnos8_xqs1UHfSGbc2yw15DsqQf4N7n72dWTVLs8qeUqKvI",
  "https://lh3.googleusercontent.com/pw/AP1GczML52eiLzpY3rJIgWDpwMQLjS4MFQhrTPEXRn7AD38Kd9brU3Rzw66RMdTvlaSXz3r_NAvCfEacBAIerkToDoOzsioPyIVHMde_iZeU25kJMwsl8P5o",
  "https://lh3.googleusercontent.com/pw/AP1GczMbZn1CkKo0Umxvf8VHC-vQQF0hDovjTMZzTCFG_mKlcCY53WkegnbnBJW45VToSvlFhgP-Qfh5ft05q2EV33BuRJHxR189aEiovOxCHRO7PBszsEe2",
  "https://lh3.googleusercontent.com/pw/AP1GczN2xXdoV0uZGnOqxQMKcCd3u8BYcVXasXKnKv7X6JAEof8EBbV-5xWPfB19uQl21NjXLFz702MdkIz5HP5w88-SWyOxi_hvRBFXZ_h-X8QREBcnkz3X",
];

const messages = [
  "Every minute brings me closer to your smile. 💕",
  "Counting the heartbeats until I see you. ❤️",
  "You make time worth counting. ⏳",
  "Your love is my favorite destination. ✈️",
  "Soon, my arms will be your home again. 🤗",
  "I miss your laugh more than words can say. 😘",
  "The calendar is my love letter to you. 📅",
  "You're the reason I wake up smiling. ☀️",
  "Love has a date. It’s November 25th. 💌",
  "With every tick, I think of your kiss. 😚",
  "One day closer to forever. 💍",
  "I carry you in every heartbeat. 💓",
  "Even time slows down missing you. ⏱️",
  "This countdown is powered by love. 💗",
  "You are my reason for every second. ⏰",
  "Each moment apart writes our story. 📖",
  "Can't wait to hold your hand again. 🤝",
  "Your smile is my favorite time zone. 🕰️",
  "You're worth the wait and so much more. 🌹",
  "Love grows stronger with each passing day. 🌸",
  "You + Me = Soon. ❤️",
  "I'm falling in love with waiting for you. ✨",
  "My heart races every time I see the countdown. 💓",
  "Time flies to the one I love. 🕊️",
  "I never counted anything this excitedly. 😍",
  "Your love keeps me patient. 🧘‍♂️",
  "This wait is full of sweet hope. 🥰",
  "You’re my favorite thought each minute. 💭",
  "The clock is our love poem in motion. 🕰️",
  "Soon, I’ll be home in your hug. 🏡",
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomPhoto() {
  return photoUrls[Math.floor(Math.random() * photoUrls.length)];
}

function showRandomMessage() {
  messageEl.textContent = getRandomMessage();
}

function createDigits(container, valueStr) {
  container.innerHTML = "";
  for (let char of valueStr.padStart(2, "0")) {
    const digit = document.createElement("div");
    digit.className = "digit";
    digit.innerHTML = `
      <div class="digit-inner digit-front">${char}</div>
      <div class="digit-inner digit-back">${char}</div>
    `;
    container.appendChild(digit);
  }
}

function updateStaticDigits(id, value) {
  const container = document.getElementById(id);
  const newStr = String(value).padStart(2, "0");

  if (container.children.length !== newStr.length) {
    createDigits(container, newStr);
    return;
  }

  const digits = container.querySelectorAll(".digit");
  digits.forEach((digit, idx) => {
    const front = digit.querySelector(".digit-front");
    const back = digit.querySelector(".digit-back");
    const newChar = newStr[idx];

    const shouldAnimate = initialLoad || front.textContent !== newChar;

    if (shouldAnimate) {
      back.textContent = newChar;
      digit.classList.add("flip");
      setTimeout(() => {
        front.textContent = newChar;
        digit.classList.remove("flip");
      }, 500);
    }
  });
}

function launchConfetti() {
  const confettiCanvas = getElementById("confetti-canvas");
  confettiCanvas.classList.add = "show";

  const duration = 8000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 1000,
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2,
      },
    });
  }, 250);
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("countdownContainer").innerHTML = `
      <div class="message">🎉 November 22nd, 2025 has arrived!</div>
    `;
    launchConfetti();
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays;

  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  updateStaticDigits("weeks", weeks);
  updateStaticDigits("days", days);
  updateStaticDigits("hours", hours);
  updateStaticDigits("minutes", minutes);

  showRandomMessage();
}

createDigits(document.getElementById("weeks"), "00");
createDigits(document.getElementById("days"), "00");
createDigits(document.getElementById("hours"), "00");
createDigits(document.getElementById("minutes"), "00");

updateCountdown();
const timer = setInterval(updateCountdown, 60000);
setTimeout(() => {
  initialLoad = false;
}, 2000);

function sendHourlyNotification() {
  if (Notification.permission !== "granted" || !navigator.serviceWorker) return;

  const now = new Date();
  const hoursNow = now.getHours();
  const diff = targetDate - now;

  if (hoursNow >= 23 || hoursNow < 8) return;

  const totalMinutes = Math.floor(diff / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const weeks = Math.floor(totalDays / 7);
  const hoursLeft = totalHours % 24;
  const minutesLeft = totalMinutes % 60;

  const morningGreetings = [
    "Good morning, Vibha 💛",
    "Buenos días, mi amor ☀️",
    "Waking up thinking of you, Vibha 💖",
    "¡Buenos días princesa! 👑",
    "Time to rise, love of my life 🌅",
  ];

  const nightGreetings = [
    "Sleep tight, mi Vibha 😘",
    "Good night sweetheart 🌙",
    "Dulces sueños, mi corazón 💓",
    "Thinking of you as the stars shine ✨",
    "Even the moon waits for Nov 22 🌕",
  ];

  const specialMessages = {
    100: "💯 days left, Vibha — every heartbeat counts 💓",
    50: "Only 50 days, Vibha — the butterflies are real 🦋",
    30: "30 days left, and I feel your warmth already 💖",
    14: "Just 2 weeks, mi Vibha! 💞",
    7: "One week till we hug again 🫶",
    1: "Tomorrow, I get to hold you 🤗",
    0: "Today’s the day, Vibha! 💍💓",
  };

  let message = "";

  if (hoursNow >= 8 && hoursNow <= 10 && Math.random() < 0.7) {
    message =
      morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
  } else if (hoursNow >= 21 && hoursNow < 23 && Math.random() < 0.7) {
    message = nightGreetings[Math.floor(Math.random() * nightGreetings.length)];
  } else if (specialMessages[totalDays]) {
    message = specialMessages[totalDays];
  } else if (weeks > 1) {
    message = `Only ${weeks} weeks to go, Vibha — ` + getRandomMessage();
  } else if (totalDays > 1) {
    message = `${totalDays} days left — ` + getRandomMessage();
  } else if (hoursLeft > 0) {
    message =
      `${hoursLeft} hour${
        hoursLeft !== 1 ? "s" : ""
      } to go — I can almost feel your hug 🤗 - ` + getRandomMessage();
  } else {
    message = `It’s almost time, Vibha — love is seconds away 💕`;
  }

  navigator.serviceWorker.getRegistration().then((reg) => {
    if (reg) {
      reg.showNotification("⏳ Countdown to Love", {
        body: message,
        icon: "/icons/icon-192.png",
        image: getRandomPhoto(),
        badge: "/icons/badge-72.png",
        vibrate: [200, 100, 200],
        data: {
          url: "https://countdown.vikytech.in",
        },
      });
    }
  });
}

setTimeout(() => {
  sendHourlyNotification();
  setInterval(sendHourlyNotification, 60 * 60 * 1000);
}, 60 * 1000);

const gallery = document.getElementById("photoGallery");

photoUrls.slice(0, 60).forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Photo of us 💖";
  gallery.appendChild(img);
});

const featuredEl = document.getElementById("featuredPhoto");
const galleryEl = document.getElementById("photoGallery");

function rotateFeaturedPhoto(index = 0) {
  if (photoUrls.length === 0) return;

  featuredEl.style.opacity = 0;
  setTimeout(() => {
    featuredEl.src = photoUrls[index % photoUrls.length];
    featuredEl.style.opacity = 1;
  }, 300);

  setTimeout(() => rotateFeaturedPhoto(index + 1), 6000);
}

// Start slideshow
rotateFeaturedPhoto();

// Populate gallery below
photoUrls.slice(0, 60).forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Photo of us 💖";
  galleryEl.appendChild(img);
});
