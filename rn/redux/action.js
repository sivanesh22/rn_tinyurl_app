export function updateUrlList(payload) {
  return { type: "UPDATE_URL_LIST", payload };
}
export function fetchUrlList() {
  return { type: "FETCH_URL_LIST" };
}
export function updateLoader() {
  return { type: "UPDATE_LOADER" };
}
