// ============================================
// JK IMPERIP — Product Database
// Centralized product data for catalog & search
// ============================================

(function () {
    'use strict';

    var IMG_BASE = 'contenido%20catalogo/IMPERIP%20CONTENIDO/';

    function img(filename) {
        return IMG_BASE + encodeURIComponent(filename).replace(/%20/g, '%20');
    }

    // ── PRODUCT DATABASE ──
    var PRODUCTOS = [

        // ═══════════════════════════════════════════
        // CONJUNTOS DEPORTIVOS (Tracksuits de pareja)
        // ═══════════════════════════════════════════

        {
            id: 'CD-001',
            nombre: 'Conjunto Deportivo Retro — Dorado/Negro',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM (2).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Dorado',
            genero: 'Hombre',
            descripcion: 'Conjunto deportivo retro con chaqueta y pantalón en tela satinada premium. Franjas laterales contrastantes, cierre frontal y bolsillos funcionales. El look urbano perfecto para quienes marcan tendencia.',
            keywords: 'conjunto deportivo dorado tracksuit retro hombre'
        },
        {
            id: 'CD-002',
            nombre: 'Dúo Power Set — Azul Marino/Blanco',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM (1).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Azul Marino',
            genero: 'Pareja',
            descripcion: 'Conjunto deportivo de pareja en tela satinada azul marino con franjas blancas laterales. Chaqueta con cierre y cuello alto, pantalón jogger con puños ajustables. Perfecto para el dúo que conquista la calle.',
            keywords: 'conjunto pareja azul marino tracksuit duo deportivo'
        },
        {
            id: 'CD-003',
            nombre: 'Dúo Power Set — Azul Rey/Blanco',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Azul Rey',
            genero: 'Pareja',
            descripcion: 'Set deportivo de pareja en vibrante azul rey con franjas blancas contrastantes. Tela satinada de alta calidad con cierre frontal premium y ajuste perfecto. Un match que rompe esquemas.',
            keywords: 'conjunto pareja azul rey tracksuit deportivo matching'
        },
        {
            id: 'CD-004',
            nombre: 'Dúo Power Set — Gris Plata',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '💎 Premium',
            color: 'Gris Plata',
            genero: 'Pareja',
            descripcion: 'Conjunto deportivo de pareja en sofisticado gris plata con acabado satinado. Líneas deportivas laterales, cierre premium y corte moderno. Elegancia streetwear al máximo nivel.',
            keywords: 'conjunto pareja gris plata tracksuit premium streetwear'
        },
        {
            id: 'CD-005',
            nombre: 'Conjunto Deportivo Retro — Negro Clásico',
            categoria: 'Conjuntos',
            precio: 139900,
            precioAnterior: 179900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM (3).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Negro',
            genero: 'Unisex',
            descripcion: 'El clásico que nunca falla. Conjunto deportivo negro con franjas contrastantes y acabado satinado premium. Comodidad total con estilo inigualable.',
            keywords: 'conjunto deportivo negro clasico tracksuit unisex'
        },
        {
            id: 'CD-006',
            nombre: 'Conjunto Deportivo Retro — Rojo/Negro',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM (4).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Rojo',
            genero: 'Unisex',
            descripcion: 'Conjunto deportivo en rojo intenso con detalles negros contrastantes. Tela satinada de alta calidad, cierre frontal y corte athleisure moderno. Domina la calle con actitud.',
            keywords: 'conjunto deportivo rojo negro tracksuit retro unisex'
        },
        {
            id: 'CD-007',
            nombre: 'Conjunto Deportivo Retro — Verde Bosque',
            categoria: 'Conjuntos',
            precio: 149900,
            precioAnterior: 189900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.14 PM (5).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Verde',
            genero: 'Unisex',
            descripcion: 'Conjunto deportivo en verde bosque con franjas laterales blancas. Tela satinada premium con cierre metálico y acabados de lujo. El tono que define personalidad y estilo propio.',
            keywords: 'conjunto deportivo verde bosque tracksuit retro unisex'
        },

        // ═══════════════════════════════════════════
        // CHAQUETAS VARSITY (All Star — Dama)
        // ═══════════════════════════════════════════

        {
            id: 'CV-001',
            nombre: 'Chaqueta Varsity All Star — Chocolate/Marfil',
            categoria: 'Chaquetas',
            precio: 159900,
            precioAnterior: 199900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.17 PM (3).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '💎 Premium',
            color: 'Chocolate',
            genero: 'Mujer',
            descripcion: 'Chaqueta estilo Varsity/College con bordados en chenil de alta calidad. Cuerpo en tela tipo drill color chocolate con mangas contrastantes en marfil, capucha desmontable con cordón ajustable. Botones snap a presión, puños y cintura con rayas deportivas. Un ícono del streetwear americano adaptado al estilo colombiano.',
            keywords: 'chaqueta varsity college chocolate marfil mujer all star bomber'
        },
        {
            id: 'CV-002',
            nombre: 'Chaqueta Varsity All Star — Negro/Marfil',
            categoria: 'Chaquetas',
            precio: 159900,
            precioAnterior: 199900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.17 PM (1).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Negro',
            genero: 'Mujer',
            descripcion: 'Chaqueta Varsity en elegante combinación negro con mangas marfil. Bordados premium en chenil con letra "B" personalizada, capucha con cordón y botones snap metálicos. El must-have de la temporada.',
            keywords: 'chaqueta varsity negro marfil mujer all star college bomber'
        },
        {
            id: 'CV-003',
            nombre: 'Chaqueta Varsity All Star — Azul Bebé/Marfil',
            categoria: 'Chaquetas',
            precio: 159900,
            precioAnterior: 199900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.17 PM (2).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Azul Bebé',
            genero: 'Mujer',
            descripcion: 'Chaqueta Varsity en suave azul bebé con mangas contrastantes en marfil. Bordados chenil de alta definición, capucha desmontable y puños con rayas deportivas. Dulzura y actitud en una sola prenda.',
            keywords: 'chaqueta varsity azul bebe celeste mujer all star college'
        },
        {
            id: 'CV-004',
            nombre: 'Chaqueta Varsity All Star — Rosa Barbie/Marfil',
            categoria: 'Chaquetas',
            precio: 159900,
            precioAnterior: 199900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.17 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Rosa',
            genero: 'Mujer',
            descripcion: 'Chaqueta Varsity en rosa Barbie vibrante con mangas en marfil y bordados chenil de lujo. Capucha con cordón, botones snap y terminaciones deportivas. El statement piece que define tu personalidad.',
            keywords: 'chaqueta varsity rosa barbie pink mujer all star college'
        },

        // ═══════════════════════════════════════════
        // CHAQUETAS VARSITY PREMIUM (Angel/Redentor)
        // ═══════════════════════════════════════════

        {
            id: 'CV-005',
            nombre: 'Chaqueta Varsity Premium ANGEL — Negro/Dorado',
            categoria: 'Chaquetas',
            precio: 189900,
            precioAnterior: 249900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.18 PM (2).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '💎 Premium',
            color: 'Negro/Dorado',
            genero: 'Unisex',
            descripcion: 'Chaqueta Varsity colección ANGEL by Redentor. Diseño "Evolution — Future Era" con bordado de ángel en la espalda de altísima calidad. Cuerpo negro con mangas en tono dorado, ribetes rayados y botones snap premium. Una obra de arte portátil para los que buscan exclusividad.',
            keywords: 'chaqueta varsity premium angel redentor negro dorado evolution bomber'
        },

        // ═══════════════════════════════════════════
        // ABRIGOS (Overcoats elegantes)
        // ═══════════════════════════════════════════

        {
            id: 'AB-001',
            nombre: 'Abrigo Elegance — Gris Perla',
            categoria: 'Abrigos',
            precio: 199900,
            precioAnterior: 269900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.16 PM (3).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '💎 Premium',
            color: 'Gris',
            genero: 'Mujer',
            descripcion: 'Abrigo largo de corte clásico en paño gris perla con doble botonadura metálica. Solapas anchas estilo trench, bolsillos funcionales con solapa y forro interno premium. Perfecto para los climas de Bogotá y la región andina colombiana.',
            keywords: 'abrigo gris elegante overcoat mujer paño invierno premium'
        },
        {
            id: 'AB-002',
            nombre: 'Abrigo Elegance — Rosa Empolvado',
            categoria: 'Abrigos',
            precio: 199900,
            precioAnterior: 269900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.16 PM (2).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Rosa',
            genero: 'Mujer',
            descripcion: 'Abrigo largo en sofisticado rosa empolvado con doble botonadura plateada. Corte recto con solapas amplias, bolsillos laterales profundos y acabado en paño de alta calidad. Elegancia atemporal que eleva cualquier outfit.',
            keywords: 'abrigo rosa empolvado elegante overcoat mujer paño premium'
        },

        // ═══════════════════════════════════════════
        // CHAQUETAS JEAN (Denim — AfLux)
        // ═══════════════════════════════════════════

        {
            id: 'CJ-001',
            nombre: 'Chaqueta Jean Clásica AfLux — Azul Industrial',
            categoria: 'Chaquetas',
            precio: 129900,
            precioAnterior: 169900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.56 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Azul Industrial',
            genero: 'Hombre',
            descripcion: 'Chaqueta de jean clásica en azul industrial oscuro por AfLux. Corte trucker con bolsillos de parche, botonadura de cobre vintage y costuras reforzadas en hilo contrastante. Un básico indispensable con carácter.',
            keywords: 'chaqueta jean denim azul hombre clasica trucker aflux'
        },
        {
            id: 'CJ-002',
            nombre: 'Chaqueta Jean Clásica AfLux — Azul Hielo',
            categoria: 'Chaquetas',
            precio: 129900,
            precioAnterior: 169900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.56 PM (1).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Azul Hielo',
            genero: 'Hombre',
            descripcion: 'Chaqueta de jean lavado en azul hielo por AfLux. Estilo trucker con lavado stone-wash, botones de cobre y corte relajado. El toque casual-cool que combina con todo.',
            keywords: 'chaqueta jean denim azul hielo hombre lavado trucker aflux'
        },

        // ═══════════════════════════════════════════
        // CAMISETAS / CROP TOPS
        // ═══════════════════════════════════════════

        {
            id: 'CT-001',
            nombre: 'Crop Top Polo Heart — Blanco',
            categoria: 'Camisetas',
            precio: 59900,
            precioAnterior: 79900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.57 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Blanco',
            genero: 'Mujer',
            descripcion: 'Crop top estilo polo en algodón premium blanco con bordado de corazón negro en el pecho. Cuello polo con abertura en V, manga corta y corte crop moderno. Ideal para looks frescos de día.',
            keywords: 'crop top polo corazon blanco mujer camiseta algodon'
        },
        {
            id: 'CT-002',
            nombre: 'Crop Top Polo Heart — Rosa',
            categoria: 'Camisetas',
            precio: 59900,
            precioAnterior: 79900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.58 PM.jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Rosa',
            genero: 'Mujer',
            descripcion: 'Crop top polo en rosa pastel con detalle de corazón bordado. Tela de algodón suave con corte crop y cuello polo. La pieza perfecta para un look coquette de temporada.',
            keywords: 'crop top polo corazon rosa mujer camiseta coquette'
        },

        // ═══════════════════════════════════════════
        // CONJUNTOS ELEGANTES
        // ═══════════════════════════════════════════

        {
            id: 'CE-001',
            nombre: 'Conjunto Elegante Urban — Terracota',
            categoria: 'Elegante',
            precio: 169900,
            precioAnterior: 219900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.18 PM (3).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '💎 Premium',
            color: 'Terracota',
            genero: 'Hombre',
            descripcion: 'Conjunto de camisa y pantalón en tela liviana color terracota. Camisa de corte relajado con cuello campero y pantalón slim con bota recta. El equilibrio perfecto entre lo formal y lo casual para el hombre moderno.',
            keywords: 'conjunto elegante terracota hombre camisa pantalon urban formal casual'
        },
        {
            id: 'CE-002',
            nombre: 'Conjunto Elegante Urban — Negro',
            categoria: 'Elegante',
            precio: 169900,
            precioAnterior: 219900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.18 PM (1).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Negro',
            genero: 'Hombre',
            descripcion: 'Conjunto total black de camisa y pantalón en tela premium con textura suave. Camisa de corte moderno semi-entallada con pantalón slim. Versatilidad absoluta para eventos, cenas y salidas nocturnas.',
            keywords: 'conjunto elegante negro hombre total black formal casual urban'
        },

        // ═══════════════════════════════════════════
        // BUZOS / HOODIES
        // ═══════════════════════════════════════════

        {
            id: 'BZ-001',
            nombre: 'Buzo Hoodie Oversize — Negro',
            categoria: 'Buzos',
            precio: 89900,
            precioAnterior: 119900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (1).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Negro',
            genero: 'Unisex',
            descripcion: 'Buzo hoodie oversize en algodón perchado premium. Capucha con cordón, bolsillo canguro frontal y puños elásticos. El esencial de armario que nunca pasa de moda.',
            keywords: 'buzo hoodie negro oversize unisex algodon sudadera capucha'
        },
        {
            id: 'BZ-002',
            nombre: 'Buzo Hoodie Oversize — Gris',
            categoria: 'Buzos',
            precio: 89900,
            precioAnterior: 119900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (2).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Gris',
            genero: 'Unisex',
            descripcion: 'Hoodie oversize en gris jaspe con algodón perchado ultra suave. Capucha doble tela, bolsillo canguro y acabados premium. Comodidad máxima con un look street impecable.',
            keywords: 'buzo hoodie gris oversize unisex algodon sudadera'
        },
        {
            id: 'BZ-003',
            nombre: 'Buzo Cuello Redondo IMPERIP — Blanco',
            categoria: 'Buzos',
            precio: 79900,
            precioAnterior: 109900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (3).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '',
            color: 'Blanco',
            genero: 'Unisex',
            descripcion: 'Buzo de cuello redondo en algodón premium blanco con logo IMPERIP bordado. Corte oversize relajado, puños y cintura acanalados. Minimalismo que habla por sí solo.',
            keywords: 'buzo cuello redondo blanco imperip unisex algodon sweatshirt'
        },

        // ═══════════════════════════════════════════
        // DEPORTIVO / FITNESS
        // ═══════════════════════════════════════════

        {
            id: 'DP-001',
            nombre: 'Set Deportivo Gym — Negro/Blanco',
            categoria: 'Deportivo',
            precio: 119900,
            precioAnterior: 159900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (4).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '🔥 Hot',
            color: 'Negro',
            genero: 'Mujer',
            descripcion: 'Set deportivo de dos piezas para gym: top deportivo con soporte medium y legging de tiro alto con tela dry-fit antibacterial. Compresión estratégica para máximo rendimiento y silueta definida.',
            keywords: 'set deportivo gym negro mujer legging top fitness dryfit'
        },
        {
            id: 'DP-002',
            nombre: 'Set Deportivo Gym — Azul Eléctrico',
            categoria: 'Deportivo',
            precio: 119900,
            precioAnterior: 159900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (5).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '✨ Nuevo',
            color: 'Azul',
            genero: 'Mujer',
            descripcion: 'Set gym en azul eléctrico vibrante con tela dry-fit de alta compresión. Top con tirantes cruzados en la espalda y legging escultor con cintura reforzada. Destaca en cada entrenamiento.',
            keywords: 'set deportivo gym azul mujer legging top fitness dryfit'
        },
        {
            id: 'DP-003',
            nombre: 'Sudadera Deportiva Oversize — Gris',
            categoria: 'Deportivo',
            precio: 79900,
            precioAnterior: 109900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (6).jpeg'),
            tallas: ['S', 'M', 'L', 'XL'],
            tag: '',
            color: 'Gris',
            genero: 'Unisex',
            descripcion: 'Sudadera deportiva oversize en tela french terry gris. Ideal para calentamiento pre-entreno o para el look athleisure del día a día. Cómoda, funcional y con estilo.',
            keywords: 'sudadera deportiva gris oversize unisex gym athleisure'
        },

        // ═══════════════════════════════════════════
        // CALZADO
        // ═══════════════════════════════════════════

        {
            id: 'CZ-001',
            nombre: 'Sneakers Urban Classic — Blanco Total',
            categoria: 'Calzado',
            precio: 159900,
            precioAnterior: 219900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.15 PM (7).jpeg'),
            tallas: ['38', '39', '40', '41', '42', '43'],
            tag: '🔥 Hot',
            color: 'Blanco',
            genero: 'Unisex',
            descripcion: 'Zapatillas urbanas en blanco total con suela chunky y diseño minimalista. Plantilla de memory foam para máxima comodidad. El básico obligado del armario moderno.',
            keywords: 'zapatillas sneakers blanco unisex urbano casual tenis calzado'
        },
        {
            id: 'CZ-002',
            nombre: 'Sneakers Urban Classic — Negro',
            categoria: 'Calzado',
            precio: 159900,
            precioAnterior: 219900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.16 PM.jpeg'),
            tallas: ['38', '39', '40', '41', '42', '43'],
            tag: '✨ Nuevo',
            color: 'Negro',
            genero: 'Unisex',
            descripcion: 'Sneakers urbanos en negro total con suela plataforma y acabados premium. Forro transpirable, plantilla anatómica y diseño versátil que va con todo.',
            keywords: 'zapatillas sneakers negro unisex urbano casual tenis calzado'
        },
        {
            id: 'CZ-003',
            nombre: 'Sneakers Retro Runner — Beige/Azul',
            categoria: 'Calzado',
            precio: 169900,
            precioAnterior: 229900,
            imagen: img('WhatsApp Image 2026-02-23 at 6.41.16 PM (1).jpeg'),
            tallas: ['38', '39', '40', '41', '42', '43'],
            tag: '💎 Premium',
            color: 'Beige/Azul',
            genero: 'Unisex',
            descripcion: 'Zapatillas estilo retro runner con combinación beige y detalles en azul. Suela con amortiguación visible, malla transpirable y detalles en gamuza sintética. El toque vintage-modern para tu outfit.',
            keywords: 'zapatillas sneakers retro beige azul runner vintage unisex'
        }
    ];

    // ── SEARCH FUNCTION ──
    function buscarProductos(query) {
        if (!query || query.length < 2) return PRODUCTOS;
        var q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return PRODUCTOS.filter(function (p) {
            var texto = (p.nombre + ' ' + p.categoria + ' ' + p.color + ' ' + p.keywords + ' ' + p.descripcion)
                .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            var words = q.split(/\s+/);
            for (var i = 0; i < words.length; i++) {
                if (texto.indexOf(words[i]) < 0) return false;
            }
            return true;
        });
    }

    // ── FILTER BY CATEGORY ──
    function filtrarPorCategoria(cat) {
        if (!cat || cat === 'Todo') return PRODUCTOS;
        return PRODUCTOS.filter(function (p) { return p.categoria === cat; });
    }

    // ── FORMAT PRICE ──
    function formatPrecio(precio) {
        return '$' + precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // ── GET ALL CATEGORIES ──
    function getCategorias() {
        var cats = {};
        for (var i = 0; i < PRODUCTOS.length; i++) {
            cats[PRODUCTOS[i].categoria] = (cats[PRODUCTOS[i].categoria] || 0) + 1;
        }
        return cats;
    }

    // ── EXPORT TO GLOBAL ──
    window.PRODUCTOS_DB = PRODUCTOS;
    window.buscarProductos = buscarProductos;
    window.filtrarPorCategoria = filtrarPorCategoria;
    window.formatPrecio = formatPrecio;
    window.getCategorias = getCategorias;

})();
