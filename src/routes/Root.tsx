import {useState, useEffect} from 'react'
import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from '../components/header/Header';
const GlobalStyle = createGlobalStyle`
    ${props => props.theme.isDark && `
        @media (prefers-color-scheme: dark){
            :root{
            --foreground : var(--color-light);
            --background : var(--color-dark);
            }
        }
    `}
`

export default function Root(){
    const [isDark, setIsDark] = useState(false)
    useEffect(()=>{
        (function(){
            const useDark = window.matchMedia("(prefers-color-scheme: dark)");
            setIsDark(useDark.matches)
        })()
    }, [])
    const toggleTheme = () => { 
        setIsDark(prev => !prev)
    }

    return(
        <ThemeProvider theme={{isDark : isDark}}>
            <GlobalStyle/>
            <Header toggleHandler={toggleTheme}/>
            <Outlet />
        </ThemeProvider>
    )
}