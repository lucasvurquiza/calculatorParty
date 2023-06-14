import { FlatList } from 'react-native';
import { Product } from '../../types/Product';
import { Text } from '../Text';
import { ProductContainer, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { formatCurrency } from '../../utils/formatCurrency';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  return (
    <>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        style={{ marginTop: 15 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer>
            <ProductImage source={{
              uri: product.imagePath
            }} />
            <ProductDetails>
              <Text weight='400'>{product.name}</Text>
              <Text color='#A6A6A6' weight='700' size={14}>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}