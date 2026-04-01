export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  coverage: string;
  availability: string;
  detailTitle: string;
  detailHeading: string;
  detailBody: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'location-materiel-agricole',
    title: 'Location matériel agricole',
    summary:
      "Mise à disposition d'équipements pour les travaux agricoles et les besoins ponctuels des exploitants.",
    image: 'images/Agricole.jpg',
    category: 'Location',
    coverage: 'Yaoundé',
    availability: 'Sur réservation',
    detailTitle: 'Location de matériel agricole',
    detailHeading: 'Des équipements adaptés au terrain camerounais',
    detailBody: [
      "BS accompagne producteurs, coopératives et particuliers avec des solutions de location flexibles.",
      "Le service permet de réduire l'investissement initial et d'accélérer les travaux sur le terrain."
    ]
  },

  {
    slug: 'nettoyage-bureaux',
    title: 'Nettoyage bureaux',
    summary:
      'Entretien régulier ou ponctuel des espaces professionnels pour garder des bureaux propres et accueillants.',
    image: 'images/Nettoyage.jpg',
    category: 'Entretien',
    coverage: 'Yaoundé',
    availability: 'Matin, soirée ou week-end',
    detailTitle: 'Nettoyage de bureaux',
    detailHeading: 'Des locaux propres pour une meilleure image professionnelle',
    detailBody: [
      'BS prend en charge les postes de travail, surfaces, sanitaires et zones communes.',
      "Nous adaptons la fréquence d'intervention à la taille de votre structure et à vos contraintes."
    ]
  },
  {
    slug: 'jardinage',
    title: 'Jardinage',
    summary:
      'Entretien des espaces verts, taille, débroussaillage et suivi de jardins résidentiels ou professionnels.',
    image: 'images/jardinage.jpg',
    category: 'Espaces verts',
    coverage: 'Yaoundé',
    availability: 'Interventions planifiées',
    detailTitle: 'Service de jardinage',
    detailHeading: 'Des espaces verts entretenus toute l’année',
    detailBody: [
      'Nous assurons un entretien régulier ou ponctuel selon la saison et l’état de vos espaces extérieurs.',
      'Le service convient aux résidences, bureaux, sites commerciaux et propriétés privées.'
    ]
  },
  {
    slug: 'service-chambre-froide',
    title: 'Service chambre froide',
    summary:
      "Solutions d'assistance autour des chambres froides pour les activités commerciales et logistiques.",
    image: 'images/Chambre.jpg',
    category: 'Froid',
    coverage: 'Yaoundé',
    availability: 'Selon besoin client',
    detailTitle: 'Service chambre froide',
    detailHeading: 'Un appui fiable pour la conservation au froid',
    detailBody: [
      "BS accompagne les besoins liés à l'organisation et au suivi autour des chambres froides.",
      "Cette offre s'adresse aux acteurs de la distribution, de l'agroalimentaire et de la restauration."
    ]
  },
  {
    slug: 'maintenance-electricite',
    title: 'Maintenance électricité',
    summary:
      'Diagnostic, entretien et interventions de maintenance électrique pour logements, bureaux et sites professionnels.',
    image: 'images/Electricité.jpg',
    category: 'Maintenance',
    coverage: 'Yaoundé',
    availability: 'Interventions rapides',
    detailTitle: 'Maintenance en électricité',
    detailHeading: 'Des installations plus sûres et plus fiables',
    detailBody: [
      "Nous intervenons pour la vérification, l'entretien et la maintenance de vos installations électriques.",
      'BS privilégie la réactivité, la sécurité et la clarté dans le suivi des travaux.'
    ]
  },
  {
    slug: 'maintenance-plomberie',
    title: 'Maintenance plomberie',
    summary:
      'Prise en charge des fuites, entretiens et travaux de maintenance en plomberie pour particuliers et professionnels.',
    image: 'images/Plombier.webp',
    category: 'Maintenance',
    coverage: 'Yaoundé',
    availability: 'Sur appel',
    detailTitle: 'Maintenance en plomberie',
    detailHeading: "Un service pratique pour vos installations d'eau",
    detailBody: [
      'BS assure les contrôles, réparations et maintenances utiles au bon fonctionnement de vos réseaux.',
      "Le service est conçu pour limiter les interruptions et restaurer rapidement le confort d'usage."
    ]
  }
];
