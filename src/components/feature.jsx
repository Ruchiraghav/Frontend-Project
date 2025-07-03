import React from "react";

function Feature() {

    const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Axios error:", error));
  }, []);
  
  return (
    <div>
      <h2>Here are some Features</h2>
    </div>
  );
}

export default Feature;