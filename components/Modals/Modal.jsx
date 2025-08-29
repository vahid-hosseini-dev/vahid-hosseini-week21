import AddModalForm from "./AddModalForm";
import DeleteModal from "./DeleteModal";
import EditModalForm from "./EditModalForm";

function Modal({ modalType, setModalType, selectProduct }) {
  if (!modalType) return null;

  switch (modalType.type) {
    case "addProduct":
      return <AddModalForm setModalType={setModalType} />;
    case "delete":
      return (
        <DeleteModal
          selectProduct={selectProduct}
          setModalType={setModalType}
        />
      );
    case "edit":
      return <EditModalForm setModalType={setModalType} />;
    default:
      return null;
  }
}
export default Modal;
