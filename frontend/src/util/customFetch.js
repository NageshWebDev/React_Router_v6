import { json } from "react-router-dom";

export function customFetch() {
  async function fetchData(url, body) {
    const response = await fetch(url, body);
    console.log("RESPONSE : ", response);

    // In a nutshell, the error means that you're making a request the server understands, but it can't process it
    if (response.status === 422) {
      console.log("response.status : 422");
      return await response.json();
    }

    if (!response.ok) {
      console.log("response.ok : ", response.ok);
      throw json(
        { message: `Request Failed : ${url}` },
        {
          status: response.status,
          statusText: response.statusText,
        }
      );
    }
    const jsonResponse = await response.json();
    console.log("jsonResponse : ", jsonResponse);

    const customResponse = {
      success: true,
      data: jsonResponse,
      message: "Request Successed",
    };

    console.log("customResponse : ", customResponse);
      return customResponse;
  }

  const customGet = async (url) => {
    console.log(`Getting data from ${url}`);
    return await fetchData(url, { method: "GET" });
  };

  const customPost = async (url, body) => {
    console.log("post body : ", body);
    return await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  };

  const customPatch = async (url, body) => {
    return await fetchData(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  };

  const customDelete = async (url) => {
    return await fetchData(url, { method: "DELETE" });
  };

  return {
    customDelete,
    customGet,
    customPost,
    customPatch,
  };
}
