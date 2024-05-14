import {
  Button, Modal, ModalContent, ModalFooter, ModalHeader,
  ModalTitle,
} from 'components';
import { FC, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
  isEdit?: boolean;
}

export const RecipesModifier:FC<Props> = ({ isEdit }) => {
  const { id } = useParams<{ id: string }>();
  console.log('🚀 ~ id:', id);
  const navigate = useNavigate();
  const onModalClose = useCallback(() => navigate('/recipes', { replace: true }), [navigate]);

  return (
    <Modal open>
      <ModalContent closeHandler={onModalClose} className="max-w-none w-10/12">
        <form>
          <ModalHeader>
            <ModalTitle>{isEdit ? 'Edit recipe' : 'Create recipe'}</ModalTitle>
          </ModalHeader>
          <div className="px-6" />
          <ModalFooter>
            <Button onClick={onModalClose} variant="outline">Cancel</Button>
            <Button type="submit">Save</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
