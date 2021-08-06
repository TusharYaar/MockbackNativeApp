export const fetchMockspaceData = (token) => {
    return new Promise(async (resolve, reject) => {
      try {
        const req = await fetch("https://mockback.herokuapp.com/userdata", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await req.json();
        if (req.status !== 200) reject(data);
        else resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };