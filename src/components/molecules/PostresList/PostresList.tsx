import React from "react";
import PostreCard from "../PostreCard/PostreCard"
import "./PostresList.css"
import { Postre } from "../../../types/postres";

interface PostresListProps {
    postres: Postre[];
}

const PostresList:React.FC<PostresListProps> = ({postres}) => {
    return(
        <div className="lista-postres">
            {postres.map((postre) => (
                <PostreCard key={postre.id} {...postre} />
            ))}
        </div>
    )
}

export default PostresList;