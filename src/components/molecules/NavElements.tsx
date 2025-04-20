import NavElement from "../NavLink"

export default function NavElements(){
    const navElements = [
        {name: 'Pasteles', route: '/pasteles'},
        {name: 'Postres', route: '/postres'},
        {name: 'Conócenos', route: '/conocenos'},
        {name: 'Contáctanos', route: '/contactanos'}, 
    ]

    return (
        <ul className="flex space-x-1">
            {navElements.map((navElement) => {
                return(
                    <li key={navElement.name}>
                        <NavElement name={navElement.name} route={navElement.route} />
                    </li>
                )
            })}
        </ul>
    )
}