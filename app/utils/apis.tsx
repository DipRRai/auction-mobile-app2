const url = "http://192.168.1.103:3000/";

export default async function getProducts() {
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error("getProducts failed while running");
    }
    const data = await response.json();
    // console.log("Response Data:", data);
    return data;
  } catch (error) {
    console.error("getProducts failed while running2:", error);
    throw error;
  }
}
