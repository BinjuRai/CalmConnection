// import React from 'react';
// import './Booking.css';  // Assuming the CSS file is named ScheduleForm.css

// const ScheduleForm: React.FC = () => {
//   return (
//     <div className="schedule-container">
//       <header className="form-header">
//         <h1>Schedule A conversation</h1>
//         <button className="appointment-button">Book An Appointment</button>
//       </header>

//       <form className="form-content">
//         <div className="form-group">
//           <label>Full name</label>
//           <input type="text" placeholder="J. Doe" />
//         </div>

//         <div className="form-group">
//           <label>Age</label>
//           <input type="number" placeholder="22" />
//         </div>

//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" placeholder="Latipur" />
//         </div>

//         <div className="form-group">
//           <label>Gender</label>
//           <div className="gender-options">
//             <label><input type="radio" name="gender" value="male" /> Male</label>
//             <label><input type="radio" name="gender" value="female" /> Female</label>
//             <label><input type="radio" name="gender" value="other" /> Others</label>
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Contact no</label>
//           <input type="text" placeholder="Contact number" />
//         </div>

//         <div className="form-group">
//           <label>Appointment Type</label>
//           <div className="appointment-options">
//             <label><input type="radio" name="appointmentType" value="online" /> Online</label>
//             <label><input type="radio" name="appointmentType" value="physical" /> Physical</label>
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Date</label>
//           <input type="date" />
//         </div>

//         <button className="submit-button" type="submit">Schedule</button>
//       </form>
//     </div>
//   );
// };

// export default ScheduleForm;


import React, { useState } from 'react';
import './Booking.css';  // Assuming the CSS file is named Booking.css

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    gender: '',
    contactNo: '',
    appointmentType: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="schedule-container">
      <header className="form-header">
        <h1>Schedule A Conversation</h1>
        <button className="appointment-button">Book An Appointment</button>
      </header>

      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="J. Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="22"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Latipur"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              /> Others
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contactNo">Contact No</label>
          <input
            type="text"
            name="contactNo"
            placeholder="Contact number"
            value={formData.contactNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Appointment Type</label>
          <div className="appointment-options">
            <label>
              <input
                type="radio"
                name="appointmentType"
                value="online"
                checked={formData.appointmentType === 'online'}
                onChange={handleChange}
              /> Online
            </label>
            <label>
              <input
                type="radio"
                name="appointmentType"
                value="physical"
                checked={formData.appointmentType === 'physical'}
                onChange={handleChange}
              /> Physical
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button className="submit-button" type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default Booking;
