import axios from 'axios'

const baseURL = `https://beautysite-backend.onrender.com/appointment`
//const baseURL = 'http://localhost:3001/appointment'
// Show all
export const getAppointments = () => {
    const URL = baseURL 
    const response = axios.get(URL) 
    return response
}
// Show one
export const getAppointment = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
// Edit 
export const editAppointment = async (id, updatedAppointment) => {
    const URL = `${baseURL}/${id}`;
    try {
      const response = await axios.put(URL, updatedAppointment);
      return response.data;
    } catch (error) {
      throw new Error('Error editing appointment');
    }
  };
 // Create
export const createAppointment = (appointment) => {
    const URL = baseURL
    const response = axios.post(URL, appointment)
    return response
}
// Delete 
export const deleteAppointment = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

