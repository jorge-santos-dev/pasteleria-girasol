import DescriptionSection from "../molecules/DescriptionSection";
import PastelCard from "../molecules/pastel_card/PastelCard";

// Define a more specific type for the props if possible, instead of 'any'
interface Pastel {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    imagen: string;
}



interface PastelesTemplateProps {
    pastelesData: Pastel[];
}

export default function PastelesTemplate({ pastelesData }: PastelesTemplateProps) {
     // console.log(pastelesData);

     // Filter out pasteles that don't have a valid number for precio
     const validPastelesData = pastelesData.filter(pastel => typeof pastel.precio === 'number' && !isNaN(pastel.precio));

    return (
        <div className="justify-center w-[90%] shadow-2xl pt-10 pb-10 mx-auto justify-items-center">
            <DescriptionSection title="Pasteles" description="Deliciosos pasteles para todos los gustos" />

            <div className="flex flex-wrap gap-6 justify-center mt-6"> {/* Added mt-6 */}
                {/* Iterate over the filtered data */}
                {validPastelesData.map((pastel) => (
                    <PastelCard
                        key={pastel.id}
                        nombre={pastel.nombre}
                        descripcion={pastel.descripcion}
                        precio={pastel.precio} // Now guaranteed to be a number
                        imagen={pastel.imagen}
                        categoria={pastel.categoria}
                    />
                ))}
            </div>
        </div>
    );
}