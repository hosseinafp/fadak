import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    photo: Yup.mixed().required('لطفا عکس خود را انتخاب کنید'),
    name: Yup.string()
      .min(3, "نام باید بیشتر از ۳ حرف باشد")
      .required("لطفا نام را وارد کنید"),
    family: Yup.string()
        .min(3, "نام خانوادگی باید بیشتر از ۳ حرف باشد")
        .required("لطفا نام خانوادگی را وارد کنید"),
    userName: Yup.string()
        .min(5, "نام کاربری باید بیشتر از ۵ حرف باشد")
        .required("لطفا نام کاربری را وارد کنید"),
    password: Yup.string()
        .min(8, 'رمز عبور باید ۸ رقمی باشد')
        .required('رمز عبور الزامیست'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'رمز عبور صحیح نیست')
        .required('تکرار رمز عبور الزامیست')
});
const items = [
    {
      name:'name',
      title:'نام',
      type:'text',
    },
    {
      name:'family',
      title:'نام خانوادگی',
      type:'text',
    },
]

const items2 = [
    {
      name:'userName',
      title:'نام کاربری',
      type:'text',
    },
    {
      name:'password',
      title:'رمز عبور',
      type:'password',
    },
    {
        name:'confirmPassword',
        title:'تکرار رمز عبور',
        type:'password',
      },
  ]


const initialValues={
    photo: '',
    name: "",
    family: "",
    userName:"",
    password: "",
    confirmPassword:""
  }

export { validationSchema, items, initialValues, items2}