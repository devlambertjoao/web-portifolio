import { useTheme } from "next-themes"
import { useState } from "react";
import S from "../styles/components/Header.module.scss";

interface NavigationItem {
    title: string;
    url: string;
    id: number;
}

const navigationItems = [
    {title: 'Home', url: '#home', id: 0},
    {title: 'Techs', url: '#techs', id: 1},
    {title: 'About me', url: '#about-me', id: 2},
    {title: 'Channel', url: '#channel', id: 3},
]

interface State {
    selectedNavigationItem: NavigationItem
}

const initialState: State = {
    selectedNavigationItem: navigationItems[0]
}

const Header = () => {
    const { setTheme, theme } = useTheme();
    const [state, setState] = useState<State>(initialState)
    
    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const handleNavigation = (selectedItem: NavigationItem) => {
        setState({...state, selectedNavigationItem: selectedItem});
    }

    const isSelected = (item: NavigationItem) => state.selectedNavigationItem.id === item.id;

    return (
        <header className={S.container}>
            <h1>COFFEE DEV</h1>
            <section>
                <nav>
                    {navigationItems.map(item => <a className={isSelected(item) ? S.active : ''} key={item.id} onClick={() => handleNavigation(item)}>{item.title}</a>)}
                </nav>
                <button onClick={handleThemeChange}>
                    <span className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
                </button>
            </section>
        </header>
    )
}

export default Header