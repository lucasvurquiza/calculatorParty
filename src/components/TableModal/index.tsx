import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ModalBody, Overlay, Header, Form, Input, Footer } from './styles';
import { Platform } from 'react-native';
import { useState } from 'react';

const isAndroid = Platform.OS === 'android';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  valueCart: number;
}

export function TableModal({ visible, onClose, onSave, valueCart }: TableModalProps) {
  const [orderChange, setOrderChange] = useState(0);

  function handleSave() {
    setOrderChange(0);
    onSave();
    onClose();
  }

  function handleClose() {
    setOrderChange(0);
    onClose();
  }

  function handleChangeInput(input: string) {
    const formatedInput = input.replace(',', '.')
    setOrderChange(Number(formatedInput) - valueCart)
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='700'>Informe o valor</Text>
            <TouchableOpacity onPress={handleClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Valor'
              placeholderTextColor='#666'
              keyboardType='numeric'
              onChangeText={handleChangeInput}
            />
            <Footer>
              <Text weight='700'>Troco: R$ {orderChange}</Text>
            </Footer>
            <Button onPress={handleSave}>
              Finalizar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}