// 921124539988-isc9lkfns3edqq893e9a2avubnpa08vf.apps.googleusercontent.com

let initialized = false;
const clientId =
  '921124539988-isc9lkfns3edqq893e9a2avubnpa08vf.apps.googleusercontent.com';

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(response);
        },
        scope: 'email profile',
      });

      resolve();
      initialized = true;
    });
  });
};
