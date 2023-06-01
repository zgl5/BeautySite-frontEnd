import React from 'react';
import { createAppointment, getAppointments, deleteAppointment, editAppointment } from '../utilities/appointmentApi';


class NewAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
      appointments: [],
      showDetailsId: null,
      editAppointment: null
    };
  }

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      const appointments = response.data;
      this.setState({ appointments });
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault(); 

    const { name, email, phone } = event.target.elements;

   
    const appointmentData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await createAppointment(appointmentData);
      console.log(response);
      this.setState({ successMessage: 'Appointment created successfully!' });
      this.fetchAppointments(); 
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  handleShowDetails = (id) => {
    this.setState({ showDetailsId: id });
  };

  handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      this.fetchAppointments(); 
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  handleEdit = (id) => {
    const { appointments } = this.state;
    const appointment = appointments.find((appointment) => appointment._id === id);

    if (appointment) {
      this.setState({ showDetailsId: id, editAppointment: appointment });
    } else {
      console.error('Appointment not found for editing');
    }
  };

 handleSubmitEdit = async (event) => {
  event.preventDefault();

  const { name, email, phone } = event.target.elements;
  const { editAppointment } = this.state;


  const updatedAppointment = {
    ...editAppointment,
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  try {
    await editAppointment(editAppointment._id, updatedAppointment);
    this.setState({ editAppointment: null });
    this.fetchAppointments();
  } catch (error) {
    console.error('Error updating appointment:', error);
  }
};
  

  render() {
    const timestamp = new Date().toLocaleString();
    const { successMessage, appointments, showDetailsId, editAppointment } = this.state;

    return (
      <div>
        <h1>Appointment</h1>
        {successMessage && <p>{successMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <br />
          <label>Email:</label>
          <input type="text" name="email" required />
          <br />
          <br />
          <label>Phone:</label>
          <input type="text" name="phone" required />
          <br />
          <br />
          <label>Timestamp: {timestamp}</label>
          <br />
          <br />
          <input type="submit" value="Create Appointment" />
        </form>
        <br />
        <br />
        <nav>
          <a href="/appointment">
            <strong>See All Appointments</strong>
          </a>
        </nav>

        <h2>All Appointments:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.timestamp}</td>
                <td>
                  <button onClick={() => this.handleShowDetails(appointment._id)}>Show</button>
                  <button onClick={() => this.handleEdit(appointment._id)}>Edit</button>
                  <button onClick={() => this.handleDelete(appointment._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showDetailsId && (
          <div>
            <h2>Appointment Details</h2>
            <p>ID: {showDetailsId}</p>
            {appointments.map((appointment) => {
              if (appointment._id === showDetailsId) {
                return (
                  <div key={appointment._id}>
                    <p>Name: {appointment.name}</p>
                    <p>Email: {appointment.email}</p>
                    <p>Phone: {appointment.phone}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}

        {editAppointment && (
          <div>
            <h2>Edit Appointment:</h2>
            <form onSubmit={this.handleSubmitEdit}>
              <label>Name:</label>
              <input type="text" name="name" defaultValue={editAppointment.name} /><br/><br/>
              <label>Email:</label>
              <input type="text" name="email" defaultValue={editAppointment.email} /><br/><br/>
              <label>Phone:</label>
              <input type="text" name="phone" defaultValue={editAppointment.phone} /><br/><br/>
              <input type="submit" value="Submit Changes" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NewAppointment;
