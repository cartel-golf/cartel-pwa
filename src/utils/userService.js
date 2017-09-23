import tokenService from './tokenService';

function getUser() {
  return tokenService.getUserFromToken();
}

function submitInvite(inviteCode) {
  return fetch('/api/invite/submit', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({ inviteCode })
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}

export default {
  getUser,
  submitInvite
};