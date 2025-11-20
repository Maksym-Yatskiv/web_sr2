export default function ContentBlock({ data }) {
    if (!data) return null;

    return (
        <div className="main-content">
            <section>
            <h1>{data.title}</h1>
            <p id="about" className="lead">{data.lead}</p>
            {data.paragraphs &&
                data.paragraphs.map((p, i) => (
                    <p key={i} style={{ marginTop: 8, marginBottom: 8, whiteSpace: 'pre-line' }}>
                    {p}
                    </p>
                ))}
            </section>

            <div className="section">
                <h2 id="products">{data.extra?.title || "Додаткова секція"}</h2>
                <div className="grid" style={{ marginTop: 12 }}>
                    {(data.extra?.items || []).map((it, idx) => (
                        <div className="product-card" key={idx}>
                            {it.image && (
                                <img src={it.image} alt={it.heading} className="product-image" />
                            )}
                            <div className="product-info">
                                <h3>{it.heading}</h3>
                                <p className="product-text">{it.text}</p>
                                <p className="product-description">{it.description}</p>
                                {it.price && <p className="product-price">{it.price}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
