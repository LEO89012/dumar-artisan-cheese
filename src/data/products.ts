import dumarProducts from "@/assets/dumar-products.jpg";
import dumarQuesoSlice from "@/assets/dumar-queso-slice.jpg";
import dumarFarm from "@/assets/dumar-farm.jpg";
import dumarYogurt from "@/assets/dumar-yogurt.jpg";
import dumarQuesosFrescos from "@/assets/dumar-quesos-frescos.jpg";
import dumarTabla from "@/assets/dumar-tabla.jpg";
import dumarAllProducts from "@/assets/dumar-all-products.jpg";
import dumarYogurtBar from "@/assets/dumar-yogurt-bar.jpg";

import type { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "queso-campesino",
    name: "Queso Campesino",
    price: 18500,
    image: dumarProducts,
    description: "Queso fresco tradicional colombiano, suave y cremoso. Perfecto para acompañar arepas.",
    category: "fresco",
    weight: "500g",
  },
  {
    id: "queso-paipa",
    name: "Queso Paipa",
    price: 24900,
    image: dumarFarm,
    description: "Queso semi-madurado con sabor intenso y textura firme. Ideal para tablas de quesos.",
    category: "madurado",
    weight: "500g",
  },
  {
    id: "queso-costeno",
    name: "Queso Costeño",
    price: 16800,
    image: dumarQuesoSlice,
    description: "Queso salado típico de la costa colombiana. Textura desmoronable y sabor auténtico.",
    category: "fresco",
    weight: "500g",
  },
  {
    id: "queso-doble-crema",
    name: "Queso Doble Crema",
    price: 21500,
    image: dumarTabla,
    description: "Queso fundente y cremoso, perfecto para gratinar y derretir en tus preparaciones favoritas.",
    category: "artesanal",
    weight: "500g",
  },
  {
    id: "queso-pera",
    name: "Queso Pera en Bloque",
    price: 19900,
    image: dumarQuesosFrescos,
    description: "Queso tipo hilado de textura suave y elástica. Ideal para sándwiches y ensaladas.",
    category: "fresco",
    weight: "500g",
  },
  {
    id: "queso-mozzarella",
    name: "Queso Tipo Mozzarella",
    price: 22500,
    image: dumarQuesosFrescos,
    description: "Mozzarella fresca artesanal. Perfecta para pizzas, ensaladas caprese y gratinados.",
    category: "artesanal",
    weight: "500g",
  },
  {
    id: "yogur-mora",
    name: "Yogur Artesanal Mora Silvestre",
    price: 14500,
    image: dumarYogurt,
    description: "Yogur artesanal colombiano con mora silvestre. 100% natural, sin conservantes.",
    category: "artesanal",
    weight: "1 Litro",
  },
  {
    id: "yogur-guanabana",
    name: "Yogur Artesanal Guanábana",
    price: 14500,
    image: dumarYogurtBar,
    description: "Yogur cremoso de guanábana fresca. Receta tradicional colombiana.",
    category: "artesanal",
    weight: "1 Litro",
  },
];

export const categories = [
  { value: "all", label: "Todos" },
  { value: "fresco", label: "Frescos" },
  { value: "madurado", label: "Madurados" },
  { value: "artesanal", label: "Artesanales" },
];
