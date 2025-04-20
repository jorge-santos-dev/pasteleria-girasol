import React from "react";
import "./PostresSection.css";
import PostresList from "../../molecules/PostresList/PostresList";

interface Postre {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

interface PostresSectionProps {
  postres: Postre[];
}

const PostresSection: React.FC<PostresSectionProps> = ({ postres }) => {
  return <PostresList postres={postres} />;
};

export default PostresSection;
