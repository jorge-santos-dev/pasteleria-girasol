import React, { Suspense } from "react"; // Importar Suspense
import DescriptionSection from "../molecules/DescriptionSection";
import Loader from "../atoms/Loader";
import { Pastel } from "../../types/pasteles";

// Cargar PastelCard de forma perezosa
const PastelCard = React.lazy(
  () => import("../molecules/pastel_card/PastelCard")
);

interface PastelesTemplateProps {
  pastelesData: Pastel[];
}

export default function PastelesTemplate({
  pastelesData,
}: PastelesTemplateProps) {
  return (
    <div className="justify-center w-[90%] shadow-2xl pt-10 pb-10 mx-auto justify-items-center">
      <DescriptionSection
        title="Pasteles"
        description="Deliciosos pasteles para todos los gustos"
      />

      {/* Envolver el contenido que depende del componente perezoso con Suspense */}
      <Suspense name="carga de pasteles" fallback={<Loader />}>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {pastelesData.map((pastel) => (
            <PastelCard
              key={pastel.id}
              nombre={pastel.nombre}
              descripcion={pastel.descripcion}
              precio={pastel.precio}
              imagen={pastel.imagen}
              categoria={pastel.categoria}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
