import React from "react";
import Appointment from "./appointment";
const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

function AppointmentsDayView({ appointments }) {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment) => (
          <li key={appointment.startsAt}>
            <button type="button">
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      ;
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[0]} />
      )}
    </div>
  );
}

export default AppointmentsDayView;
