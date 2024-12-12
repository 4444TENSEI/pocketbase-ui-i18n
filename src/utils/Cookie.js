// utils/cookie.js
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// 🐱设置后端服务地址的初始化
export function setUrlPopup() {
  let newPbUrl = prompt("设置后端服务地址：", getCookie("pbUrl"));
  if (newPbUrl !== null && newPbUrl.trim() !== "") {
    setCookie("pbUrl", newPbUrl);
    location.reload();
  } else if (newPbUrl === "") {
    alert("后端地址不能为空");
  }
}