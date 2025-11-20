export default function Footer({ social = [] }) {
    return (
        <footer id="contacts" className="footer">
            <div className="container">
                <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
                    <div className="footer-left">
                        <div>© {new Date().getFullYear()} Еко-Ферма</div>
                        <div className="contacts" style={{ marginTop: 8 }}>
                            <div>Адреса: вул. Зелених Полів, 12, Київ, Україна</div>
                            <div>Телефон: <a href="">+38 (044) 123-45-67</a></div>
                            <div>Email: <a href="">info@eco-farm.ua</a></div>
                        </div>
                    </div>

                    <div className="footer-center">
                        <div className="footer-links" style={{ display: 'flex', gap: 20 }}>
                            <a href="#home" style={{ textDecoration: 'none' }}>Головна</a>
                            <a href="#about" style={{ textDecoration: 'none' }}>Про нас</a>
                            <a href="#products" style={{ textDecoration: 'none' }}>Продукція</a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="social" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            {social.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    {s.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

