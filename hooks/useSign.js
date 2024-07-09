import { md5 } from "js-md5";

export function useSign(params) {
  const data = { ...params, timestamp: parseInt(Date.now() / 1000) };
  const secretKey = "holax_ugloss";

  //移除 sign 字段
  if (data.hasOwnProperty("sign")) {
    delete data["sign"];
  }

  // 按键名排序
  const sortedKeys = Object.keys(data).sort();

  // 构建签名字符串
  let sign = "";
  for (let i = 0; i < sortedKeys.length; i++) {
    const key = sortedKeys[i];
    const value = data[key];
    if ("sign" !== key) {
      sign += key + value;
    }
  }

  sign = md5.hex(sign + secretKey);

  data["sign"] = sign;

  // 返回带签名的数据体
  return data;
}
