import axios from "axios";

import url from "./url";

async function fileClose() {
  const config = {
    method: "PUT",
    url: `upload`,
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  try {
    const res = await axios(config);
    if (res.status === 200) {
      const { data } = res;
      return data;
    }
  } catch (err) {
    return;
  }
}

export default fileClose;
