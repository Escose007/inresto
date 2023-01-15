import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restoMenuFields } from '../constants/restoMenu';
import FormAction from './formAction';
import Input from './input';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMenuItem } from '../store/restoMenu';

const fields = restoMenuFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

const ResstoMenu = () => {
  const [restoMenu, setRestoMenu] = useState(fieldsState);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setRestoMenu({ ...restoMenu, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMenuItem({ type: params.menuType, value: restoMenu }));
    navigate('/restomenu/' + params.menuType);
  };

  return (
    <div className="w-full">
      <h2 className="mt-6 text-3xl text-gray-700 capitalize">
        {params.menuType + ' Menu'}
      </h2>
      <form className="mt-8 container mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 sm:gap-6">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={restoMenu[field.id]}
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

export default ResstoMenu;
