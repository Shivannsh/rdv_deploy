
const API_BASE = 'https://orbit.rendezvousiitd.com';
// const GCAPTCHA_SITE_KEY = "6LeJNDgoAAAAAI2p8bo63DUyywGVsYQnL6zTJEXn";
// const GCAPTCHA_SITE_KEY =  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const GCAPTCHA_SITE_KEY =  "6Lc-IHIoAAAAABM_NCvHsauReFp2pyGT-lb6UCXw";


const clientID = "242398756945-58s1pbqea0ogbdrf39to7qtjm378v56r.apps.googleusercontent.com";
// const clientID = "211038195030-36ijehndfocsfou2v4i9b7h9a605hckv.apps.googleusercontent.com";
const JWT_KEY = 'goldberg';
const JWT_KEY2 = 'diamondberg';
export const getJWT = () => localStorage.getItem(JWT_KEY);
export const delJWT = () => localStorage.removeItem(JWT_KEY);
export const setJWT = (JWT: string) => localStorage.setItem(JWT_KEY, JWT);

export const delJWT2 = () => localStorage.removeItem(JWT_KEY2);
export const setJWT2 = (JWT: string) => localStorage.setItem(JWT_KEY2, JWT);
export const getJWT2 = () => localStorage.getItem(JWT_KEY2);


// For pre register otp token
const TOKEN_KEY = 'silverberg';
export const getRef = () => localStorage.getItem(TOKEN_KEY);
export const delRef = () => localStorage.removeItem(TOKEN_KEY);
export const setRef = (TOKEN: string) => localStorage.setItem(TOKEN_KEY, TOKEN);

function getHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const JWT = getJWT();
  if (JWT) headers.append('Authorization', `Bearer ${JWT}`);
  return headers;
}
function checkJWT() {
	return getJWT() != null;
}
function checkJWT2() {
	return getJWT2() != null;
}
function logout() {
	delJWT();
	delRef();
}

const headers = () => ({
	'Content-Type': 'application/json',
	'Authorization': `Bearer ${getJWT()}`,
});

async function bookedPasses() {
	const response = await fetch(`${API_BASE}/pass/bookedPasses`, {
		headers: headers(),
	});
	const r = await response.json();
	if (response.status === 200) {
		return { error: false, response: r };
	}
	return { error: true, response: r.message };
}
declare global {
    interface Window {
        grecaptcha:any;
    }
}

let grecaptcha = window.grecaptcha;

export {
  API_BASE,
  GCAPTCHA_SITE_KEY,
  getHeaders,
  clientID,
  logout,
  checkJWT,
  checkJWT2,
  bookedPasses, 
  grecaptcha

}