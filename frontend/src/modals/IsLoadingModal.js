import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

const IsLoadingModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-large">
          <div>
            Cargando...
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IsLoadingModal;
