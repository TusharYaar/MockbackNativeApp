const BASE_URL = "https://mockback.herokuapp.com";
// const BASE_URL = "https://2dcfc32d260e.ngrok.io"
export const fetchMockspaceData = (token) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(BASE_URL +"/userdata", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) reject(data);
        else resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };

export const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = { email, password };
      const response = await fetch(
        BASE_URL + "/auth/login",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const userData = await response.json();

      if (!response.ok) reject(userData);
      else resolve(userData);
    }
    catch (err) {
      reject(err);
    }
  })
}
export const googleLogin = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        BASE_URL + "/androidauth/googlelogin",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const userData = await response.json();
      if (!response.ok) reject(userData);
      else resolve(userData);
    }
    catch (err) {
      reject(err);
    }
  })
}