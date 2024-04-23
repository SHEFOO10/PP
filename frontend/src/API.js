export const login = (credintials) => {
    // send user credintials to backend in a login request 
    // return is simillar to getUser function
    // credintials = {email: '...', password: '...'}

    return {success: true, msg:{first_name: 'Mariem',
    last_name: 'Ehab',
    phone: '01553858484',
    email: 'mariem.ehab234@gmail.com',
    gender: 'Female',
    role: 'Student'}}
}

export const signup = (credintials) => {
    // send user credintials to backend in a signup request 
    // return {success: true, msg: ..} if signed up successfully
    // return {success: false, msg: 'error msg'} otherwise
    // credintials: {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//     gender: '',
//     }
    return {success: true, msg: null}
}

export const logout = () => {
    // send a logout request
    // return {success: true, msg: ''} successful
    // return {success: false, msg: 'error msg'} otherwise
    return {success: true, msg: null}
}

export const getUser = () => {
    // This will send a request to the backend to get user info if user is logged in
    // return {success: true, msg: {first_name:'', last_name:'', phone:'', email:''}}
    // return {sucess: false, msg: "error msg to be displayed"}

    return {success: true, msg:{first_name: 'Mariem',
            last_name: 'Ehab',
            phone: '01553858484',
            email: 'mariem.ehab234@gmail.com',
            gender: 'Female',
            role: 'Student'}}
}

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