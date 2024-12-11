//sotres/app.js
import { writable } from "svelte/store";
import { getCookie } from '@/utils/Cookie';

export const pageTitle = writable('');

export const appName = writable('');

export const hideControls = writable(false);

const envAppUrl = writable(import.meta.env.PB_BACKEND_URL);
// 🐱
// const backendUrl = getCookie('appUrl') || envAppUrl;