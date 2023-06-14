import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  Actions,
  Item,
  ProductContainer,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder }: CartProps) {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 135 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image source={{
                  uri: cartItem.product.imagePath
                }} />
                <QuantityContainer>
                  <Text size={14} color='#666'>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight='700'>
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color='#666' style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity onPress={() => onAdd(cartItem.product)} style={{ marginRight: 24 }}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='700'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <Button
          onPress={onConfirmOrder}
          disabled={cartItems.length === 0}
        >
          Concluir pedido
        </Button>
      </Summary>
    </>
  );
}