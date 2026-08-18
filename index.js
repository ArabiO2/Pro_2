document.title = "Pro-2";
let info_in = document.getElementById("btn3");
let a_info = document.getElementById("a-info");
info_in.onclick = function () {
  a_info.click();
};

const heart = document.querySelector(".loveicon");
const counter = document.querySelector(".counter");

// 1. استرجاع البيانات من localStorage عند فتح الصفحة
// لو مفيش بيانات، بنبدأ بـ liked: false والعدد 0
let state = JSON.parse(localStorage.getItem("likeData")) || {
  liked: false,
  count: 0,
};

// دالة لتحديث الشكل والعداد في الصفحة
function updateUI() {
  counter.textContent = state.count;
  if (state.liked) {
    heart.classList.add("coloredHeart");
  } else {
    heart.classList.remove("coloredHeart");
  }
}

// 2. تحديث الصفحة بالبيانات المحفوظة فوراً
updateUI();

// 3. إضافة الحدث عند الضغط
heart.addEventListener("click", () => {
  // نعكس الحالة (لو ترو تبقى فولس والعكس)
  state.liked = !state.liked;

  // لو عمل لايك زود، لو شاله نقص
  if (state.liked) {
    state.count++;
  } else {
    state.count--;
  }

  // حفظ البيانات في localStorage
  localStorage.setItem("likeData", JSON.stringify(state));

  // تحديث الشكل
  updateUI();
});

let menuIcon = document.getElementById("menu");
let bar = document.getElementById("bar");
let barLayer = document.getElementById("barLayer");

menuIcon.onclick = function () {
  menuIcon.classList.add("hide");
  bar.classList.add("bar-in");
  barLayer.classList.remove("hide");
};

document.body.onclick = function (e) {
  // console.log(e.target);
  if (e.target.id === "barLayer") {
    menuIcon.classList.remove("hide");
    bar.classList.remove("bar-in");
    barLayer.classList.add("hide");
  }
};
