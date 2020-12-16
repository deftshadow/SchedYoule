export const weekToNumber = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6,
};

const ScheduleService = {
  getSchedule: async (setData) => {
    const response = await fetch(`/schedule/user/${window.userId}`);
    console.log(`/schedule/user/${window.userId}`)
    console.log(response)
    const responseJson = await response.json();
    setData({ ...responseJson });
  },

  changeSchedule: async (data, success) => {
    const bodyData = JSON.stringify({
      userId: window.userId,
      days: data,
    });
    console.log(data)
    const response = await fetch(`/schedule`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: bodyData,
    });
    if (response.status === 200) {
      success((prevState) => !prevState);
      return "Success";
    } else {
      return "Something went wrong";
    }
  },

  deleteSchedule: async (dayOfWeek, data, index, success) => {
    const bodyData = JSON.stringify({
      userId: window.userId,
      days: data,
    });

    const response = await fetch(`/schedule`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: bodyData,
    });
    if (response.status === 200) {
      success((prevState) => !prevState);
      console.log('success')
      return "Success";
    } else {
      return "Something went wrong";
    }
  },

  addSchedule: async (dayOfWeek, data, success) => {
    const bodyData = JSON.stringify({
      userId: window.userId,
      days: data,
    });

    const response = await fetch(`/schedule`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: bodyData,
    });
    if (response.status === 200) {
      success((prevState) => !prevState);
      return "Success";
    } else {
      return "Something went wrong";
    }
  },

  addTodoHandler: async (name, description, userId) => {
    const response = await fetch(`/todo/user/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    if (response.status < 400) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      return "";
    }
  },

  toggleDoneHandler: async (id, name, description, done) => {
    const response = await fetch("/todo/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        id: id,
        done: !done,
        name: name,
        description: description,
      }),
    });
    return response.status;
  },

  deleteTodoHandler: async (id) => {
    const response = await fetch(`/todo/${id}`, {
      method: "DELETE",
    });
    return response.status;
  },
};
export default ScheduleService;
