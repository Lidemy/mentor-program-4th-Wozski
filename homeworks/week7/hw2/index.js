/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
document.querySelector(".FAQ__block").addEventListener("click", function (e) {
  const element = e.target.closest(".FAQ__item");
  if (element) {
    element.classList.toggle("FAQ-item__hide");
  }
});

/* 原本寫法
const elements = document.querySelectorAll(".FAQ--hide");
document.querySelector(".FAQ__Page").addEventListener("click", function(e) {
  if (e.target.value === "如何辦理退貨？") {
    elements[0].classList.toggle("FAQ__textshow");
  } else if (e.target.value === "目前提供哪些付款方式？") {
     elements[1].classList.toggle("FAQ__textshow");
  } else if (e.target.value === "線上刷卡如何操作呢？") {
     elements[2].classList.toggle("FAQ__textshow");
  } else if (e.target.value === "如何查詢目前訂單的處理狀況？") {
     elements[3].classList.toggle("FAQ__textshow");
  } else if (e.target.value === "訂單成立後，是否可以取消或是更改訂單數量及商品？") {
     elements[4].classList.toggle("FAQ__textshow");
  } else if (e.target.value === "我想購買的商品已經缺貨，什麼時候會進貨呢？") {
     elements[5].classList.toggle("FAQ__textshow");
  }
  //一個伸展，其他全部都關掉
  /*for (let i=0; i<elements.length; i += 1){
  if (elements[i].classList.value === "FAQ__ans FAQ__textshow" &&
      elements[i+1].classList.value === "FAQ__ans FAQ__textshow" ||
      elements[i].classList.value === "FAQ__ans FAQ__textshow" &&
      elements[i+2].classList.value === "FAQ__ans FAQ__textshow" ||
      elements[i].classList.value === "FAQ__ans FAQ__textshow" &&
      elements[i+3].classList.value === "FAQ__ans FAQ__textshow" ||
      elements[i].classList.value === "FAQ__ans FAQ__textshow" &&
      elements[i+4].classList.value === "FAQ__ans FAQ__textshow") {
    elements[i].classList = "FAQ__ans"
    }
  }
//})
title.addEventListener("click",
  function InsertText() {
   elements[0].classList.toggle("FAQ__textshow");
   if (elements[0].classList.value  === "FAQ__ans FAQ__textshow" &&
   elements[1].classList.value  === "FAQ__ans FAQ__textshow") {
      elements[1].classList.toggle("FAQ__textshow");
    }
  }
)
title2.addEventListener("click",
  function InsertText() {
    elements[1].classList.toggle("FAQ__textshow");
    if (elements[1].classList.value  === "FAQ__ans FAQ__textshow" &&
    elements[0].classList.value  === "FAQ__ans FAQ__textshow") {
      elements[0].classList.toggle("FAQ__textshow");
    }
  }
)
title3.addEventListener("click",
  function InsertText() {
    elements[2].classList.toggle("FAQ__textshow");
  }
)

title4.addEventListener("click",
  function InsertText() {
    elements[3].classList.toggle("FAQ__textshow");
  }
)

title5.addEventListener("click",
  function InsertText() {
    elements[4].classList.toggle("FAQ__textshow");
  }
)

title6.addEventListener("click",
  function InsertText() {
    elements[5].classList.toggle("FAQ__textshow");
  }
)
InsertText("我們決不退貨，老闆說除非他死後")
InsertText("您可以選擇用幻想的方式付款或是用愛心付款")
InsertText("我們沒有提供線上刷卡的服務，但是可以用比特幣交易")
InsertText("您可以選擇做夢或是幻想的方式了解到訂單的狀況")
InsertText("不能取消商品，也不提供更改數量的服務")
InsertText("看商品種類，如哈雷彗星的隕石碎片，大概需要 75-76 年後才會補貨") */
/* 參考資料
https://htmldom.dev/show-a-custom-context-menu-at-clicked-position/
https://htmldom.dev/show-or-hide-table-columns/
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle */
