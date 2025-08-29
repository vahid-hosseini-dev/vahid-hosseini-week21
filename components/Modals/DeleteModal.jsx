import api from "../../services/config";
import { useContext, useState } from "react";
import { Toast } from "../Toast";

import { productContext } from "../../context/productContext";
import { useRouter } from "next/router";

function DeleteModal({ setModalType, selectProduct }) {
  const { productInfo } = useContext(productContext);
  console.log("Deleting product id:", productInfo.id);

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  const router = useRouter();

  const deleteHandler = async () => {
    try {
      if (productInfo.id) {
        await api.delete(`/products/${productInfo.id}`);
      } else if (selectProduct.length > 0) {
        await api.delete("/products", { data: { ids: selectProduct } });
      }
      showToast("کالا از لیست حذف شد", "success");
      setTimeout(() => {
        setModalType(null);
      }, 2000);
    } catch (err) {
      console.log(err.response?.data);
      if (
        err.response?.data?.message ===
          "Unauthorized, token missing or invalid" ||
        err.response?.data?.message === "Product not found"
      ) {
        showToast("دوباره لاگین کنید", "error");
        setTimeout(() => {
          router("/auth/login");
        }, 2000);
      }
    }
  };

  return (
    <div
      onClick={() => setModalType(null)}
      className="w-full h-full bg-black/5 backdrop-blur-xs fixed top-0 left-0 z-50 flex justify-center items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="formClass !w-[460px] !min-h-[338px]"
      >
        <img className="size-[96px] m-auto" src="/img/Close.png" alt="close" />
        <p className="text-xl text-center">آیا از حذف این محصول مطمئنید؟</p>
        <div className="flex justify-center items-end m-2 gap-3">
          <button
            onClick={deleteHandler}
            className="btnClass !bg-[rgba(244,63,94,1)] !w-[160px] !min-h-[42px]"
          >
            حذف
          </button>
          <button
            className={
              "btnClass !bg-[rgba(223,223,223,1)] !text-[rgba(40,40,40,0.8)] !w-[160px] !min-h-[42px]"
            }
          >
            لغو
          </button>
        </div>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </form>
    </div>
  );
}

export default DeleteModal;
