import { FormikTouched } from 'formik';
import Image from 'next/image';
import React from 'react';
import { PlusCircleDotted, ArrowRepeat, Trash3 } from 'react-bootstrap-icons';

interface PhotoProps {
    values: {
        photo?: any|undefined;
      };
      errors: {
        photo?: string;
      };
      touched: {
        photo?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
      };
  setFieldValue: (field: string, value: any) => void;
}

const Photo: React.FC<PhotoProps> = ({values, touched, errors, setFieldValue}) => {
    return (
        <>
         {values.photo ? 
            <div className="d-flex justify-content-center">
                <div className="position-relative">
                    
                <Image src={URL.createObjectURL(values.photo)} alt="Preview" className="mt-2 rounded"
                    width={90} height={120} />

                <label htmlFor="photo" className="pointer bg-white rounded start-0 bottom-0 position-absolute">
                    <ArrowRepeat className='m-1' title='تغییر عکس' />
                </label>

                <label onClick={() => {setFieldValue('photo', '')}}
                    className="pointer bg-white text-danger rounded end-0 bottom-0 position-absolute">
                    <Trash3 className='m-1' title='حذف عکس' />
                </label>

                </div>
            </div>
        :
            <div className="d-flex align-center justify-content-center mt-3 ">
                <label htmlFor="photo" className="pointer">
                    <div className="border rounded border-secondary p-1">
                        <PlusCircleDotted className='' />
                        <span className='text-secondary'> انتخاب عکس</span>
                    </div>
                </label>
            </div>
        }
        <div className="d-flex justify-content-center">
          {errors.photo && touched.photo ? <div className='text-danger pb-1 '>{errors.photo}</div>:<div className='pb-1'>&nbsp;</div>}
        </div>   
        </>
    );
};

export default Photo;
