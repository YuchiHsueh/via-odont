/** Ajustá teléfono, WhatsApp y dirección cuando los tengas definidos. */
export const site = {
	name: "VIA Odontología",
	tagline: "Odontología preservadora, ética y centrada en tu biología.",
	phoneDisplay: "+54 9 11 0000-0000",
	phoneHref: "tel:+54911000000000",
	email: "contacto@ejemplo.com",
	emailHref: "mailto:contacto@ejemplo.com",
	whatsapp: "5491100000000",
	addressLine: "Buenos Aires, Argentina",
};

export const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quisiera consultar por un turno.")}`;
