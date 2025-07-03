
export function register(data) {
  return fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

// Call backend to login user
export function login(data) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

// Return the saved token from localStorage
export function getCurrentUser() {
  return localStorage.getItem("token");
}

// Remove the token
export function logout() {
  localStorage.removeItem("token");
}

