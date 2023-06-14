import { Category } from "../types/Category"
import { Product } from "../types/Product"

export const categories: Category[] = [{
  _id: 'comidas',
  icon: '🍔',
  name: 'Comidas',
},
{
  _id: 'bebidas',
  icon: '🥤',
  name: 'Bebidas',
}]

const productsComidas: Product[] = [{
  _id: 'batataFrita',
  name: 'Batatinha Frita',
  imagePath: 'https://f.i.uol.com.br/livraria/capas/images/11054228.jpeg',
  price: 10.00,
},
{
  _id: 'caldo',
  name: 'Caldo (Frango ou Feijão)',
  imagePath: 'https://revistasaboresdosul.com.br/wp-content/uploads/2015/06/sopa-cremosa-de-milho.jpg',
  price: 5.00,
},
{
  _id: 'pastel',
  name: 'Pastel',
  imagePath: 'https://static.itdg.com.br/images/1200-675/eb4c5bc3313702794552fead2979c52c/354276-original.jpg',
  price: 5.00,
},
{
  _id: 'porcaoPastel',
  name: 'Porção de Pastel',
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYMynMJG483mcAMrCkw1QBFURJsSnqHR8-w&usqp=CAU',
  price: 25.00,
},
{
  _id: 'frangoAssado',
  name: 'Frango Assado',
  imagePath: 'https://img.cybercook.com.br/receitas/216/frango-assado-para-microondas-1.jpeg',
  price: 35.00,
}]

const productsBebidas: Product[] = [{
  _id: 'refrigeranteLata',
  name: 'Refrigerante Lata',
  imagePath: 'https://zavod.com.br/wp-content/uploads/2021/06/Refrigerentes.jpg',
  price: 5.00,
},
{
  _id: 'cervejaLata',
  name: 'Cerveja Lata',
  imagePath: 'https://www.mrbroa.com.br/wp-content/uploads/2019/02/ea6737be7f.jpg',
  price: 5.00,
}]

export const objectCategory = {
  comidas: productsComidas,
  bebidas: productsBebidas
}