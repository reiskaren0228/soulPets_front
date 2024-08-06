import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { excluiPets, getPets } from "../api/pets";
import { getClientes } from "../api/clientes";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

function Pets() {
  const [pets, setPets] = useState(null);
  const [clientes, setClientes] = useState(null);

  function carregarDados() {
    Promise.all([getPets(), getClientes()]).then(
      ([dadosPets, dadosClientes]) => {
        setPets(dadosPets);
        setClientes(dadosClientes);
      }
    );
  }

  function excluirPets(id) {
    const excluir = confirm("Tem certeza que deseja excluir esse Pet?");
    if (excluir) {
      excluiPets(id).then((resposta) => {
        toast.success(resposta.message);
        carregarDados();
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  if (!pets || !clientes) {
    return <Loader />;
  }

  return (
    <main className='mt-4 container'>
      <h1>Pets</h1>
      <Button as={Link} to='/pets/novo'>
        Adicionar Pet
      </Button>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Porte</th>
            <th>Nascimento</th>
            <th>Tutor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => {
            const tutor = clientes.find(
              (cliente) => cliente.id === pet.clienteId
            );
            return (
              <tr key={pet.id}>
                <td>{pet.nome}</td>
                <td>{pet.tipo}</td>
                <td>{pet.porte}</td>
                <td>{pet.dataNasc}</td>
                <td>{tutor ? tutor.nome : "Desconhecido"}</td>
                <td>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => excluirPets(pet.id)}
                  >
                    Excluir
                  </Button>
                  <Button size='sm' as={Link} to={`/pets/editar/${pet.id}`}>
                    Editar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
}

export default Pets;
