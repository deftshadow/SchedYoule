const UserService = {
  submitLogInHandler: async (username, password, success) => {
    const params = new URLSearchParams({
      username: username,
      password: password,
    });

    const url = `/login?${params.toString()}`;

    const response = await fetch(url, {
      method: "POST",
    });
    if (response.status === 200) {
      const id = await UserService.getUserId(success);
      return "";
    }

    return "Username or password is invalid";
  },

  submitSignUpHandler: async (username, password, success) => {
    const response = await (fetch('/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }))
    console.log(response)

    if (response.status === 200) {
      success();
      return;
    }

    const responseJson = await response.json()
    return responseJson.message;
},

  getUserId: async (success) => {
    const response = await fetch("/user/info");
    if (response.status === 200) {
      const responseJson = await response.json();
      window.userId = responseJson.id;
      success(true);
      return responseJson.id;
    } else {
      return "";
    }
  },
};

export default UserService;
