import PastelesTemplate from "../components/templates/PastelesTemplate";

export default function Pasteles() {
  // Remove the outer array brackets
  const pastelesData = [
    // The inner array becomes the main array now
    {
      id: 1,
      nombre: "Pastel Clásico",
      descripcion: "Chocolate puro",
      precio: 25,
      categoria: "chocolate",
      imagen:
        "https://th.bing.com/th/id/OIP.ztj_HsDqQ54Vnn84vrZEyQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      nombre: "Pastel de Menta",
      descripcion: "Con un toque refrescante",
      precio: 30,
      categoria: "chocolate",
      imagen:
        "https://th.bing.com/th/id/OIP.ArHegF3J230mCwzHfXVUEAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      nombre: "Pastel Luna Sol",
      descripcion: "Con un toque refrescante",
      precio: 700,
      categoria: "chocolate",
      imagen:
        "https://res.cloudinary.com/dpi0y1do6/image/upload/f_auto,q_auto/ocjz8sndpyly7vb1oe1x",
    },
    // Generated Objects Start Here
    {
      id: 4,
      nombre: "Pastel de Fresa",
      descripcion: "Fresa fresca y crema batida",
      precio: 28,
      categoria: "frutas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFKUx4S6rYnn22bXVSFsFg0x0WwzOh7zfxcF2JbMtlUIwWYlwtOkBQiPX&s=10",
    },
    {
      id: 5,
      nombre: "Tarta de Manzana",
      descripcion: "Clásica tarta con canela",
      precio: 20,
      categoria: "frutas",
      imagen: "https://recetasfacilesdeirene.com/wp-content/uploads/2019/05/tarta-de-manzana-facil-y-rapida-2.jpg",
    },
    {
      id: 6,
      nombre: "Pastel de Vainilla",
      descripcion: "Esponjoso y suave",
      precio: 22,
      categoria: "vainilla",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwokhdz-cGOenfBhfY-nTsIHUv9f8wrjHWq-ArUiZc44kY553pUWVN77g&s=10",
    },
    {
      id: 7,
      nombre: "Red Velvet",
      descripcion: "Con frosting de queso crema",
      precio: 35,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtEkEnJ-0HCQJ9G3ttO4TN1t-HHWCO07f9UW0BoIDtac5K--5eVcdp2WY&s=10",
    },
    {
      id: 9,
      nombre: "Pastel de Zanahoria",
      descripcion: "Con nueces y especias",
      precio: 29,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ssuK65NtmTfMzmsY8RC4u_xl55cJy7uQM3AO58gjmiOjUBGCMHsC6Dyy&s=10",
    },
    {
      id: 10,
      nombre: "Selva Negra",
      descripcion: "Chocolate, cerezas y crema",
      precio: 40,
      categoria: "chocolate",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXVriLKFG3ShWX3918d5EpLZn94DfcC4L_hlrAFawGWzMwPhsyII0bT8&s=10",
    },
    {
      id: 11,
      nombre: "Pastel de Limón",
      descripcion: "Refrescante y ácido",
      precio: 26,
      categoria: "frutas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt7Vg5rbSGpdoCI4zgGWolsgaEOV33EQc8AhOTPIMsFb4nhAVJ9Gf1bc&s=10",
    },
    {
      id: 12,
      nombre: "Tiramisú",
      descripcion: "Café, mascarpone y cacao",
      precio: 38,
      categoria: "especial",
      imagen: "https://aranzazu.com/wp-content/uploads/2022/09/tiramisu_web_2022-compress.webp",
    },
    {
      id: 13,
      nombre: "Pastel de Coco",
      descripcion: "Suave y tropical",
      precio: 31,
      categoria: "especial",
      imagen: "https://i0.wp.com/sarasellos.com/wp-content/uploads/2024/07/pastel-coco-relleno-pina-3.jpg?resize=779%2C779&ssl=1",
    },
    {
      id: 15,
      nombre: "Pastel de Tres Leches",
      descripcion: "Húmedo y dulce",
      precio: 33,
      categoria: "especial",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnUBJy0mJGqc5BPW55d4tr5CmkamP49TSVQ&s",
    },
    {
      id: 16,
      nombre: "Pastel de Naranja",
      descripcion: "Aroma cítrico y esponjoso",
      precio: 24,
      categoria: "frutas",
      imagen: "https://thecookinglab.es/wp-content/uploads/2025/01/pastel-de-naranja.jpg",
    },
    {
      id: 18,
      nombre: "Pastel de Almendras",
      descripcion: "Con almendras laminadas",
      precio: 34,
      categoria: "especial",
      imagen: "https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-realizar-bizcocho-con-buttercream-y-almendra-sin-gluten-resultado-final_ffd07262_600x600.jpg",
    },
 
    {
      id: 20,
      nombre: "Pastel de Plátano",
      descripcion: "Húmedo y con sabor a plátano",
      precio: 23,
      categoria: "frutas",
      imagen: "https://www.elespectador.com/resizer/3hb_7SrlVkjB45hjHzJZ_bn4GW4=/arc-anglerfish-arc2-prod-elespectador/public/PKEKNVTH2BAQFK662SSEM22DQM.jpg",
    },
    {
      id: 21,
      nombre: "Pastel Ópera",
      descripcion: "Capas de café y chocolate",
      precio: 45,
      categoria: "especial",
      imagen: "https://chefeel.com/chefgeneralfiles/2022/04/Sin-ti%CC%81tulo-1-880x820.jpg",
    },
    {
      id: 22,
      nombre: "Pastel de Vainilla con Frutas",
      descripcion: "Base de vainilla con frutas de temporada",
      precio: 30,
      categoria: "vainilla",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRDv7b1k4FyWIwekk9sb5wH0yNKJiRI8EGw&s",
    },
  
    {
      id: 24,
      nombre: "Pastel de Café",
      descripcion: "Intenso sabor a café",
      precio: 29,
      categoria: "especial",
      imagen: "https://imag.bonviveur.com/tarta-de-cafe.jpg",
    },
    {
      id: 25,
      nombre: "Pastel Marmoleado",
      descripcion: "Mezcla de vainilla y chocolate",
      precio: 26,
      categoria: "vainilla",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWTBet55q1Ck7XHXlZmoH5F7bDOTJChH8iw&s",
    },
  
    {
      id: 27,
      nombre: "Pastel de Chocolate Blanco",
      descripcion: "Dulce y cremoso",
      precio: 32,
      categoria: "chocolate",
      imagen: "https://us.123rf.com/450wm/kazirakib/kazirakib2502/kazirakib250201837/241525804-easter-cake-with-cream-and-eggs-on-a-white-background-selective-focus.jpg?ver=6",
    },
    {
      id: 28,
      nombre: "Pastel de Piña Colada",
      descripcion: "Sabores tropicales de piña y coco",
      precio: 35,
      categoria: "frutas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVRYiVkc6WJTGEpURVcnzQOvc0t6YYqyu2Q&s",
    },

  ];

  return (
    <div className="bg-white flex flex-wrap justify-center w-full"> {/* Added w-full */}
      {/* Now the prop type matches the expected type */}
      <PastelesTemplate pastelesData={pastelesData} />
    </div>
  );
}
