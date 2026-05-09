/** Contacto y WhatsApp del consultorio. */
export const site = {
	name: "VIA Odontología",
	tagline: "Odontología preservadora, ética y centrada en tu biología.",
	phoneDisplay: "+54 9 11 5782-5664",
	phoneHref: "tel:+5491157825664",
	email: "contacto@ejemplo.com",
	emailHref: "mailto:contacto@ejemplo.com",
	whatsapp: "5491157825664",
	addressLine: "Buenos Aires, Argentina",
};

export const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quisiera consultar por un turno.")}`;
