import React from "react";
const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

function AppointmentsDayView({ appointments }) {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, idx) => (
          <li key={idx}>{appointmentTimeOfDay(appointment.startsAt)}</li>
        ))}
      </ol>
    </div>
  );
}

export default AppointmentsDayView;
