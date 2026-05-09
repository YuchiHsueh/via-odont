/** Contenido de especialidades, equipo y tratamientos. */

export type SpecialtyCard = {
	title: string;
	slug: string;
	blurb: string;
	image: string;
};

export const specialtyCards: SpecialtyCard[] = [
	{
		title: "Odontología general",
		slug: "odontologia-general",
		blurb: "Prevención, diagnóstico y tratamiento de las afecciones más comunes de dientes y encías.",
		image: "foto 1.jpeg",
	},
	{
		title: "Periodoncia",
		slug: "periodoncia",
		blurb: "Salud de encías y tejidos que sostienen los dientes: base para conservar tu dentición natural.",
		image: "foto 4.jpeg",
	},
	{
		title: "Odontopediatría",
		slug: "odontopediatria",
		blurb: "Atención para niños y adolescentes, con foco en prevención y experiencias positivas.",
		image: "foto 5.jpeg",
	},
	{
		title: "Endodoncia",
		slug: "endodoncia",
		blurb: "Tratamiento de conducto para eliminar dolor, tratar infección y conservar la pieza natural.",
		image: "foto 6.jpeg",
	},
	{
		title: "Ortodoncia y ortopedia",
		slug: "ortodoncia-ortopedia",
		blurb: "Alineación dental y guía del crecimiento maxilar para función y estética armónicas.",
		image: "foto 7.jpeg",
	},
	{
		title: "Cirugía bucal",
		slug: "cirugia-bucal",
		blurb: "Procedimientos quirúrgicos en boca, regeneración pre-implantológica y extracciones complejas.",
		image: "foto 8.jpeg",
	},
	{
		title: "Implantología oral",
		slug: "implantologia",
		blurb: "Reemplazo de piezas perdidas con soluciones fijas o removibles sobre implantes.",
		image: "foto 9.jpeg",
	},
	{
		title: "Prótesis y rehabilitación",
		slug: "protesis-rehabilitacion",
		blurb: "Coronas, puentes y prótesis a medida para recuperar función y armonía visual.",
		image: "foto 11.jpeg",
	},
	{
		title: "Estética dental",
		slug: "estetica-dental",
		blurb: "Diseño de sonrisa, blanqueamiento y restauraciones mínimamente invasivas.",
		image: "foto 12.jpeg",
	},
];

export type Professional = {
	name: string;
	/** Archivo en /img o null si aún no hay foto */
	photo: string | null;
	roles: string[];
	/** Iniciales para tarjeta sin foto */
	initials?: string;
	/** Resalta la tarjeta (ej. foto destacada) */
	featured?: boolean;
	/**
	 * Zoom sobre la foto (object-fit cover + scale). Valores ~1.12–1.48:
	 * más alto = más crop (cara más grande). Ajustar por encuadre original.
	 * Con `photoOriginY` en la franja superior (~17–18%) la cara queda anclada
	 * en la parte alta del marco (orientación “cabeza ≤ ~35% del alto visible” cuando el encuadre lo permite).
	 */
	photoZoom?: number;
	/** object-position, ej. `center 22%` o `52% 18%` */
	photoFocus?: string;
	/** transform-origin vertical (ej. `17.5%` = centro de la franja 0–35%) */
	photoOriginY?: string;
};

export const professionals: Professional[] = [
	{
		name: "Dr. Espindola Valentín",
		photo: "Espindola Valentín.jpg",
		photoZoom: 1.52,
		photoFocus: "center 20%",
		photoOriginY: "17.5%",
		roles: ["Odontología general", "Periodoncia", "Odontopediatría"],
	},
	{
		name: "Dra. Florentina Amado",
		photo: "Florentina Amado.jpeg",
		photoZoom: 1.34,
		photoFocus: "center 22%",
		photoOriginY: "17.5%",
		roles: ["Ortodoncia / ortopedia", "Odontopediatría"],
	},
	{
		name: "Dr. Juan Carlos Pereyra",
		photo: "Juan Carlos Pereyra.jpg",
		photoZoom: 1.34,
		photoFocus: "center 22%",
		photoOriginY: "17.5%",
		roles: ["Prótesis", "Rehabilitación", "Estética dental"],
	},
	{
		name: "Dr. Hassan Chang",
		photo: "el mas fachero.jpeg",
		featured: true,
		photoZoom: 1.08,
		photoFocus: "center 18%",
		photoOriginY: "17.5%",
		roles: ["Cirugía bucal", "Implantología oral", "Prótesis", "Rehabilitación"],
	},
];

