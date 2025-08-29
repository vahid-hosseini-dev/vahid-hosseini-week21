import * as yup from "yup";

const addModalSchema = yup.object({
  name: yup.string().required("نام کالا الزامی است"),
  quantity: yup.string().required("تعداد موجودی الزامی است"),
  price: yup.string().required("قیمت الزامی است"),
});

export { addModalSchema };
