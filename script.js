// ================== CONFIGURACIÓN ==================
// Cuando tengas el número, ponlo aquí con prefijo de país y sin espacios ni "+", p. ej. "34600123456".
const WHATSAPP_NUMBER = "";

// Aviso en la parte de arriba de la web (vacaciones, rebajas...).
// Para activarlo: activo: true. Si pones fechas, solo se muestra entre "desde" y "hasta" (ambos incluidos).
const AVISO = {
  activo: false,
  desde: "2027-02-01",
  hasta: "2027-02-16",
  texto: {
    es: "Cerramos por vacaciones del 1 al 16 de febrero. ¡Nos vemos a la vuelta!",
    ca: "Tanquem per vacances de l'1 al 16 de febrer. Ens veiem a la tornada!",
    en: "We're closed for holidays from 1 to 16 February. See you when we're back!",
    fr: "Nous sommes fermés pour congés du 1er au 16 février. À bientôt !",
  },
};

// Productos (fotos sacadas del Instagram de la tienda). "price": null muestra "Consultar precio".
// Para poner precio, cambia null por el número, p. ej. price: 18
const PRODUCTS = [
  { id: "collar-estrella-plata",  cat: "necklaces", price: null, name: { es: "Collar estrella de plata",           ca: "Collaret estel de plata",            en: "Silver star necklace",          fr: "Collier étoile en argent" } },
  { id: "collar-mineral-turquesa",cat: "necklaces", price: null, name: { es: "Collar Anartxy turquesa",            ca: "Collaret Anartxy turquesa",          en: "Anartxy turquoise necklace",    fr: "Collier Anartxy turquoise" } },
  { id: "collar-ambar",           cat: "necklaces", price: null, name: { es: "Collar Anartxy ámbar",               ca: "Collaret Anartxy ambre",             en: "Anartxy amber necklace",        fr: "Collier Anartxy ambre" } },
  { id: "colgante-moldavita",     cat: "necklaces", price: null, name: { es: "Colgante de moldavita y plata",      ca: "Penjoll de moldavita i plata",       en: "Moldavite & silver pendant",    fr: "Pendentif moldavite et argent" } },
  { id: "japamala",               cat: "necklaces", price: null, name: { es: "Japamala personalizado",             ca: "Japamala personalitzat",             en: "Custom japamala",               fr: "Japamala personnalisé" } },
  { id: "pendientes-triangulo",   cat: "earrings",  price: null, name: { es: "Pendientes triángulo turquesa",      ca: "Arracades triangle turquesa",        en: "Turquoise triangle earrings",   fr: "Boucles triangle turquoise" } },
  { id: "pendientes-negros",      cat: "earrings",  price: null, name: { es: "Pendientes Anartxy negros",          ca: "Arracades Anartxy negres",           en: "Black Anartxy earrings",        fr: "Boucles Anartxy noires" } },
  { id: "pulsera-perlas-plata",   cat: "bracelets", price: null, name: { es: "Pulsera de plata y perlas",          ca: "Polsera de plata i perles",          en: "Silver & pearl bangle",         fr: "Bracelet argent et perles" } },
  { id: "pulsera-triple",         cat: "bracelets", price: null, name: { es: "Pulsera triple",                     ca: "Braçalet triple",                    en: "Triple bracelet",               fr: "Bracelet triple" } },
  { id: "pulsera-macrame",        cat: "bracelets", price: null, name: { es: "Pulsera de macramé y ojo de tigre",  ca: "Polsera de macramé i ull de tigre",  en: "Macramé & tiger's eye bracelet", fr: "Bracelet macramé et œil de tigre" } },
  { id: "pulseras-ojo-turco",     cat: "bracelets", price: null, name: { es: "Pulseras ojo turco",                 ca: "Polseres ull turc",                  en: "Evil eye bracelets",            fr: "Bracelets œil turc" } },
  { id: "anillo-plata",           cat: "rings",     price: null, name: { es: "Anillo de plata orgánica",           ca: "Anell de plata orgànica",            en: "Organic silver ring",           fr: "Bague en argent organique" } },
  { id: "cabassos",               cat: "bags",      price: null, name: { es: "Capazos de mimbre y piel",           ca: "Cabassos de vímet i pell",           en: "Wicker & leather baskets",      fr: "Paniers osier et cuir" } },
  { id: "bolso-piel",             cat: "bags",      price: null, name: { es: "Bolso de piel trenzada",             ca: "Bossa de pell trenada",              en: "Woven leather bag",             fr: "Sac en cuir tressé" } },
].map((p) => ({ ...p, img: `img/${p.id}.jpg` }));

