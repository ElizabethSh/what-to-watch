export const adaptUserData = (data) => {
  const adaptedData = {
    ...data,
    avatarUrl: data.avatar_url
  };

  delete adaptedData.avatar_url;

  return adaptedData;
};
