import DescriptionSection from "../molecules/DescriptionSection";
import conocenos from "../../assets/conocenos.png"

const ConocenosTemplate = () => {
    return (
        <div className="w-[90%] shadow-2xl pt-10 pb-10 mx-auto bg-white rounded-lg justify-items-center"> {/* Added background, rounded corners, removed justify classes */}
           <DescriptionSection title="Conocenos" description="Una larga historia..." />

            {/* --- Historia Section --- */}
            <section className="py-12 px-6 md:px-12"> {/* Replaced historia-section with padding */}
                <h2 className="text-3xl font-bold text-center text-girasol-purple mb-8 font-poppins">Nuestra Historia</h2>
                <div className="md:flex md:items-center md:gap-12"> {/* Replaced content-wrapper with flex layout for medium screens and up */}
                    <div className="md:w-1/2 space-y-4 text-gray-700 font-poppins"> {/* Replaced text-content, added width, spacing, text color, font */}
                        <p>
                            <strong className="font-semibold text-girasol-brown">El Girasol</strong> es una empresa dedicada a la elaboración artesanal de postres y pasteles.
                            Nuestro compromiso es ofrecer productos de alta calidad que superen las expectativas de nuestros clientes.
                        </p>
                        <p>
                            Más que una repostería, somos un espacio donde la creatividad y la innovación se mezclan con la pasión por lo que hacemos.
                            Si estás buscando sabores únicos y experiencias dulces fuera de lo común, has llegado al lugar indicado.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-1/2"> {/* Replaced image-container, added margin/width */}
                        {/* Ensure the image path is correct relative to the public folder or use an absolute URL */}
                        <img className="border rounded-md shadow-lg" src={conocenos} />
                    </div>
                </div>
            </section>

            {/* --- Valores Section --- */}
            <section className="py-12 px-6 md:px-12 bg-white"> {/* Replaced valores-section, added padding and background */}
                <h2 className="text-3xl font-bold text-center text-girasol-purple mb-10 font-poppins">Nuestros Valores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Replaced valores-grid with responsive grid */}
                    {/* Replaced valor-card with styled div */}
                    <div className="bg-girasol-cream p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3 font-poppins">Calidad</h3>
                        <p className="text-gray-600 font-poppins">Utilizamos ingredientes frescos y de la mejor calidad para crear nuestros pasteles y postres.</p>
                    </div>
                     {/* Replaced valor-card with styled div */}
                    <div className="bg-girasol-cream p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3 font-poppins">Creatividad</h3>
                        <p className="text-gray-600 font-poppins">Innovamos constantemente para ofrecerte sabores y diseños únicos que sorprendan tus sentidos.</p>
                    </div>
                     {/* Replaced valor-card with styled div */}
                    <div className="bg-girasol-cream p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3 font-poppins">Pasión</h3>
                        <p className="text-gray-600 font-poppins">Cada creación está hecha con amor y dedicación, cuidando hasta el más mínimo detalle.</p>
                    </div>
                     {/* Replaced valor-card with styled div */}
                    <div className="bg-girasol-cream p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3 font-poppins">Servicio</h3>
                        <p className="text-gray-600 font-poppins">Nos esforzamos por brindarte una experiencia excepcional desde el primer contacto hasta la entrega.</p>
                    </div>
                </div>
            </section>

            {/* --- Equipo Section --- */}
            <section className="py-12 px-6 md:px-12"> {/* Replaced equipo-section with padding */}
                <h2 className="text-3xl font-bold text-center text-girasol-purple mb-6 font-poppins">Nuestro Equipo</h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 font-poppins"> {/* Replaced equipo-intro with centered text */}
                    Detrás de cada delicioso pastel hay un equipo apasionado y talentoso que trabaja con dedicación para hacer realidad tus dulces deseos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Replaced equipo-grid, adjust columns as needed */}
                    {/* Aquí puedes agregar tarjetas con fotos y descripciones del equipo, styled with Tailwind */}
                    {/* Example Card Structure:
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <img src="/path/to/team-member.jpg" alt="Nombre Miembro" className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"/>
                        <h3 className="font-semibold text-lg text-girasol-brown">Nombre Miembro</h3>
                        <p className="text-sm text-girasol-purple">Puesto</p>
                        <p className="text-xs text-gray-600 mt-1">Breve descripción...</p>
                    </div>
                    */}
                </div>
            </section>

            {/* --- Contacto Section --- */}
            <section className="py-12 px-6 md:px-12 bg-girasol-yellow/20"> {/* Replaced contacto-section, added padding and light yellow background */}
                <h2 className="text-3xl font-bold text-center text-girasol-purple mb-10 font-poppins">Visítanos</h2>
                <div className="md:flex md:justify-around md:items-start text-center md:text-left space-y-8 md:space-y-0"> {/* Replaced contacto-info with flex layout */}
                    <div className="font-poppins"> {/* Replaced direccion */}
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3">Dirección</h3>
                        <p className="text-gray-700">Calle Principal #123, Colonia Centro</p>
                        <p className="text-gray-700">Ciudad, Estado, CP 12345</p>
                    </div>
                    <div className="font-poppins"> {/* Replaced horario */}
                        <h3 className="text-xl font-semibold text-girasol-brown mb-3">Horario</h3>
                        <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-700">Sábados: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-700">Domingos: 10:00 AM - 3:00 PM</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConocenosTemplate;