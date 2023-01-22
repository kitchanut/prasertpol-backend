import axios from "axios";
export const HOSTNAME = process.env.serverUrl;
const auth = async function () {
  if (window.$nuxt) {
    return await $nuxt.$auth.loggedIn;
  }
};

const getToken = async function () {
  if (window.$nuxt) {
    return await window.$nuxt.$auth.getToken("local");
  }
};

export async function request(method, url, data) {
  if (auth()) {
    const headers = {
      Authorization: await getToken(),
    };
    const Callback = await axios({
      method,
      url,
      data,
      headers,
    })
      .then(function (response) {
        // console.log("get");
        return response;
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          return $nuxt.$auth.logout();
        }
      });
    return Callback;
  }
}

// export async function request(method, url, data) {
//   if (auth()) {
//     var instance = axios.create();
//     instance.defaults.headers.common[
//       "Authorization"
//       // ] = `Bearer ${await getToken()}`;
//     ] = await getToken();

//     const Callback = await instance({
//       method,
//       url,
//       data,
//     })
//       .then(function (response) {
//         // console.log("get");
//         return response;
//       })
//       .catch(function (error) {
//         if (error.response.status == 401) {
//           return $nuxt.$auth.logout();
//         }
//       });
//     return Callback;
//   }
// }

// export async function request(method, url, data) {
//   if (auth()) {
//     const headers = {
//       Authorization: await getToken(),
//     };
//     const Callback = await axios({
//       method,
//       url,
//       data,
//       headers,
//     })
//       .then(function (response) {
//         // console.log("get");
//         return response;
//       })
//       .catch(function (error) {
//         if (error.response.status == 401) {
//           return $nuxt.$auth.logout();
//         }
//       });
//     return Callback;
//   }
// }
