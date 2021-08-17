import axios from "axios";

const url = "https://www.googleapis.com/books/v1/volumes";

export const getBooks = async (titleKeyword) => {
  const res = await axios.get(
    `${url}?q=${titleKeyword}+intitle:${titleKeyword}`
  );
  return res.data;
};
