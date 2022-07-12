import * as yup from 'yup';

export const validations = yup.object({
    uploadFormik: yup.string().required('Required'),
    descFormik: yup.string().required('Required'),
    dateFormik: yup.string().required('Required')
});