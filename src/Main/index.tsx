import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from "./styles";
import { Categories } from "../components/Categories";
import { Product } from "../types/Product";
import { useState } from "react";
import { CartItem } from "../types/CartItem";
import { Menu } from "../components/Menu";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { categories, objectCategory } from "../utils/staticConsts";
import { TableModal } from "../components/TableModal";

export function Main() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [menuItems, setMenuItems] = useState<Product[]>([])
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [valueCart, setValueCart] = useState(0);

  function handleAddToCart(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  function handleSelectCategory(categoryId: string) {
    setMenuItems(objectCategory[categoryId] || [])
  }

  function handleResetOrder(total: number) {
    setValueCart(total);
    setIsTableModalVisible(true);
  }

  function handlSaveOrder() {
    setValueCart(0);
    setCartItems([]);
  }

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories
            categories={categories}
            onSelectCategory={handleSelectCategory}
          />
        </CategoriesContainer>

        <MenuContainer>
          <Menu
            onAddToCart={handleAddToCart}
            products={menuItems}
          />
        </MenuContainer>
      </Container>

      {cartItems.length !== 0 &&
        <Footer>
          <FooterContainer>
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          </FooterContainer>
        </Footer>}

        <TableModal
          visible={isTableModalVisible}
          onClose={() => setIsTableModalVisible(false)}
          onSave={handlSaveOrder}
          valueCart={valueCart}
      />
    </>
  )
}