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
  let defaultPbUrl = prompt("后端服务地址", getCookie("pbUrl"));
  if (defaultPbUrl !== null && defaultPbUrl.trim() !== "") {
    setCookie("pbUrl", defaultPbUrl);
    location.reload();
  } else if (defaultPbUrl === "") {
    setCookie("pbUrl", import.meta.env.PB_BACKEND_URL);
  }
}