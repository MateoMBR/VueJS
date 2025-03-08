export const getFeeds = () => {
  return JSON.parse(localStorage.getItem('feeds')) || [];
};

export const saveFeeds = (feeds) => {
  localStorage.setItem('feeds', JSON.stringify(feeds));
};

export const getPreferences = () => {
  return JSON.parse(localStorage.getItem('preferences')) || [];
};

export const savePreferences = (preferences) => {
  localStorage.setItem('preferences', JSON.stringify(preferences));
};