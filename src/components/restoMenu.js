import { loginFields } from '../constants/formFields';
import FormAction from './formAction';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

const RestoMenu = () => {
  const params = useParams();
  const menu = useSelector((state) => state.restoMenu.menu[params.menuType]);

  return (
    <div className="w-full my-8 container">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 sm:gap-6">
        {menu.map((menuItem, index) => (
          <div
            key={index}
            className="rounded border font-base text-base flex my-2 text-slate-700 bg-white-500 shadow-lg shadow-white-500/50"
          >
            <div className="p-2 text-sm flex-1">
              <div className="text-lg pb-1">{menuItem.dishName}</div>
              <div className="">{menuItem.dishDetails}</div>
              <div>
                <span>&#8377;</span>
                <span>{menuItem.price}</span>
              </div>
            </div>
            <div>
              <img
                style={{
                  'flex-shrink': '0',
                  'min-width': '100%',
                  'min-height': '100%',
                  height: '5rem',
                  width: '10rem',
                }}
                src={process.env.PUBLIC_URL + '/food2.jpg'}
                alt="food"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-100 xl:w-40 float-right">
        <FormAction
          type="link"
          action={'/addrestomenu/' + params.menuType}
          text="Add Item"
        />
      </div>
    </div>
  );
};

export default RestoMenu;
