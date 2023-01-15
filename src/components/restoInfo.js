import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restoInfoFields } from '../constants/restoinfo';
import FormAction from './formAction';
import Input from './input';

const fields = restoInfoFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

const RestoInfo = () => {
  const [restoInfo, setRestoInfo] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRestoInfo({ ...restoInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/restomenu/breakfast');
  };

  return (
    <div className="w-full">
      <h2 className="mt-6 text-3xl text-gray-700">Restorent Details</h2>
      <form className="mt-8 container mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 sm:gap-6">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={restoInfo[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <div className="md:w-100 xl:w-40 float-right">
          <FormAction handleSubmit={handleSubmit} text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RestoInfo;
