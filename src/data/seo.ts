import { site } from "./site";
import { treatmentBlocks } from "./content";

/** Coordenadas del embed de Google Maps en index.astro */
export const siteGeo = {
	latitude: -34.60497219797555,
	longitude: -58.45869275838438,
} as const;

export const seo = {
	title: `${site.name} — Consultorio dental en CABA`,
	description: `${site.name}: odontología integral en ${site.addressLine}. Periodoncia, implantes, ortodoncia y más. Coordiná tu turno por WhatsApp.`,
	locale: "es_AR",
	shareImage: "foto 2.jpeg",
	logo: "logo_with_text.svg",
	mapBusinessName: "VIA Odontología Integral",
} as const;

export function getSiteOrigin(siteUrl: URL | undefined, fallbackOrigin: string): URL {
	return siteUrl ?? new URL(fallbackOrigin);
}

export function getCanonicalUrl(origin: URL, baseUrl: string): string {
	const url = new URL(baseUrl, origin);
	if (!url.pathname.endsWith("/")) {
		url.pathname += "/";
	}
	return url.href;
}

export function absoluteAssetUrl(origin: URL, baseUrl: string, filename: string): string {
	const base = new URL(baseUrl, origin);
	return new URL(`img/${encodeURIComponent(filename)}`, base).href;
}

export function buildDentistJsonLd(origin: URL, baseUrl: string) {
	const url = getCanonicalUrl(origin, baseUrl);
	const services = treatmentBlocks.map((block) => block.title.replace(/^\d+\.\s*/, ""));

	return {
		"@context": "https://schema.org",
		"@type": "Dentist",
		"@id": `${url}#dentist`,
		name: site.name,
		legalName: seo.mapBusinessName,
		description: seo.description,
		url,
		telephone: site.phoneHref.replace("tel:", ""),
		email: site.email,
		image: absoluteAssetUrl(origin, baseUrl, seo.shareImage),
		logo: absoluteAssetUrl(origin, baseUrl, seo.logo),
		address: {
			"@type": "PostalAddress",
			streetAddress: "Cucha Cucha 1538",
			postalCode: "C1416",
			addressLocality: "Ciudad Autónoma de Buenos Aires",
			addressCountry: "AR",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: siteGeo.latitude,
			longitude: siteGeo.longitude,
		},
		sameAs: [site.instagram, site.tiktok],
		knowsAbout: services,
	};
}
