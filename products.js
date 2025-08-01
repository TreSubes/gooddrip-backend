/* ================================================================================
    BASE DE DATOS DE PRODUCTOS
    Organizada por rango de precio (del más caro al más barato)
================================================================================ */

const productsDB = {

    // ============================================================================
    // ===== SECCIÓN 1: GAMA ALTA (Aprox. $80.000 - $90.000+) =====
    // ============================================================================

    'nocta-af1-clb': {
        id: 'nocta-af1-clb',
        marca: "Nike",
        name: "NOCTA x Nike Air Force 1 Low",
        etiquetas: ["Air Force 1", "X Nocta"],
        precioBase: { chile: 82990, internacional: 82990 },
        descripcion: "La colaboración de Drake con Nike. Una versión premium de las AF1 con detalles únicos como la inscripción 'Love You Forever' en la mediasuela.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 239990, available: false } ],
        imagenes: [ "/images/products/nocta-af1-clb-1.png", "/images/products/nocta-af1-clb-2.png", "/images/products/nocta-af1-clb-3.png", "/images/products/nocta-af1-clb-4.png" ]
    },
    'corteiz-am95-sequoia': {
        id: 'corteiz-am95-sequoia',
        marca: "Nike",
        name: "Corteiz x Nike Air Max 95 'Sequoia'",
        etiquetas: ["Air Max 95", "X Corteiz"],
        precioBase: { chile: 82990, internacional: 82990 },
        descripcion: "Una de las colaboraciones más esperadas. La marca londinense Corteiz imprime su sello inconfundible en la silueta icónica de las Air Max 95.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 439990, available: false } ],
        imagenes: [ "/images/products/corteiz-am95-sequoia-1.png", "/images/products/corteiz-am95-sequoia-2.png", "/images/products/corteiz-am95-sequoia-3.png", "/images/products/corteiz-am95-sequoia-4.png" ]
    },
    'jordan-11-cherry': {
        id: 'jordan-11-cherry',
        marca: "Jordan",
        name: "Air Jordan 11 Retro 'Cherry'",
        etiquetas: ["Jordan", "Jordan Retro 11"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "Un clásico de las canchas que define la elegancia. El charol brillante y la suela translúcida hacen de este par una pieza central.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 397000, available: false } ],
        imagenes: [ "images/products/jordan-11-cherry-1.png", "images/products/jordan-11-cherry-2.png" ]
    },

    // ============================================================================
    // ===== SECCIÓN 2: GAMA MEDIA (Aprox. $70.000 - $79.999) =====
    // ============================================================================

    'nike-shox-tl-black': {
        id: 'nike-shox-tl-black',
        marca: "Nike",
        name: "Nike Shox TL 'Black'",
        etiquetas: ["Shox TL"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "El regreso de un ícono del 2003. Con su amortiguación mecánica y una estética agresiva, las Nike Shox TL son pura declaración de estilo.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Chile', 'Internacional', 'Abono'], chileStock: true }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Chile', 'Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 199990, available: false } ],
        imagenes: [ "/images/products/nike-shox-tl-black-1.png", "/images/products/nike-shox-tl-black-2.png", "/images/products/nike-shox-tl-black-3.png", "/images/products/nike-shox-tl-black-4.png" ]
    },
    'nike-shox-tl-white': {
        id: 'nike-shox-tl-white',
        marca: "Nike",
        name: "Nike Shox TL 'White Metallic Silver'",
        etiquetas: ["Shox TL"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "La misma tecnología revolucionaria de las Shox, ahora en un color blanco puro con toques plateados para un look futurista y limpio.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 199990, available: false } ],
        imagenes: [ "/images/products/nike-shox-tl-white-1.png", "/images/products/nike-shox-tl-white-2.png", "/images/products/nike-shox-tl-white-3.png", "/images/products/nike-shox-tl-white-4.png" ]
    },
    'nike-dunk-panda': {
        id: 'nike-dunk-panda',
        marca: "Nike",
        name: "Nike Dunk Low 'Panda'",
        etiquetas: ["Dunk"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "La zapatilla que definió una era. Su esquema de color simple y su versatilidad la convirtieron en un fenómeno global.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 129990, available: false } ],
        imagenes: [ "/images/products/nike-dunk-panda-1.png", "images/products/nike-dunk-panda-2.png" ]
    },
    'nike-airmax-97-silver': {
        id: 'nike-airmax-97-silver',
        marca: "Nike",
        name: "Nike Air Max 97 'Silver Bullet'",
        etiquetas: ["Air Max 97"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "Una leyenda de la cultura urbana en Chile. Su diseño futurista inspirado en los trenes bala es un símbolo de estatus.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 299000, available: false } ],
        imagenes: [ "images/products/nike-airmax-97-silver-1.png", "images/products/nike-airmax-97-silver-2.png" ]
    },
    'nike-vomero-5': {
        id: 'nike-vomero-5',
        marca: "Nike",
        name: "Nike Vomero 5",
        etiquetas: ["Vomero"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "Un favorito de la tendencia 'dad shoe'. Apreciado por su comodidad superior y su diseño técnico de múltiples capas.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 150990, available: false } ],
        imagenes: [ "images/products/nike-vomero-5-1.png", "images/products/nike-vomero-5-2.png" ]
    },
    'nike-shox-tl-neymar': {
        id: 'nike-shox-tl-neymar',
        marca: "Nike",
        name: "Nike Shox Tl Neymar",
        etiquetas: ["Shox TL"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "La audacia de Neymar Jr. y la icónica tecnología Nike Shox se unen en esta colaboración exclusiva.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [  { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true } ],
        imagenes: [ "images/products/nike-shox-tl-neymar1.png", "images/products/nike-shox-tl-neymar2.png",]
    },
    'nike-tn-triple-black': {
        id: 'nike-tn-triple-black',
        marca: "Nike",
        name: "Nike Air Max Plus 'Triple Black'",
        etiquetas: ["Air Max Plus TN"],
        precioBase: { chile: 76990, internacional: 76990 },
        descripcion: "Conocidas como las 'TN', estas zapatillas ofrecen una estética audaz inspirada en las playas y la tecnología Tuned Air para una comodidad superior.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 240000, available: false } ],
        imagenes: [ "/images/products/nike-tn-triple-black-1.png", "/images/products/nike-tn-triple-black-2.png", "/images/products/nike-tn-triple-black-3.png", "/images/products/nike-tn-triple-black-4.png" ]
    },
    'asics-gel-kayano-14': {
        id: 'asics-gel-kayano-14',
        marca: "ASICS",
        name: "ASICS GEL-Kayano 14",
        etiquetas: ["GEL-Kayano"],
        precioBase: { chile: 70990, internacional: 70990 },
        descripcion: "El epítome de la tendencia 'Y2K runner'. Una estética técnica de los 2000 con la comodidad legendaria de la tecnología GEL.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 149990, available: false } ],
        imagenes: [ "images/products/asics-gel-kayano-14-1.png", "images/products/asics-gel-kayano-14-2.png" ]
    },
    'nike-af1-white': {
        id: 'nike-af1-white',
        marca: "Nike",
        name: "Nike Air Force 1 '07 'White'",
        etiquetas: ["Air Force 1"],
        precioBase: { chile: 70990, internacional: 70990 },
        descripcion: "El ícono original. La zapatilla que lo empezó todo, en su color blanco impecable que nunca pasa de moda.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Chile', 'Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 122990, available: false } ],
        imagenes: [ "/images/products/nike-af1-white-1.png", "/images/products/nike-af1-white-2.png", "/images/products/nike-af1-white-3.png", "/images/products/nike-af1-white-4.png" ]
    },
  'nike-af1-black': {
        id: 'nike-af1-black',
        marca: "Nike",
        name: "Nike Air Force 1 '07 'Black'",
        etiquetas: ["Air Force 1"],
        precioBase: { chile: 70990, internacional: 70990 },
        descripcion: "El clásico indiscutible en su versión más versátil y elegante. Un básico imprescindible en cualquier rotación.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Chile', 'Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 122990, available: false } ],
        imagenes: [ "/images/products/nike-af1-black-1.png", "/images/products/nike-af1-black-2.png", "/images/products/nike-af1-black-3.png", "/images/products/nike-af1-black-4.png" ]
    },

    // ============================================================================
    // ===== SECCIÓN 3: GAMA DE ENTRADA (Aprox. $60.000 - $69.999) =====
    // ============================================================================

    'nb-530': {
        id: 'nb-530',
        marca: "New Balance",
        name: "New Balance 530",
        etiquetas: ["530"],
        precioBase: { chile: 65990, internacional: 65990 },
        descripcion: "Rescatada de los archivos del baloncesto de los 80, la 530 combina una estética retro con una comodidad moderna.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 99990, available: false } ],
        imagenes: [ "images/products/nb-530-1.png", "images/products/nb-530-2.png" ]
    },
    'adidas-samba-og': {
        id: 'adidas-samba-og',
        marca: "Adidas",
        name: "Adidas Samba",
        etiquetas: ["Samba"],
        precioBase: { chile: 65990, internacional: 65990 },
        descripcion: "El ícono indiscutible del estilo 'terrace'. Una silueta atemporal que ha trascendido el deporte para dominar la moda urbana.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '41', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '42.5', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '43', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '44', locations: ['Internacional', 'Abono'], chileStock: false }, ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 99990, available: false } ],
        imagenes: [ "/images/products/adidas-samba-og-1.png", "/images/products/adidas-samba-og-2.png" ]
    },
    'adidas-campus-00s': {
        id: 'adidas-campus-00s',
        marca: "Adidas",
        name: "Adidas Campus 00s",
        etiquetas: ["Campus"],
        precioBase: { chile: 65990, internacional: 65990 },
        descripcion: "Inspirada en la cultura skate de los 2000, esta versión 'chunky' de la clásica Campus ha dominado las redes sociales.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 100990, available: false } ],
        imagenes: [ "images/products/adidas-campus-00s-1.png", "images/products/adidas-campus-00s-2.png", "images/products/adidas-campus-00s-3.png" ]
    },
    'adidas-superstar': {
        id: 'adidas-superstar',
        marca: "Adidas",
        name: "Adidas Superstar",
        etiquetas: ["Superstar"],
        precioBase: { chile: 65990, internacional: 65990 },
        descripcion: "Un clásico inmortal. Su icónica punta de goma es reconocida en todo el mundo y sigue siendo una opción segura y estilosa.",
        tallas: [ { size: '38', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '39', locations: ['Internacional', 'Abono'], chileStock: false }, { size: '40', locations: ['Internacional', 'Abono'], chileStock: false } ],
        qualities: [ { name: 'TOP', priceModifier: 0, available: true }, { name: 'G5', priceModifier: 10000, available: true }, { name: 'PK', priceModifier: 15000, available: true }, { name: 'Original Retail', overridePrice: 90990, available: false } ],
        imagenes: [ "/images/products/adidas-superstar-1.png", "images/products/adidas-superstar-2.png" ]
    },
};
module.exports = { productsDB };