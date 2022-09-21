import React from "react";
import ReactDOM from "react-dom";

const useModal = () => {
    let [modal, setModal] = React.useState(false);
    let [ModalContent, setModalContent] = React.useState('');

    let handleModal = (ContentComponent) => {
        setModal(!modal);
        if (ContentComponent) {
            setModalContent(ContentComponent);
        }
    };

    return { modal, handleModal, ModalContent };
};

type ModalContext = {
    modal: string;
    handleModal: number;
    ModalContent?: string;
};

let ModalContext = React.createContext({});
let { Provider } = ModalContext;

let ModalProvider = ({ children }) => {
    let { modal, handleModal, ModalContent } = useModal();

    return (
        <Provider value={{ modal, handleModal, ModalContent }}>
            <Modal />
            {children}
        </Provider>
    );
};

const Modal = () => {
    // @ts-ignore
    const { ModalContent, handleModal, modal } = React.useContext(ModalContext);

    if (modal) {
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal-wrapper">
                    <button
                        className="close-modal"
                        onClick={() => handleModal()}
                    >
                        &times;
                    </button>
                    <div className="modal-content">
                        {ModalContent}
                    </div>
                </div>
            </div>,
            document.querySelector("#modal-container")
        );
    } else {
        return null;
    }
};

export { useModal, ModalContext, ModalProvider };
