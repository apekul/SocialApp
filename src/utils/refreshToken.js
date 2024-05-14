export const getNewAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    if (!refreshToken) {
      throw new Error("Refresh token is missing");
    }
    const response = await fetch("http://localhost:3000/auth/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    });

    const responseData = await response.json();
    const { accessToken } = responseData;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    // console.error("Error refreshing access token:", error);
    throw error;
  }
};
