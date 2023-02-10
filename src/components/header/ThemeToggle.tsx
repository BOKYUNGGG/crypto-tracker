import { HeaderProps } from "./Header"
export default function ThemeToggle({toggleHandler} : HeaderProps){
    return (
        <button onClick={toggleHandler}>Toggle</button>
    )
}