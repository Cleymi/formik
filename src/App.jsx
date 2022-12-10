import { useFormik } from 'formik';
import { schemaForm } from './schemas/schemas';
import Input from './common/Input';

export default function App() {
  const { values, handleChange, handleBlur, touched, handleSubmit, errors, status } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schemaForm,
  });

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label htmlFor="1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && touched.name ? 'input-error' : ''}`}
            name="name"
            id="1"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p className="input-msg">{errors.name}</p> }
        </div> */}
        <div className="mb-3">
          <Input
            label="Nombre"
            type="text"
            validate={{ e: errors.name, t: touched.name }}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Apellidos"
            type="text"
            validate={{ e: errors.lastname, t: touched.lastname }}
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Celular"
            type="text"
            validate={{ e: errors.phone, t: touched.phone }}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength="9"
            minLength="9"
          />
        </div>
        <div className="mb-3">
          <Input
            label="Correo"
            type="text"
            validate={{ e: errors.email, t: touched.email }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Contraseña"
            type="password"
            validate={{ e: errors.password, t: touched.password }}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Confirmar contraseña"
            type="password"
            validate={{ e: errors.confirmPassword, t: touched.confirmPassword }}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
}
