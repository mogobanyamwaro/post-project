export const getAuthConfig = () => {
  const token = localStorage.getItem("_id");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
};

export const getAuthFileConfig = () => {
  const token = localStorage.getItem("_id");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
  };
};

export const getFileUploadConfig = () => {
  const token = localStorage.getItem("_id");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
    },
  };
};
