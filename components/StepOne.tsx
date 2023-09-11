import React from 'react';
import Photo from './Photo';
import Items from './Items';
import { items } from './data';
import { FormikTouched } from 'formik';

interface StepOneProps {
  values: {
    photo: any|undefined;
    name: string | undefined;
    family: string | undefined;
  };
  errors: {
    photo?: any|undefined;
    name?: string | undefined;
    family?: string | undefined;
  };
  touched: {
    photo?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined; 
    name?: boolean | undefined; 
    family?: boolean | undefined; 
  };
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  isSubmitting: boolean;
  setCurrentStep: (step: number) => void;
}

const StepOne: React.FC<StepOneProps> = ({values, errors, setFieldValue, isSubmitting, setCurrentStep, touched}) => {
    return (
        <>
            <input
                id="photo"
                name="photo"
                style={{display: 'none'}}
                type="file"
                onChange={(event) => {
                    if (event.currentTarget.files) {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }
                }}
                />
            <div className="d-flex justify-content-center h-100">
                <div className="d-flex align-items-center">
                    <div className="card" style={{width: '18rem'}}> 
                        <Photo values={values} setFieldValue={setFieldValue} touched={touched} errors={errors} />
                        <div className="card-body">    
                            <Items values={values} items={items} touched={touched} errors={errors} />
                            <div className='row justify-content-center'>    
                                <button className="col-6 btn btn-primary" onClick={() => {
                                    if (values.photo && values.name && values.family) {
                                      setCurrentStep(2);
                                    }
                                }}>
                                  مرحله بعد
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepOne;
