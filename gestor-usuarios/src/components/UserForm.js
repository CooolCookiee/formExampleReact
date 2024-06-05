import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";

const UserForm = ({submit}) => {
  const { formulario, handleChange, reset } = useForm({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <Input
        label="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <Input
        label="Correo"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        placeholder="Correo"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;