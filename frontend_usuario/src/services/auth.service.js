import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (dni, name, email, rol, password, confirm_password) => {
  return axios.post(API_URL + "register", {
    dni,
    name,
    email,
    rol,
    password,
    confirm_password
  })
  .then((response) => {
    console.log(response.data);
    if (response.data.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.data.token);
    }

    return response.data;
  });
};

const registercli = (
  dni, 
  name,
  email, 
  rol, 
  password, 
  confirm_password, 
  provincia, 
  municipio, 
  codigo_postal, 
  direccion, 
  telefono
  ) => {
  return axios.post(API_URL + "registercli", {
    dni,
    name,
    email,
    rol,
    password,
    confirm_password,
    provincia, 
    municipio, 
    codigo_postal, 
    direccion, 
    telefono
  })
  .then((response) => {
    console.log(response.data);
    if (response.data.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.data.token);
    }

    return response.data;
  });
};


const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.data.token);
        
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const userId = () => {
  // return getCurrentUser().data.id;
  const user = JSON.parse(localStorage.getItem("user"));
  return user.data.id;
} 

const getToken = () => {
  return localStorage.getItem("token");
}

const AuthService = {
  register,
  registercli,
  login,
  logout,
  getCurrentUser,
  userId,
  getToken,
};



export default AuthService;