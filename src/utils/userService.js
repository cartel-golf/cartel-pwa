import tokenService from './tokenService';

function getUser() {
  return tokenService.getUserFromToken();
}

function submitInvite(inviteCode) {
  return fetch('/api/users/invite/submit', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({ inviteCode })
  }).then(res => {
    if (!res.ok) throw new Error("That's an invalid invite code bitch!");
    return res.json();
  }).catch(() => {
    throw new Error('A network error occurred. Ensure you are connected to the Internet.');
  });
}

export default {
  getUser,
  submitInvite
};