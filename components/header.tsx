import { useTheme } from "next-themes"

const Header = () => {
    const { setTheme, theme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <header>
            <h1>Future Logo</h1>
            <button onClick={handleThemeChange}>Change theme</button>
        </header>
    )
}

export default Header