//individual link item to be shown at right side of navbar
import Link from 'next/link'

const NavItem=(props)=>{
    return <div className="mx-4">
        <Link href={props.href}>
            <a>{props.title}</a>
        </Link>
    </div>
}

export default NavItem;