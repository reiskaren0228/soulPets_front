import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { addPets, getIdPets, updatePets } from "../api/pets";
import { getClientes } from "../api/clientes";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function NovoPet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();
  const [clientes, setClientes] = useState([]);

  // Função para carregar a lista de clientes
  function carregarClientes() {
    getClientes()
      .then(setClientes)
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  
  function carregarPet() {
    if (id) {
      getIdPets(id)
        .then((dados) => {
          reset(dados);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          navigate("/pets");
        });
    }
  }

  function salvarPet(data) {
    const action = id ? updatePets(id, data) : addPets(data);
    action
      .then((resposta) => {
        toast.success(resposta.message);
        navigate("/pets");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    carregarClientes();
    carregarPet();
  }, [id]);

  return (
    <main className='mt-4 container'>
      <h1>{id ? "Editar Pet" : "Novo Pet"}</h1>
      <hr />
      <form onSubmit={handleSubmit(salvarPet)}>
        <div>
          <label htmlFor='nome'>Nome do Pet</label>
          <input
            type='text'
            id='nome'
            className='form-control'
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className='text-danger'>O nome do pet é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor='tipo'>Espécie</label>
          <input
            type='text'
            id='tipo'
            className='form-control'
            {...register("tipo", { required: true, maxLength: 200 })}
          />
          {errors.tipo && (
            <small className='text-danger'>A espécie é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor='porte'>Porte</label>
          <input
            type='text'
            id='porte'
            className='form-control'
            {...register("porte", { required: true, maxLength: 200 })}
          />
          {errors.porte && (
            <small className='text-danger'>O porte é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor='dataNasc'>Data de Nascimento</label>
          <input
            type='date'
            id='dataNasc'
            className='form-control'
            {...register("dataNasc", { required: true })}
          />
          {errors.dataNasc && (
            <small className='text-danger'>
              A data de nascimento é inválida!
            </small>
          )}
        </div>
        <div>
          <label htmlFor='clienteId'>Tutor</label>
          <select
            id='clienteId'
            className='form-control'
            {...register("clienteId", { required: true })}
          >
            <option value=''>Selecione um tutor</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
          {errors.clienteId && (
            <small className='text-danger'>O tutor é inválido!</small>
          )}
        </div>
        <Button className='mt-3' type='submit'>
          {id ? "Atualizar" : "Cadastrar"}
        </Button>
      </form>
    </main>
  );
}

export default NovoPet;
