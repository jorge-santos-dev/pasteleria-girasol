import LinearGradient from '../atoms/LinearGradient';
import NavBar from '../molecules/NavBar';


export default function Header() {

    return(
        <header className="sticky top-0 z-20 bg-white border-b-2 border-[#C7ABDB]">
            <LinearGradient color1='#C7ABDB' color2='#37e6a5' />  
            <NavBar />
          
        </header>
    )
}