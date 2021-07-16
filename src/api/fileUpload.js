import axios from "axios";

async function fileUpload(file) {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    method: "POST",
    url: "upload",
    headers: { "Access-Control-Allow-Origin": "*" },
    data: formData,
    responseType: "blob",
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

export default fileUpload;
