const Auth = {
  login: ({ token, username, typeOfUser, emailId, phone, user_id }) => {
    // Save user data in localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username);
    localStorage.setItem("typeOfUser", typeOfUser);
    localStorage.setItem("emailId", emailId);
    localStorage.setItem("phone", phone);
    localStorage.setItem("user_id", user_id); // Save user_id

    // Store all user data together for easy retrieval
    localStorage.setItem("userData", JSON.stringify({
      token,
      username,
      typeOfUser,
      emailId,
      phone,
      user_id // Store user_id as part of user data
    }));
  },

  logout: () => {
    // Remove user data from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("typeOfUser");
    localStorage.removeItem("emailId");
    localStorage.removeItem("phone");
    localStorage.removeItem("user_id"); // Remove user_id
    localStorage.removeItem("userData");
  },

  isAuthenticated: () => {
    // Check if the user is authenticated based on the token
    return !!localStorage.getItem("authToken");
  },

  getUserType: () => {
    // Get the type of user from localStorage
    return localStorage.getItem("typeOfUser");
  },

  getAuthData: () => {
    // Get user data from localStorage
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  },

  getUserDetails: () => {
    // Return user data from localStorage
    return Auth.getAuthData();
  },

  getToken: () => {
    // Get the authentication token from localStorage
    return localStorage.getItem("authToken");
  },

  getUsername: () => {
    // Get the username from localStorage
    return localStorage.getItem("username");
  },

  getUserId: () => {
    // Get the user_id from localStorage
    return localStorage.getItem("user_id"); // Retrieve user_id
  }
};

export default Auth;
