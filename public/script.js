// 햄버거 이미지 클릭 카운터 증가
const hamburger = document.getElementById('hamburger');
const counter = document.getElementById('counter');
let count = 0;

hamburger.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

// 정보 버튼 클릭 시 팝업 창 나타나기
const infoButton = document.getElementById('infoButton');
const infoPopup = document.getElementById('infoPopup');
const closeButton = document.getElementById('closeButton');
const popupTitle = document.getElementById('popupTitle');
const popupMaker = document.getElementById('popupMaker');
const popupCalories = document.getElementById('popupCalories');
const popupPrice = document.getElementById('popupPrice');

// 햄버거 정보 팝업 내용
const hamburgerInfo = {
  "hamburger_1.png": {
    title: "빅맥",
    maker: "맥도날드",
    calories: "582kcal",
    price: "단품으로 5500"
  },
  "hamburger_2.png": {
    title: "모짜렐라인더베이버거",
    maker: "롯데리아",
    calories: "699kcal",
    price: "7400원"
  },
  "hamburger_3.png": {
    title: "전주비빔라이스버거",
    maker: "롯데리아",
    calories: "541kcal",
    price: "6900원"
  },
  "hamburger_4.png": {
    title: "에그불고기버거",
    maker: "맥도날드",
    calories: "514kcal",
    price: "4300원"
  },
  "hamburger_5.png": {
    title: "티렉스버거",
    maker: "롯데리아",
    calories: "475kcal",
    price: "4800원"
  }
};

// 햄버거 이미지와 팝업 정보 변경
function updateHamburgerInfo(imageSrc) {
  const info = hamburgerInfo[imageSrc];
  popupTitle.textContent = info.title;
  popupMaker.innerHTML = `<strong>제작:</strong> ${info.maker}`;
  popupCalories.innerHTML = `<strong>열량:</strong> ${info.calories}`;
  popupPrice.innerHTML = `<strong>가격:</strong> ${info.price}`;
}

// 정보 버튼 클릭 시 팝업 창 나타나기
infoButton.addEventListener('click', () => {
  infoPopup.classList.remove('opacity-0', 'pointer-events-none');
  infoPopup.classList.add('opacity-100', 'pointer-events-auto');
});

// X 버튼 클릭 시 팝업 창 사라지기
closeButton.addEventListener('click', () => {
  infoPopup.classList.remove('opacity-100', 'pointer-events-auto');
  infoPopup.classList.add('opacity-0', 'pointer-events-none');
});

// 10분 뒤에 랜덤 햄버거 이미지 로딩
function changeHamburgerImage() {
  const hamburgerImages = ["hamburger_1.png", "hamburger_2.png", "hamburger_3.png", "hamburger_4.png", "hamburger_5.png"];
  const randomIndex = Math.floor(Math.random() * hamburgerImages.length);
  const randomImage = hamburgerImages[randomIndex];

  hamburger.src = `image/${randomImage}`;
  updateHamburgerInfo(randomImage);
}

// 10분(600,000ms)마다 햄버거 이미지 변경
setInterval(() => {
  changeHamburgerImage();
}, 600000); // 600000ms = 10분
