// 格式化日期為 YYYY/MM/DD
export const formatDate = (timestamp) => {
  const now = timestamp ? new Date(timestamp * 1000) : new Date();
  // 取得年份、月份和日期
  const year = now.getFullYear();
  // 月份從0開始，所以需要+1
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  // 格式化日期為 YYYY/MM/DD
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};
// 格式化日期為 MM月DD日
export const formatDateTW = (timestamp) => {
  const now = timestamp ? new Date(timestamp * 1000) : new Date();

  // 月份從0開始，所以需要+1
  const month = String(now.getMonth() + 1);
  const day = String(now.getDate()).padStart(2, "0");

  // 格式化日期為 YYYY/MM/DD
  const formattedDate = `${month}月${day}日`;
  return formattedDate;
};

export const formatDateTime = (timestamp) => {
  const now = timestamp ? new Date(timestamp * 1000) : new Date();

  // 取得年份、月份、日期、時、分
  const year = now.getFullYear();
  // 月份從0開始，所以需要+1
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // 格式化日期和時間為 YYYY/MM/DD HH:mm
  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}`;
  return formattedDateTime;
};