export const treatmentIntro = {
	title: "Nuestros tratamientos y especialidades",
	lead:
		"En VIA Odontología Integral nos preocupamos por la salud y el bienestar de tu sonrisa. Nuestro equipo de profesionales altamente capacitados trabaja con un enfoque integral para brindarte la mejor atención. A continuación, te explicamos en qué consiste cada uno de nuestros tratamientos:",
};

export const treatmentPills = [
	"Endodoncia",
	"Cirugía",
	"Prótesis",
	"Ortodoncia / ortopedia",
	"Odontopediatría",
	"Implantología",
];

export type TreatmentBlock = {
	id: string;
	title: string;
	paragraphs: string[];
};

export const treatmentBlocks: TreatmentBlock[] = [
	{
		id: "odontologia-general",
		title: "1. Odontología general",
		paragraphs: [
			"Es la base de tu salud bucal. Nos enfocamos en la prevención, el diagnóstico y el tratamiento de las afecciones más comunes de los dientes y las encías. Realizamos controles periódicos, limpiezas, restauraciones y te brindamos educación para mantener una boca sana a lo largo del tiempo.",
		],
	},
	{
		id: "periodoncia",
		title: "2. Periodoncia",
		paragraphs: [
			"Esta especialidad se encarga de la prevención, el diagnóstico y el tratamiento de las enfermedades que afectan a las encías y a los tejidos que sostienen los dientes (como el hueso). Unas encías sanas son el pilar fundamental para conservar los dientes naturales.",
		],
	},
	{
		id: "odontopediatria",
		title: "3. Odontopediatría",
		paragraphs: [
			"Brindamos atención especializada para los más pequeños de la familia, desde sus primeros meses de vida hasta la adolescencia. Nuestro objetivo es crear una experiencia positiva y sin temores, enfocándonos en la prevención, el cuidado y el desarrollo adecuado de su dentición.",
		],
	},
	{
		id: "endodoncia",
		title: "4. Endodoncia",
		paragraphs: [
			'Conocido comúnmente como "tratamiento de conducto". Se realiza cuando la parte más interna del diente (la pulpa o nervio) se ve afectada por una caries profunda o un traumatismo. Permite eliminar el dolor, tratar la infección y salvar tu pieza dental natural.',
		],
	},
	{
		id: "ortodoncia-ortopedia",
		title: "5. Ortodoncia y ortopedia",
		paragraphs: [
			"Ortodoncia: Corrige la posición de los dientes para lograr una correcta alineación y mordida, mejorando tanto la estética como la función masticatoria.",
			"Ortopedia: Guía el crecimiento y desarrollo de los huesos maxilares en niños y adolescentes, creando el espacio necesario para una correcta erupción dental.",
		],
	},
	{
		id: "cirugia-bucal",
		title: "6. Cirugía bucal",
		paragraphs: [
			"Realizamos procedimientos quirúrgicos en la cavidad oral con un enfoque altamente especializado y seguro. Nos destacamos en cirugías regenerativas pre-implantológicas, tanto de tejidos duros (óseos) como blandos (gingivales), cuyo objetivo es preparar el terreno devolviendo el volumen y las condiciones biológicas óptimas para asegurar el éxito y la naturalidad de los tratamientos. Además, abarcamos extracciones complejas y otros procedimientos quirúrgicos menores, brindando siempre el mayor confort al paciente.",
		],
	},
	{
		id: "implantologia",
		title: "7. Implantología oral",
		paragraphs: [
			"Es la solución más avanzada y predecible para reemplazar piezas dentales perdidas. Consiste en la colocación de una fijación de titanio que actúa como raíz artificial, sobre la cual se coloca una prótesis fija o removible para recuperar la función y la estética.",
		],
	},
	{
		id: "protesis-rehabilitacion",
		title: "8. Prótesis y rehabilitación",
		paragraphs: [
			"Diseñamos soluciones a medida para devolverle a tu boca toda su funcionalidad y armonía visual. Ya sea mediante coronas, puentes o prótesis completas, buscamos restaurar la sonrisa de manera natural, respetando la biología de tus tejidos.",
		],
	},
];

export const esteticaBlock = {
	id: "estetica-dental",
	title: "Estética dental y diseño de sonrisa",
	paragraphs: [
		"Nos enfocamos en realzar la belleza natural de tu sonrisa mediante técnicas mínimamente invasivas, logrando resultados armónicos, saludables y duraderos. Analizamos cada detalle para que el resultado estético sea una consecuencia directa de la salud bucal. Nuestros tratamientos incluyen el diseño digital de sonrisa (DSD) para planificar de manera predecible y personalizada la proporción de los dientes, encías y rasgos faciales; el blanqueamiento dental para aclarar el tono de forma segura, eliminando manchas; y la aplicación de carillas o restauraciones estéticas para corregir la forma, el tamaño o el color preservando al máximo el tejido natural.",
	],
};
