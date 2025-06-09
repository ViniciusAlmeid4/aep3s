const cafes = [
    {
        name: "Scada Café (Maringá Park)",
        coords: [-23.42234, -51.93271],
        info: "No Maringá Park Shopping",
        rating: 3,
        features: ["♿ Acessível para cadeirantes", "☕ Café especial", "🔇 Ambiente calmo"],
        notes: "Espaço tranquilo, com acesso facilitado e sem degraus. Pode ficar movimentado em horários de pico.",
    },
    {
        name: "Hug Food & Coffee Shop",
        coords: [-23.417165814652005, -51.93949777443081],
        info: "Av. Duque de Caxias, 882",
        rating: 5,
        features: ["♿ Acessibilidade total (banheiros, rampas e entrada adaptados)", "🧁 Padaria inclusiva", "🔇 Ambiente sensorialmente amigável"],
        notes: "Ambiente acolhedor, com iluminação suave e som controlado. Equipe treinada para atender pessoas com TEA e outras condições neurodivergentes.",
    },
    {
        name: "Silo Café Bistrô",
        coords: [-23.419686094295443, -51.95129271687383],
        info: "Av. Carneiro Leão, 825",
        rating: 5,
        features: ["☕ Café especial", "♿ Acessível", "🔇 Silencioso", "📶 Wi-Fi"],
        notes: "Ambiente sofisticado e tranquilo. Adequado para quem busca pouco estímulo sensorial. Entrada sem obstáculos.",
    },
    {
        name: "Brioche Crocante",
        coords: [-23.413723889084146, -51.943490376393015],
        info: "Av. Paraná, 1511",
        rating: 4,
        features: ["🧁 Confeitaria", "📶 Wi-Fi", "♿ Rampa externa"],
        notes: "Espaço agradável e acessível. Pode ser barulhento em horários de pico, o que pode incomodar pessoas sensíveis a ruído.",
    },
    {
        name: "The Kingdom – Copacabana",
        coords: [-23.429188903484878, -51.93233771687338],
        info: "Av. São Paulo, 1860",
        rating: 3,
        features: ["👶 Espaço infantil", "🌿 Mesas externas", "🎶 Música ambiente"],
        notes: "Ambiente animado, não indicado para quem busca tranquilidade. Acessível, mas com estímulos visuais e sonoros elevados.",
    },
    {
        name: "Café Tamura",
        coords: [-23.427300501658497, -51.950320572696235],
        info: "R. Rodrigo Silva, 140",
        rating: 5,
        features: ["🔇 Extremamente silencioso", "♿ Totalmente acessível", "☕ Café artesanal"],
        notes: "Ambiente minimalista, sem excesso de estímulos. Ideal para pessoas com TEA ou alta sensibilidade sensorial. Entrada ampla e sem degraus.",
    },
    {
        name: "Panificadora Holandesa",
        coords: [-23.4206613810119, -51.92960291927797],
        info: "Av. Brasil, 2886",
        rating: 4,
        features: ["🧁 Padaria completa", "♿ Espaço amplo e acessível", "📶 Wi-Fi"],
        notes: "Espaçosa e iluminada. Ideal para quem precisa de mais mobilidade. Pode haver sons altos em horários de pico.",
    },
    {
        name: "Café Cremoso",
        coords: [-23.41738740940145, -51.93509691253679],
        info: "Av. Tamandaré, 200",
        rating: 2,
        features: ["🪑 Mesas simples", "📶 Wi-Fi"],
        notes: "Opção econômica, mas com ambiente mais barulhento. Acessibilidade limitada.",
    },
    {
        name: "Café Cael",
        coords: [-23.42302607757056, -51.95523487943295],
        info: "Av. Brasil, 5449",
        rating: 3,
        features: ["📶 Wi-Fi", "☕ Café de qualidade", "♿ Entrada sem obstáculos"],
        notes: "Espaço funcional e sem muitos estímulos. Atende bem quem busca acessibilidade básica.",
    },
    {
        name: "Le Petit Café",
        coords: [-23.389332059411657, -51.92832529229147],
        info: "Av. Américo Belay, 1732",
        rating: 5,
        features: ["🌿 Área externa tranquila", "📷 Estético e calmo", "🔇 Pouco ruído", "📶 Wi-Fi"],
        notes: "Ambiente charmoso, silencioso e confortável. Ideal para pessoas neurodivergentes que buscam tranquilidade.",
    },
    {
        name: "McCafé",
        coords: [-23.422126403669655, -51.931914166339816],
        info: "Shopping Maringá Park",
        rating: 3,
        features: ["👶 Infantil", "📶 Wi-Fi", "♿ Acessível"],
        notes: "Ambiente previsível, mas com sons e luzes fortes. Estrutura física acessível.",
    },
    {
        name: "BeCafé",
        coords: [-23.440959871492613, -51.9560366671511],
        info: "Av. Carlos Correa Borges, 874",
        rating: 4,
        features: ["☕ Bebidas exclusivas", "🔇 Ambiente calmo", "📶 Wi-Fi rápido"],
        notes: "Café escondido e tranquilo. Boa opção para quem busca foco sem distrações sensoriais.",
    },
    {
        name: "Très Riche",
        coords: [-23.437009573112718, -51.93385208674549],
        info: "Av. Juscelino, 1187",
        rating: 4,
        features: ["🧁 Doces finos", "🌿 Ambiente aberto", "📶 Wi-Fi"],
        notes: "Estilo refinado, com boa ventilação e iluminação natural. Pouco ruído interno.",
    },
    {
        name: "Armazém Café",
        coords: [-23.423088561709854, -51.95663128958267],
        info: "Av. Brasil, 5734",
        rating: 3,
        features: ["🥪 Lanches leves", "📶 Wi-Fi"],
        notes: "Ambiente simples, sem estímulos visuais excessivos. Não possui adaptações especiais.",
    },
    {
        name: "Cacau Show",
        coords: [-23.430016464843657, -51.95021135031895],
        info: "Av. Dr. Luiz Teixeira Mendes, 850",
        rating: 2,
        features: ["🍫 Produtos de chocolate", "♿ Entrada acessível"],
        notes: "Espaço pequeno e voltado para compras rápidas. Pouco apropriado para permanência longa.",
    },
];

function renderStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

var selectedCafe = 

cafes.forEach((cafe) => {
    const marker = L.marker(cafe.coords).addTo(map).bindPopup(`
        <div style="font-size: 14px; line-height: 1.4;">
            <strong style="font-size: 16px;">${cafe.name}</strong><br/>
            <div style="color: goldenrod;">${renderStars(cafe.rating)}</div>
            <ul style="padding-left: 20px; margin: 5px 0;">
                ${cafe.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
            <em>${cafe.notes}</em>
        </div>
    `);
    marker.on("click", function () {
        map.setView(marker.getLatLng(), 17);
        marker.openPopup();
        selectedCafe = marker;
    });
});
