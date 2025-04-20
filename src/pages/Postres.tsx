import PostresTemplate from "../components/templates/PostresTemplate";
import { Postre } from "../types/postres";
import chesscakeTortuga from "../assets/chesscake-tortuga.jpg";
import mostachonFresa from "../assets/mostachon-fresa.jpg";

export default function Postres() {
  const postresData: Postre[] = [
    {
      id: 1,
      nombre: "ChessCake tortuga",
      descripcion:
        "Chesscake de queso con dulce de leche, chispas, turin, chocolate",
      precio: 350,
      imagen: chesscakeTortuga,
      categoria: "postre",
    },
    {
      id: 2,
      nombre: "Mostachon de fresa",
      descripcion: "Costra de galleta con nuez y crema de queso y fresa",
      precio: 320,
      imagen: mostachonFresa,
      categoria: "postre",
    },
    {
      id: 8,
      nombre: "Cheesecake Clásico",
      descripcion: "Base de galleta y relleno cremoso",
      precio: 32,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZrdCJwh5AJEKfVAg3MkU-8tAMaaUqgISIvHGx3lwMYLmr7FjbMrp05M&s=10",
    },
    {
      id: 17,
      nombre: "Cheesecake de Frutos Rojos",
      descripcion: "Cremoso con salsa de bayas",
      precio: 36,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgAnfD6bYZglb9mi9JvV2HIyNAlyruKZMKQ&s",
    },
    {
      id: 19,
      nombre: "Brownie Intenso",
      descripcion: "Chocolate denso con nueces",
      precio: 18,
      categoria: "chocolate",
      imagen: "https://cdn.bolivia.com/gastronomia/2012/02/08/brownie-de-chocolate-y-nueces-3531-1.jpg",
    },
    {
      id: 23,
      nombre: "Tarta de Santiago",
      descripcion: "Tarta de almendras tradicional",
      precio: 28,
      categoria: "especial",
      imagen: "https://cositasguenas.es/cdn/shop/products/tarta-de-santiago-821548_1200x1200.jpg?v=1628221820",
    },
    {
      id: 26,
      nombre: "Tarta de Queso Japonesa",
      descripcion: "Esponjosa y ligera",
      precio: 37,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKJmoBmUCQ7mPiMPvg5i_xHklXhnO4ix1Ag&s",
    },
    {
      id: 29,
      nombre: "Cupcakes Variados (Docena)",
      descripcion: "Selección de nuestros mejores cupcakes",
      precio: 24,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxwf9jN7phvzfbtreaOylckC8UdShmIrHmGaJCaOpzTwIvgHSiJd6PSj1J2ZAyEybvu0&usqp=CAU",
    },
    {
      id: 31,
      nombre: "Tarta de Limón y Merengue",
      descripcion: "Base crujiente, relleno ácido y merengue",
      precio: 33,
      categoria: "frutas",
      imagen: "https://jessiebakescakes.com/wp-content/uploads/2025/02/Lemon-meringue-cake-8-min.jpg",
    },
  ];

  return (
    <div className="bg-white flex flex-wrap justify-center w-full">
      <PostresTemplate postres={postresData} />
    </div>
  );
}
