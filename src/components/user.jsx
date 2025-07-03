import React from "react";

function User() {

    const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Axios error:", error));
  }, []);
  
  return (
    <div>
      <h2>User Page</h2>
      <p>This page is under development 👩‍💻</p>
    </div>
  );
}

export default User;