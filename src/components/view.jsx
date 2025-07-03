import React, { useEffect, useState } from "react";
import { getAllStudents } from "../api/studentApi";

function View() {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setMessage("");

        const response = await getAllStudents();
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
        setMessage(
          error.response?.data ||
            "Failed to load students. Please ensure you are logged in."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <p style={styles.loadingMessage}>Loading students...</p>
      </div>
    );
  }

  return (
    <div style={styles.cardContainer}>
      <h1 style={styles.heading}>Students List</h1>
      {message && <p style={styles.errorMessage}>{message}</p>}
      {students.length > 0
        ? students.map((s, i) => (
            <div key={i} style={styles.card}>
              <strong>{s.Name}</strong>
              <p>Roll No: {s.Roll_no}</p>
              <p>Birthday: {new Date(s.Birthday).toLocaleDateString()}</p>
            </div>
          ))
        : !message && (
            <p style={styles.noStudentsMessage}>No students found.</p>
          )}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#212121",
    minHeight: "calc(100vh - 60px)",
    color: "#f0f0f0",
  },
  heading: {
    width: "100%",
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "30px",
    color: "#61dafb",
  },
  card: {
    backgroundColor: "rgb(55, 52, 134)",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "left",
    color: "#fff",
  },
  loadingMessage: {
    fontSize: "1.2em",
    color: "#ccc",
    textAlign: "center",
    width: "100%",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginBottom: "20px",
  },
  noStudentsMessage: {
    fontSize: "1.1em",
    color: "#ccc",
    textAlign: "center",
    width: "100%",
  },
};

export default View;
