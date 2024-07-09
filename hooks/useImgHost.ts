const HOSTS = {
  // 开发版
  develop: "https://build-1305866201.cos.ap-guangzhou.myqcloud.com/img/ugloss/",
  // 正式版
  release: "https://build-1305866201.file.myqcloud.com/img/ugloss/",
};

function combineURLs(baseURL: string, relativeURL: string) {
  // 确保基本URL不以斜杠结尾
  const cleanedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  // 确保相对URL以斜杠开头
  const cleanedRelativeURL = relativeURL.startsWith("/")
    ? relativeURL
    : "/" + relativeURL;

  return cleanedBaseURL + cleanedRelativeURL;
}

function makeImgHost(img: string) {
  const host = process.env.NODE_ENV === "development" ? "develop" : "release";
  const url = combineURLs(HOSTS[host], img);
  return url.toString();
}

export default function useImgHost() {
  return {
    makeImgHost,
  };
}
