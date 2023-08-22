const truncateText = (text: string, maxLength: number) => {
  const truncatedText = text.substring(0, maxLength);
  return `${truncatedText}${text.length > maxLength ? "..." : ""}`;
};

export default truncateText;