// ================== TEXTOS ==================
const T = {
  es: {
    "nav.collection": "Colección", "nav.about": "Nosotros", "nav.visit": "Visítanos",
    "hero.eyebrow": "Bisutería · Lloret de Mar",
    "hero.title": "Pequeños detalles para tus mejores momentos",
    "hero.text": "Bisutería y accesorios en plata y acero, minerales, macramé y bolsos de piel. En pleno centro de Lloret.",
    "hero.cta": "Ver colección", "hero.cta2": "Cómo llegar",
    "collection.title": "Colección",
    "collection.text": "Reserva tus piezas y recógelas en tienda, o pregúntanos por WhatsApp.",
    "cat.all": "Todo", "cat.necklaces": "Collares", "cat.earrings": "Pendientes", "cat.bracelets": "Pulseras", "cat.rings": "Anillos",
    "cat.bags": "Bolsos", "price.ask": "Consultar precio", "visit.days": "Lunes a sábado",
    "more.title": "Esto es solo una pequeña muestra", "more.text": "Cada semana llegan piezas nuevas que no da tiempo a subir aquí. Ven a la tienda a descubrirlas todas o mira las últimas novedades en nuestro Instagram.",
    "more.visit": "Ven a la tienda", "more.ig": "Ver novedades en Instagram",
    "nav.custom": "Encargos",
    "custom.title": "Encargos y reparaciones",
    "custom.text": "¿Buscas algo que no encuentras o se te ha roto una pieza? Cuéntanoslo y te decimos qué podemos hacer.",
    "custom.made.title": "Piezas personalizadas",
    "custom.made.text": "Collares con tu mineral favorito, japamalas a medida, pulseras con nombre o con los colores que elijas.",
    "custom.repair.title": "Reparaciones",
    "custom.repair.text": "Cambiamos cierres, reengarzamos collares y pulseras y arreglamos esa pieza a la que tienes cariño.",
    "custom.form.type": "¿Qué necesitas?",
    "custom.form.made": "Una pieza personalizada",
    "custom.form.repair": "Una reparación",
    "custom.form.other": "Otra consulta",
    "custom.form.msg": "Cuéntanos un poco más",
    "custom.form.ph": "Ej.: un collar largo con amatista y cuentas de madera",
    "custom.form.send": "Enviar por WhatsApp",
    "custom.form.note": "Se abrirá WhatsApp con tu mensaje. Si es una reparación, puedes adjuntar una foto allí.",
    "custom.wa": "¡Hola Cool Moments! Os escribo desde la web.",
    "map.load": "Ver mapa",
    "map.note": "El mapa lo carga Google Maps, que puede usar cookies.",
    "map.more": "Más información",
    "legal.notice": "Aviso legal",
    "legal.privacy": "Privacidad",
    "legal.cookies": "Cookies",
    "add": "Añadir", "added": "Añadido ✓",
    "about.title": "Nosotros",
    "about.text": "Cool Moments es una tienda de bisutería y accesorios en la Carrer de Sant Pere de Lloret de Mar. Trabajamos con plata, acero y minerales, y hacemos piezas personalizadas y reparaciones. Estilo boho, mucho macramé y bolsos de piel natural.",
    "visit.title": "Visítanos", "visit.address": "Dirección", "visit.hours": "Horario", "visit.phone": "Teléfono",
    "visit.directions": "Abrir en Google Maps",
    "cart.title": "Tu cesta", "cart.empty": "Tu cesta está vacía.", "cart.total": "Total",
    "cart.send": "Enviar pedido por WhatsApp", "cart.note": "Te confirmamos disponibilidad y lo recoges en tienda.",
    "wa.hello": "¡Hola Cool Moments! Me gustaría reservar:", "wa.general": "¡Hola Cool Moments! Tengo una pregunta:",
    "wa.missing": "El número de WhatsApp todavía no está configurado.",
  },
  ca: {
    "nav.collection": "Col·lecció", "nav.about": "Nosaltres", "nav.visit": "Visita'ns",
    "hero.eyebrow": "Bijuteria · Lloret de Mar",
    "hero.title": "Petits detalls per als teus millors moments",
    "hero.text": "Bijuteria i accessoris de plata i acer, minerals, macramé i bosses de pell. Al bell mig de Lloret.",
    "hero.cta": "Veure col·lecció", "hero.cta2": "Com arribar-hi",
    "collection.title": "Col·lecció",
    "collection.text": "Reserva les teves peces i recull-les a la botiga, o pregunta'ns per WhatsApp.",
    "cat.all": "Tot", "cat.necklaces": "Collarets", "cat.earrings": "Arracades", "cat.bracelets": "Polseres", "cat.rings": "Anells",
    "cat.bags": "Bosses", "price.ask": "Consultar preu", "visit.days": "Dilluns a dissabte",
    "more.title": "Això és només una petita mostra", "more.text": "Cada setmana arriben peces noves que no tenim temps de penjar aquí. Vine a la botiga a descobrir-les totes o mira les últimes novetats al nostre Instagram.",
    "more.visit": "Vine a la botiga", "more.ig": "Veure novetats a Instagram",
    "nav.custom": "Encàrrecs",
    "custom.title": "Encàrrecs i reparacions",
    "custom.text": "Busques alguna cosa que no trobes o se t'ha trencat una peça? Explica'ns-ho i et diem què podem fer.",
    "custom.made.title": "Peces personalitzades",
    "custom.made.text": "Collarets amb el teu mineral preferit, japamales a mida, polseres amb nom o amb els colors que triïs.",
    "custom.repair.title": "Reparacions",
    "custom.repair.text": "Canviem tancaments, tornem a enfilar collarets i polseres i arreglem aquella peça que t'estimes.",
    "custom.form.type": "Què necessites?",
    "custom.form.made": "Una peça personalitzada",
    "custom.form.repair": "Una reparació",
    "custom.form.other": "Una altra consulta",
    "custom.form.msg": "Explica'ns una mica més",
    "custom.form.ph": "Ex.: un collaret llarg amb ametista i boletes de fusta",
    "custom.form.send": "Enviar per WhatsApp",
    "custom.form.note": "S'obrirà WhatsApp amb el teu missatge. Si és una reparació, hi pots adjuntar una foto.",
    "custom.wa": "Hola Cool Moments! Us escric des de la web.",
    "map.load": "Veure mapa",
    "map.note": "El mapa el carrega Google Maps, que pot fer servir galetes.",
    "map.more": "Més informació",
    "legal.notice": "Avís legal",
    "legal.privacy": "Privacitat",
    "legal.cookies": "Galetes",
    "add": "Afegir", "added": "Afegit ✓",
    "about.title": "Nosaltres",
    "about.text": "Cool Moments és una botiga de bijuteria i accessoris al carrer de Sant Pere de Lloret de Mar. Treballem amb plata, acer i minerals, i fem peces personalitzades i reparacions. Estil boho, molt de macramé i bosses de pell natural.",
    "visit.title": "Visita'ns", "visit.address": "Adreça", "visit.hours": "Horari", "visit.phone": "Telèfon",
    "visit.directions": "Obrir a Google Maps",
    "cart.title": "La teva cistella", "cart.empty": "La teva cistella és buida.", "cart.total": "Total",
    "cart.send": "Enviar comanda per WhatsApp", "cart.note": "Et confirmem la disponibilitat i ho reculls a la botiga.",
    "wa.hello": "Hola Cool Moments! M'agradaria reservar:", "wa.general": "Hola Cool Moments! Tinc una pregunta:",
    "wa.missing": "El número de WhatsApp encara no està configurat.",
  },
  en: {
    "nav.collection": "Collection", "nav.about": "About us", "nav.visit": "Visit us",
    "hero.eyebrow": "Jewellery · Lloret de Mar",
    "hero.title": "Little details for your best moments",
    "hero.text": "Silver and steel jewellery, gemstones, macramé and leather bags. Right in the heart of Lloret.",
    "hero.cta": "See collection", "hero.cta2": "Get directions",
    "collection.title": "Collection",
    "collection.text": "Reserve your pieces and pick them up in store, or ask us on WhatsApp.",
    "cat.all": "All", "cat.necklaces": "Necklaces", "cat.earrings": "Earrings", "cat.bracelets": "Bracelets", "cat.rings": "Rings",
    "cat.bags": "Bags", "price.ask": "Ask for price", "visit.days": "Monday to Saturday",
    "more.title": "This is just a small selection", "more.text": "New pieces arrive every week, more than we can show here. Come to the shop to discover them all, or see our latest arrivals on Instagram.",
    "more.visit": "Visit the shop", "more.ig": "See new arrivals on Instagram",
    "nav.custom": "Custom",
    "custom.title": "Custom pieces & repairs",
    "custom.text": "Looking for something you can't find, or has a piece broken? Tell us and we'll see what we can do.",
    "custom.made.title": "Custom pieces",
    "custom.made.text": "Necklaces with your favourite gemstone, made-to-measure japamalas, bracelets with a name or in the colours you choose.",
    "custom.repair.title": "Repairs",
    "custom.repair.text": "We replace clasps, restring necklaces and bracelets and fix that piece you love.",
    "custom.form.type": "What do you need?",
    "custom.form.made": "A custom piece",
    "custom.form.repair": "A repair",
    "custom.form.other": "Something else",
    "custom.form.msg": "Tell us a bit more",
    "custom.form.ph": "E.g. a long necklace with amethyst and wooden beads",
    "custom.form.send": "Send via WhatsApp",
    "custom.form.note": "WhatsApp will open with your message. For repairs, you can attach a photo there.",
    "custom.wa": "Hi Cool Moments! I'm writing from your website.",
    "map.load": "Show map",
    "map.note": "The map is loaded by Google Maps, which may use cookies.",
    "map.more": "More information",
    "legal.notice": "Legal notice",
    "legal.privacy": "Privacy",
    "legal.cookies": "Cookies",
    "add": "Add", "added": "Added ✓",
    "about.title": "About us",
    "about.text": "Cool Moments is a jewellery and accessories shop on Carrer de Sant Pere in Lloret de Mar. We work with silver, steel and gemstones, and we make custom pieces and do repairs. Boho style, lots of macramé and natural leather bags.",
    "visit.title": "Visit us", "visit.address": "Address", "visit.hours": "Opening hours", "visit.phone": "Phone",
    "visit.directions": "Open in Google Maps",
    "cart.title": "Your bag", "cart.empty": "Your bag is empty.", "cart.total": "Total",
    "cart.send": "Send order via WhatsApp", "cart.note": "We'll confirm availability and you pick it up in store.",
    "wa.hello": "Hi Cool Moments! I'd like to reserve:", "wa.general": "Hi Cool Moments! I have a question:",
    "wa.missing": "The WhatsApp number hasn't been set up yet.",
  },
  fr: {
    "nav.collection": "Collection", "nav.about": "À propos", "nav.visit": "Nous trouver",
    "hero.eyebrow": "Bijoux fantaisie · Lloret de Mar",
    "hero.title": "De petits détails pour vos plus beaux moments",
    "hero.text": "Bijoux et accessoires en argent et acier, pierres naturelles, macramé et sacs en cuir. En plein centre de Lloret.",
    "hero.cta": "Voir la collection", "hero.cta2": "Itinéraire",
    "collection.title": "Collection",
    "collection.text": "Réservez vos pièces et retirez-les en boutique, ou demandez-nous sur WhatsApp.",
    "cat.all": "Tout", "cat.necklaces": "Colliers", "cat.earrings": "Boucles d'oreilles", "cat.bracelets": "Bracelets", "cat.rings": "Bagues",
    "cat.bags": "Sacs", "price.ask": "Prix sur demande", "visit.days": "Du lundi au samedi",
    "more.title": "Ceci n'est qu'un petit aperçu", "more.text": "Chaque semaine, de nouvelles pièces arrivent et nous n'avons pas le temps de toutes les montrer ici. Venez les découvrir en boutique ou retrouvez nos dernières nouveautés sur Instagram.",
    "more.visit": "Venir en boutique", "more.ig": "Nouveautés sur Instagram",
    "nav.custom": "Sur mesure",
    "custom.title": "Sur mesure et réparations",
    "custom.text": "Vous cherchez quelque chose d'introuvable ou un bijou s'est cassé ? Dites-le-nous et nous verrons ce que nous pouvons faire.",
    "custom.made.title": "Pièces personnalisées",
    "custom.made.text": "Colliers avec votre pierre préférée, japamalas sur mesure, bracelets avec un prénom ou dans les couleurs de votre choix.",
    "custom.repair.title": "Réparations",
    "custom.repair.text": "Nous changeons les fermoirs, renfilons colliers et bracelets et réparons le bijou auquel vous tenez.",
    "custom.form.type": "De quoi avez-vous besoin ?",
    "custom.form.made": "Une pièce personnalisée",
    "custom.form.repair": "Une réparation",
    "custom.form.other": "Autre demande",
    "custom.form.msg": "Dites-nous en un peu plus",
    "custom.form.ph": "Ex. : un sautoir avec améthyste et perles en bois",
    "custom.form.send": "Envoyer par WhatsApp",
    "custom.form.note": "WhatsApp s'ouvrira avec votre message. Pour une réparation, vous pourrez y joindre une photo.",
    "custom.wa": "Bonjour Cool Moments ! Je vous écris depuis le site.",
    "map.load": "Afficher la carte",
    "map.note": "La carte est chargée par Google Maps, qui peut utiliser des cookies.",
    "map.more": "Plus d'informations",
    "legal.notice": "Mentions légales",
    "legal.privacy": "Confidentialité",
    "legal.cookies": "Cookies",
    "add": "Ajouter", "added": "Ajouté ✓",
    "about.title": "À propos",
    "about.text": "Cool Moments est une boutique de bijoux et d'accessoires de la Carrer de Sant Pere, à Lloret de Mar. Nous travaillons l'argent, l'acier et les pierres naturelles, et nous réalisons des pièces personnalisées et des réparations. Style bohème, beaucoup de macramé et des sacs en cuir naturel.",
    "visit.title": "Nous trouver", "visit.address": "Adresse", "visit.hours": "Horaires", "visit.phone": "Téléphone",
    "visit.directions": "Ouvrir dans Google Maps",
    "cart.title": "Votre panier", "cart.empty": "Votre panier est vide.", "cart.total": "Total",
    "cart.send": "Envoyer la commande par WhatsApp", "cart.note": "Nous confirmons la disponibilité et vous la retirez en boutique.",
    "wa.hello": "Bonjour Cool Moments ! Je voudrais réserver :", "wa.general": "Bonjour Cool Moments ! J'ai une question :",
    "wa.missing": "Le numéro WhatsApp n'est pas encore configuré.",
  },
};

