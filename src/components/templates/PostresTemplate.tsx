import React, { useEffect, useState } from "react";
import { Postre } from "../../types/postres";
import PostresSection from "../organisms/PostreSection/PostresSection";
import DescriptionSection from "../molecules/DescriptionSection";

interface IPostresTemplate {
    postres: Postre[]
}
const PostresTemplate:React.FC<IPostresTemplate> = ({postres}) => {
    
    console.log(postres);
    
    const [postresList, setPostresList] = useState<
    { postres: Postre[] }[]
  >([]);

  useEffect(() => {
    // Simulación de datos estáticos, en un entorno real cargarías estos datos de una API o base de datos.
    setPostresList(postresList)
  },[]);

    return(
        <div className="justify-center w-[90%] shadow-2xl pt-10 pb-10 mx-auto justify-items-center">
                 <DescriptionSection title="Postres" description="Los mejores postres para tu paladar" />
                <PostresSection  postres={postres} />
        </div>
    )
}

export default PostresTemplate;