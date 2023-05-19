import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export function Header() {
    const { signOut } = useContext(AuthContext)

    return (
        <div>
            <h1>Header</h1>
            <button onClick={signOut}> Sair </button>
        </div>
    )
}