// ================== ESTADO ==================
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

const browserLang = (navigator.language || "es").slice(0, 2);
let lang = store.get("cm-lang") || (T[browserLang] ? browserLang : "es");
let filter = "all";
let cart = store.get("cm-cart") || {}; // { productId: qty }

const $ = (s) => document.querySelector(s);
const t = (k) => T[lang][k] ?? T.es[k] ?? k;
const priceLabel = (p, q = 1) => (p.price == null ? t("price.ask") : euro(p.price * q));
const euro = (n) => new Intl.NumberFormat(lang + "-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

// ================== RENDER ==================
function applyTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  renderNotice();
  $("#lang").value = lang;
}

function renderFilters() {
  const cats = ["all", "necklaces", "earrings", "bracelets", "rings", "bags"];
  $("#filters").innerHTML = cats.map((c) =>
    `<button class="filter" role="tab" data-cat="${c}" aria-selected="${c === filter}">${t("cat." + c)}</button>`
  ).join("");
}

function renderGrid() {
  const items = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
  $("#grid").innerHTML = items.map((p) => `
    <article class="product">
      <div class="product__img">
        <img src="${p.img}" alt="${p.name[lang]}" loading="lazy">
      </div>
      <div class="product__body">
        <span class="product__cat">${t("cat." + p.cat)}</span>
        <h3 class="product__name">${p.name[lang]}</h3>
        <div class="product__row">
          <span class="product__price">${priceLabel(p)}</span>
          <button class="add" data-id="${p.id}">${t("add")}</button>
        </div>
      </div>
    </article>`).join("");
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const count = entries.reduce((s, [, q]) => s + q, 0);
  const priced = entries.filter(([id]) => PRODUCTS.find((p) => p.id === id).price != null);
  const total = priced.reduce((s, [id, q]) => s + PRODUCTS.find((p) => p.id === id).price * q, 0);

  $("#cartCount").textContent = count;
  $("#cartCount").dataset.empty = count === 0;
  $("#cartEmpty").hidden = count > 0;
  $("#cartSend").disabled = count === 0;
  $("#cartTotal").textContent = euro(total);
  $("#cartTotalRow").hidden = priced.length === 0;
  $("#cartList").innerHTML = entries.map(([id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return `<li class="cart__item">
      <div><div class="cart__item-name">${p.name[lang]}</div><div class="cart__item-price">${priceLabel(p)}</div></div>
      <div class="qty"><button data-dec="${id}" aria-label="-">−</button><span>${q}</span><button data-inc="${id}" aria-label="+">+</button></div>
    </li>`;
  }).join("");
  store.set("cm-cart", cart);
}

function renderAll() { applyTexts(); renderFilters(); renderGrid(); renderCart(); updateWaFloat(); }

// ================== WHATSAPP ==================
function waLink(text) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`; }
function updateWaFloat() { $("#waFloat").href = WHATSAPP_NUMBER ? waLink(t("wa.general")) : "#"; }

function sendOrder() {
  if (!WHATSAPP_NUMBER) { alert(t("wa.missing")); return; }
  const lines = Object.entries(cart).filter(([, q]) => q > 0).map(([id, q]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return `• ${q} × ${p.name[lang]}` + (p.price == null ? "" : ` (${euro(p.price * q)})`);
  });
  const totalLine = $("#cartTotalRow").hidden ? "" : `\n${t("cart.total")}: ${$("#cartTotal").textContent}`;
  window.open(waLink(`${t("wa.hello")}\n${lines.join("\n")}${totalLine}`), "_blank");
}

// ================== EVENTOS ==================
function openCart(open) {
  $("#cart").classList.toggle("is-open", open);
  $("#cart").setAttribute("aria-hidden", !open);
  $("#overlay").hidden = !open;
}

$("#lang").addEventListener("change", (e) => { lang = e.target.value; store.set("cm-lang", lang); renderAll(); });
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  filter = b.dataset.cat; renderFilters(); renderGrid();
});
$("#grid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-id]"); if (!b) return;
  cart[b.dataset.id] = (cart[b.dataset.id] || 0) + 1;
  renderCart();
  b.textContent = t("added");
  setTimeout(() => { b.textContent = t("add"); }, 1200);
});
$("#cartList").addEventListener("click", (e) => {
  const inc = e.target.dataset.inc, dec = e.target.dataset.dec;
  if (inc) cart[inc]++;
  if (dec) { cart[dec]--; if (cart[dec] <= 0) delete cart[dec]; }
  renderCart();
});
$("#cartOpen").addEventListener("click", () => openCart(true));
$("#cartClose").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
$("#cartSend").addEventListener("click", sendOrder);
$("#waFloat").addEventListener("click", (e) => { if (!WHATSAPP_NUMBER) { e.preventDefault(); alert(t("wa.missing")); } });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

// Limpia productos de la cesta que ya no existan
cart = Object.fromEntries(Object.entries(cart).filter(([id]) => PRODUCTS.some((p) => p.id === id)));
$("#year").textContent = new Date().getFullYear();
// ================== AVISO ==================
function renderNotice() {
  const today = new Date().toISOString().slice(0, 10);
  const inRange = (!AVISO.desde || today >= AVISO.desde) && (!AVISO.hasta || today <= AVISO.hasta);
  const dismissed = store.get("cm-notice") === AVISO.texto.es;
  const show = AVISO.activo && inRange && !dismissed;
  $("#notice").hidden = !show;
  if (show) $("#noticeText").textContent = AVISO.texto[lang] || AVISO.texto.es;
}
$("#noticeClose").addEventListener("click", () => { store.set("cm-notice", AVISO.texto.es); renderNotice(); });

// ================== MAPA (solo se carga si el visitante lo pide) ==================
function loadMap() {
  $("#map").innerHTML = '<iframe title="Mapa Cool Moments" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Carrer+de+Sant+Pere+62,+17310+Lloret+de+Mar&z=17&output=embed"></iframe>';
}
$("#mapLoad").addEventListener("click", () => { store.set("cm-map", true); loadMap(); });
if (store.get("cm-map")) loadMap();

// ================== ENCARGOS ==================
$("#customForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!WHATSAPP_NUMBER) { alert(t("wa.missing")); return; }
  const type = $("#customType");
  const msg = `${t("custom.wa")}\n${type.options[type.selectedIndex].text}:\n${$("#customMsg").value.trim()}`;
  window.open(waLink(msg), "_blank");
});

renderAll();
