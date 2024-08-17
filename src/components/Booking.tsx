import React from 'react';
import './ScheduleForm.css';  // Assuming the CSS file is named ScheduleForm.css

const ScheduleForm: React.FC = () => {
  return (
    <div className="schedule-container">
      <header className="form-header">
        <h1>Schedule A conversation</h1>
        <button className="appointment-button">Book An Appointment</button>
      </header>

      <form className="form-content">
        <div className="form-group">
          <label>Full name</label>
          <input type="text" placeholder="J. Doe" />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="22" />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Latipur" />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="other" /> Others</label>
          </div>
        </div>

        <div className="form-group">
          <label>Contact no</label>
          <input type="text" placeholder="Contact number" />
        </div>

        <div className="form-group">
          <label>Appointment Type</label>
          <div className="appointment-options">
            <label><input type="radio" name="appointmentType" value="online" /> Online</label>
            <label><input type="radio" name="appointmentType" value="physical" /> Physical</label>
          </div>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>

        <button className="submit-button" type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default ScheduleForm;
