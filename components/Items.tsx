import { Field, FormikTouched } from 'formik';
import React, { useState } from 'react';
import { CheckLg, Eye, EyeFill } from 'react-bootstrap-icons';

// Define the types for your props
interface Item {
  name: string;
  type: string;
  title: string;
}

interface ItemsProps {
  values: {
    [key: string]: any; // This will allow for dynamic keys based on the item names
  };
  touched: {
    [key: string]: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  };
  errors: {
    [key: string]: string;
  };
  items: Item[];
}

const Items: React.FC<ItemsProps> = ({values, touched, errors, items}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h5 className="card-title inputWrapper m-0 d-flex justify-content-center">
            {values[item.name] && !(errors[item.name] && touched[item.name]) && <CheckLg className='inputIcon text-success' />}
            {values[item.name] && item.type === 'password' &&
              <>
                {!showPassword ?
                  <Eye className='inputIconPassword' title='رمز' onClick={() => setShowPassword(!showPassword)} /> :
                  <EyeFill className='inputIconPassword' title='رمز' onClick={() => setShowPassword(!showPassword)} />}
              </>
            }
            <Field 
              name={item.name}
              type={item.type !== 'password' ? item.type : showPassword ? 'text' : item.type}
              placeholder={item.title}
              style={{ border: '0.3px solid red'}} 
              className={`nameInput p-2 rounded ${errors[item.name] && touched[item.name] ? 'border-danger' : values[item.name] ? 'border-success' : 'border-dark'}`}
            />
          </h5>
          {errors[item.name] && touched[item.name] ? <div className='text-danger pb-1'>{errors[item.name]}</div> : <div className='pb-1'>&nbsp;</div>}
        </React.Fragment>
      ))}   
    </>
  );
};

export default Items;
