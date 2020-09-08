/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-use-before-define */
// add-btn
document.querySelector(".Todo__list").addEventListener("keypress", (e) => {
  const div = document.createElement("div");
  if (e.key === "Enter") {
    if (e.target.value.length > 10 || e.target.value === "") {
      alert("不可空白或是超過 10 個，請重新輸入");
    } else {
      div.classList.add("row");
      div.innerHTML = `<ul><input type="checkbox" class="Todo__checkbox"><li>`
      + escapeHtml(e.target.value) + `<button class='delete'>X</button></li></ul>`;
      document.querySelector(".contacts").appendChild(div);
    }
    document.getElementById("myInput").value = "";
  }
});
document.querySelector(".Todo__list-btn").addEventListener("click", (e) => {
  const div = document.createElement("div");
  const inputValue = document.querySelector(".Todo__list").value;
  if (e.target.value.length > 10 || e.target.value === "") {
    alert("不可空白或是超過 10 個，請重新輸入");
  } else {
    div.classList.add("row");
    div.innerHTML = `<ul><input type="checkbox" class="Todo__checkbox"><li>`
      + escapeHtml(inputValue) + `<button class='delete'>X</button></li></ul>`;
    document.querySelector(".contacts").appendChild(div);
  }
  document.getElementById("myInput").value = "";
});
// delete-btn
document.querySelector(".contacts").addEventListener("click",
  (e) => {
    // delete
    if (e.target.classList.contains("delete")) {
      document.querySelector(".contacts").removeChild(
        e.target.closest(".row"),
      );
      return;
    }
    // checked/unchecked
    if (e.target.classList.contains("Todo__checkbox")) {
      if (e.target.checked) {
        e.target.parentNode.classList.add("Todo__checked");
      } else {
        e.target.parentNode.classList.remove("Todo__checked");
      }
    }
  });
// Escape html
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
/* 從原本老師寫的範例修改
 document.querySelector('.add-btn').addEventListener('click',
  function() {
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
      <input name="name" class="MakeWish"/>
      <button class='delete'>刪除</button>
      `
      document.querySelector('.contacts').appendChild(div)
  }
)
作業重點 1. EscapeHtml - 特殊字的預防 2. appendchild 後面是同一個元素，會使用搬移而不是複製一份 */
