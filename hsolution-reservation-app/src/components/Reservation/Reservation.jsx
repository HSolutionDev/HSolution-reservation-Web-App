import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const res = await fetch("/api/appointments");
      const data = await res.json();
      setAppointments(data);
    }
    fetchAppointments();
  }, []);

  return (
    <div className="Home">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/book">Réserver une coiffure</Link>
      </nav>
      <h1>Prochaines coiffures</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Nom du client</th>
            <th>Téléphone</th>
            <th>Type de coiffure</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.haircut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
