/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-continue */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable  prefer-arrow-callback */
document.querySelector("form").window.addEventListener("submit",
  function (e) {
    e.preventDefault();
    let hasError = false;
    let values = {};
    const elements = document.querySelectorAll(".required");
    for (element of elements) {
      const radios = element.querySelectorAll("input[type=radio]");
      const input = element.querySelector("input[type=text]");
      let isValid = true;
      if (input) {
        values[input.name] = input.value;
        if (!input.value) {
          isValid = false;
        }
      } else if (radios.length) {
        isValid = [...radios].some(radio => radio.checked);
        if (isValid) {
          let r = element.querySelector("input[type=radio]:checked");
          values[r.name] = r.value;
        }
      } else {
        continue;
      }

      if (!isValid) {
        element.classList.remove("hide-error");
        hasError = true;
      } else {
        element.classList.add("hide-error");
      }
    }
    if (!hasError) {
      alert(JSON.stringify(values));
    }
  });

// 原本寫法
/* const InputValue = document.querySelectorAll("input");
function getId(name, type) {
  addEventListener(type, getValue)
}
function getValue(e) {
    value = e.target.value;
}
const element = document.querySelectorAll(".input-block > p");
document.getElementById("nickname").addEventListener("input",
  function (e) {
    value = e.target.value;
  })

document.getElementById("email").addEventListener("input",
  function (e) {
    value = e.target.value;
  })
document.getElementById("phone").addEventListener("input",
  function (e) {
    value = e.target.value;
  })
 document.getElementById("radio").addEventListener("click",getValue);

document.getElementById("radio2").addEventListener("click",getValue);

document.getElementById("radio").checked = false;
const radios = document.querySelectorAll("input[name=radio]")
.forEach(input => input.addEventListener("input", getValue))
document.getElementById("askAns").addEventListener("input",
  function (e) {
    value = e.target.value;
  })
document.querySelector("form").addEventListener("submit",
  function (e) {
  getId(nickname, "input");
  getId(email, "input");
  getId(phone, "input");
  getId(radio, "click");
  getId(radio2, "click");
  getId(askAns, "input");
  getId(other, "input");
  if (nickname.value === "") {
    element[0].innerText = ("此欄位為必填")
  } else {
    element[0].style = "display:none";}
      if (email.value ===  "") {
        element[1].innerText = ("此欄位為必填")
      } else {
        element[1].style = "display:none";}
      if (phone.value ===  "") {
        element[2].innerText = ("此欄位為必填")
      } else {
        element[2].style = "display:none";}
      if (radio.checked ===  false && radio2.checked === false) {
        element[3].innerText = ("此欄位為必填")
      } else {
        element[3].style = "display:none";}
      if (askAns.value ===  "") {
        element[4].innerText = ("此欄位為必填")
      } else {
        element[4].style = "display:none";
      }
for (let i=0; i<InputValue.length -2; i += 1){
        if (InputValue[0].value !== "" && InputValue[1].value !== "" && InputValue[2].value !== ""
        && InputValue[5].value !== "") {
          if (radio.checked === true) {
          alert(
          "暱稱：" + nickname.value + "\n" +
          "電子信箱：" + email.value + "\n" +
          "電話：" + phone.value + "\n" +
          "報名類型：" + radio.value + "\n" +
          "如何知道這個活動：" + askAns.value + "\n" +
          "其他：" + other.value);
          break;
        } else if (radio2.checked === true){
          alert(
          "暱稱：" + nickname.value + "\n" +
          "電子信箱：" + email.value + "\n" +
          "電話：" + phone.value + "\n" +
          "報名類型：" + radio2.value + "\n" +
          "如何知道這個活動：" + askAns.value + "\n" +
          "其他：" + other.value);
           break;
    }
  }
} */
