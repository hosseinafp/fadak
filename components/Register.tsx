import React, { useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { validationSchema, initialValues } from './data';
import { useMutation } from 'react-query';
import axios from 'axios';
import StepOne from './StepOne';
import StepTwo from './StepTwo';



interface FormValues {
  photo: string|any;
  name: string;
  family: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const mutation = useMutation((data: FormValues) => axios.post('http://localhost:5000/users', data));

  return (
    <div className="h-100">
      <Formik
        className='h-100'
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues) => {
          console.log(values);
          mutation.mutate(values);
          alert('دیتا با موفقیت ثبت شد');
          window.location.reload();
          
        }}
      >
        {({ isSubmitting, setFieldValue, values, errors, touched }: FormikProps<FormValues>) => (
          <Form className='h-100'>
            {
              currentStep === 1 ? (
                  <StepOne {...{values, errors, setFieldValue, isSubmitting, setCurrentStep, touched}} />
                ):
                  <StepTwo {...{values, errors, isSubmitting, setCurrentStep, touched}} />
            }
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
