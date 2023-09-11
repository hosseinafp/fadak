import React from 'react';
import Items from './Items';
import { ArrowRight } from 'react-bootstrap-icons';
import { items2 } from './data';

interface StepTwoProps {
  values: {
    userName: string,
    password: string,
    confirmPassword: string,
  };
  errors: {
    userName?: string,
    password?: string,
    confirmPassword?: string,
  };
  touched: {
    userName?: boolean,
    password?: boolean,
    confirmPassword?: boolean,
  };
  setCurrentStep: (step: number) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({values, errors, setCurrentStep, touched}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="card" style={{width: '18rem'}}>
                    <div className="">
                        <ArrowRight 
                            className='pointer rounded bg-dark text-white fs-3 p-1 m-1' 
                            title='بازگشت'
                            onClick={() => {
                                setCurrentStep(1);
                            }} 
                        />
                    </div>
                    <div className="card-body">
                        <Items values={values} items={items2} touched={touched} errors={errors} />
                        <div className='row justify-content-center'>    
                          <button className="col-6 btn btn-primary">ثبت اطلاعات</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;
