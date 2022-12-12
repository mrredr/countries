export const useAuth = () => {
  const authToken = localStorage.getItem("authToken");

  return authToken !== null;
};
