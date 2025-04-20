import { GiChocolateBar } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";


export default function EtiquetaSabor() {
    return(
        <div className="flex flex-wrap flex-col gap-3 border-2 border-amber-300 border-dotted">
            <h2>Tipo de pastel</h2>
            <div className="flex justify-center">
            <label className="flex items-center border-2 gap-2 border-amber-300 border-dotted">
            <input type="radio" name="sabor" value="mario" />
            <span className="font-bold">Secos</span>
        </label>
        <label className="flex gap-3 items-center border-2 border-amber-300 border-dotted">
            <input type="radio" name="sabor" value="mario" />
            <span className="font-bold">Envinados</span>
        </label>
        <label className="flex gap-3 items-center border-2 border-amber-300 border-dotted">
            <input type="radio" name="sabor" value="mario" />
            <GiFruitBowl size={50} color="green" />
            <span className="font-bold">3 Leches</span>
        </label>
            </div>
        </div>
    )
}