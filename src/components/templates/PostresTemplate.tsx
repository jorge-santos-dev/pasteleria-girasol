import React, { Suspense } from "react";
import { Postre } from "../../types/postres";
import DescriptionSection from "../molecules/DescriptionSection";
import Loader from "../atoms/Loader";

// Cargar PastelCard de forma perezosa
const PastelCard = React.lazy(
  () => import("../molecules/pastel_card/PastelCard")
);

interface IPostresTemplateProps {
  postresData: Postre[];
}
const PostresTemplate: React.FC<IPostresTemplateProps> = ({ postresData }) => {
  return (
    <div className="justify-center w-[90%] shadow-2xl pt-10 pb-10 mx-auto justify-items-center">
      <DescriptionSection
        title="Postres"
        description="Los mejores postres para tu paladar"
      />
      {/* Envolver el contenido que depende del componente perezoso con Suspense */}
      <Suspense name="carga de pasteles" fallback={<Loader />}>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {postresData.map((postre) => (
            <PastelCard
              key={postre.id}
              nombre={postre.nombre}
              descripcion={postre.descripcion}
              precio={postre.precio}
              imagen={postre.imagen}
              categoria={postre.categoria}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default PostresTemplate;
