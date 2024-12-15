import App from './App.svelte'
import './i18n';
import { getCookie, setCookie } from "@/utils/Cookie";


const app = new App({
  target: document.getElementById('app')
});
// 初始化后端地址到Cookie以便支持用户自行切换
let pbUrl = getCookie("pbUrl");
if (!pbUrl) {
  setCookie("pbUrl", import.meta.env.PB_BACKEND_URL);
  location.reload();
}

export default { app, pbUrl }
