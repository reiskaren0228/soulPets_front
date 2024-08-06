import axios from "axios";

export async function getPets() {
  const response = await axios.get("http://localhost:3000/pets");
  return response.data;
}

export async function getIdPets(id) {
  const response = await axios.get(`http://localhost:3000/pets/${id}`);
  return response.data;
}

export async function addPets(data) {
  const response = await axios.post("http://localhost:3000/pets", data);
  return response.data;
}

export async function updatePets(id, data) {
  const response = await axios.put(`http://localhost:3000/pets/${id}`, data);
  return response.data;
}

export async function excluiPets(id) {
  const response = await axios.delete(`http://localhost:3000/pets/${id}`);
  return response.data;
}
