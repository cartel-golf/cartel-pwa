import tokenService from './tokenService';

function getUser() {
  return tokenService.getUserFromToken();
}

function submitInvite(inviteCode) {
  return fetch('/api/users/invite/submit', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({ inviteCode })
  }).catch(() => {
    throw new Error('A network error occurred. Ensure you are connected to the Internet.');
  }).then(res => {
    if (!res.ok) throw new Error("Invalid code bitch!");
    return res.json();
  }).then(({ token }) => {
    tokenService.setToken(token);
    return tokenService.getUserFromToken();
  });
}

function forgetMe() {
  tokenService.removeToken();
  window.location.href = '/';
}

export default {
  getUser,
  submitInvite,
  forgetMe
};