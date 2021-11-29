import S from "../styles/components/Footer.module.scss"

interface NavItem {
    title: string;
    icon: string;
    url: string;
    id: number;
}

const navItems: NavItem[] = [
    {title: 'LinkedIn', icon: 'arrow_right', url: 'http://linkedin.com', id: 0 },
    {title: 'Youtube', icon: 'arrow_right', url: 'http://youtube.com', id: 1 },
    {title: 'Facebook', icon: 'arrow_right', url: 'http://facebook.com', id: 2 },
    {title: 'Twitter', icon: 'arrow_right', url: 'http://twitter.com', id: 3 },
]


const Footer = () => {
    return (
        <footer className={S.container}>
            <section>
                <nav>
                    {navItems.map(item => 
                        <a key={item.id} href={item.url} rel="noreferrer" target="_blank" className={S.itemMb}>
                            <span className={`material-icons ${S.iconMargin}`}>{item.icon}</span> 
                            <span>{item.title}</span>
                        </a>)}
                </nav>
            </section>
            <section className={S.contactsContainer}>
                <span className={S.contactsContainerItem}><span className={`material-icons ${S.iconMargin}`}>call</span>+55 (33) 33333-3333</span>
                <span className={S.contactsContainerItem}><span className={`material-icons ${S.iconMargin}`}>alternate_email</span>coffeedev@coffeedev.com</span>
                <span className={S.contactsContainerItem}><span className={`material-icons ${S.iconMargin}`}>place</span>Dev Street, 123 - Room 456</span>
                <span className={S.contactsContainerItem}><span className={`material-icons ${S.iconMargin}`}>copyright</span>Coffee Dev 2021</span>
            </section>
            <section className={S.infoTextContainer}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam fugiat hic nihil facilis deleniti reprehenderit nisi magnam eaque distinctio nostrum voluptatem aspernatur corporis aperiam obcaecati incidunt, commodi, unde amet!
            </section>
        </footer>
    )
}

export default Footer