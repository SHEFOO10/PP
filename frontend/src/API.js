import axios from 'axios';
const baseURL = 'http://localhost:8000/api';

export const login = async (credentials) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, credentials);
      return { success: true, msg: response.data };
    } catch (error) {
      if (error.response) {
        return { success: false, msg: error.response.data };
      } else if (error.request) {
        return { success: false, msg: 'Error sending request to the server' };
      } else {
        return { success: false, msg: 'Unexpected error occurred' };
      }
    }
};

export const signup = async (credentials) => {
    try {
      const response = await axios.post(`${baseURL}/auth/register`, credentials);
      return { success: true, msg: response.data };
    } catch (error) {
      if (error.response) {
        return { success: false, msg: error.response.data };
      } else if (error.request) {
        return { success: false, msg: 'Error sending request to the server' };
      } else {
        return { success: false, msg: 'Unexpected error occurred' };
      }
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${baseURL}/auth/logout`);
        return { success: true, msg: response.data };
    } catch (error) {
        if (error.response) {
        return { success: false, msg: error.response.data };
        } else if (error.request) {
        return { success: false, msg: 'Error sending request to the server' };
        } else {
        return { success: false, msg: 'Unexpected error occurred' };
        }
    }
};

export const getUser = async () => {
    // for testing frontend
    // return {success: true, 
    //     msg:{first_name: 'Mariem',
    //          last_name: 'Ehab',
    //          phone: '01553858484',
    //          email: 'mariem.ehab234@gmail.com',
    //          gender: 'Female',
    //          account_type: 'Student'}} 
    try {
      const response = await axios.post(`${baseURL}/auth/me`);
      return { success: true, msg: response.data };
    } catch (error) {
      if (error.response) {
        return { success: false, msg: error.response.data };
      } else if (error.request) {
        return { success: false, msg: 'Error sending request to the server' };
      } else {
        return { success: false, msg: 'Unexpected error occurred' };
      }
    }
};

export const getGrades = () => {
    // send a request to get all user courses grades (courses that he finished)
    // return {success: true, msg: [array of courses natega]}
    // return {sucess: false, msg: "error msg to be displayed"}

    return {success: true, msg:[
        {id: 1, name: 'CCNA 1', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
        {id: 2, name: 'JAVA', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
        {id: 3, name: 'Database', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
        {id: 4, name: 'Web Development', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
        {id: 5, name: 'Data Structure', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
        {id: 6, name: 'CCNA 1', grade: 'A+', pass: true, enroll_date: 'March 25, 2024'},
    ]}
}

export const getEvents = () => {
    //for calendar
    return { success: true, msg:[
        {
          id: 1,
          title: 'Event 1',
          start: new Date(2024, 3, 25, 10, 0), // April 25, 2024, 10:00 AM
          end: new Date(2024, 3, 25, 12, 0), // April 25, 2024, 12:00 PM
        },
        {
          id: 2,
          title: 'Event 2',
          start: new Date(2024, 3, 26, 14, 0), // April 26, 2024, 2:00 PM
          end: new Date(2024, 3, 26, 16, 0), // April 26, 2024, 4:00 PM
        },
      ]}
}