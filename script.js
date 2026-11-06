// ================== CONFIGURACIÓN ==================
// Cuando tengas el número, ponlo aquí con prefijo de país y sin espacios ni "+", p. ej. "34600123456".
const WHATSAPP_NUMBER = "";

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
renderAll();
