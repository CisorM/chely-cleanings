/**
 * UI string dictionaries for every supported locale.
 *
 * Keys are dot-namespaced by section. Add a locale by adding an entry to
 * `languages` and a matching block in `ui`. List-type content (the 8 services)
 * lives in the `services` content collection — see `src/content.config.ts`.
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    // ---- Site / SEO ----
    'site.name': 'Chely Cleaning Services and Solutions LLC',
    'site.shortName': 'Chely Cleaning',
    'site.tagline': 'Pristine spaces, peace of mind — Nashville, TN.',
    'site.description':
      "Professional residential and commercial cleaning in Nashville, TN. Standard & deep cleaning, move-in/move-out, post-construction, office, floor care, window and janitorial services. Book online in minutes.",

    // ---- Nav ----
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.gallery': 'Before & After',
    'nav.contact': 'Contact',
    'nav.cta': 'Book Now',
    'nav.skip': 'Skip to content',
    'nav.menu': 'Toggle menu',
    'nav.langLabel': 'Language',

    // ---- Hero ----
    'hero.badge': 'Nashville, TN — Professional Cleaning Service',
    'hero.headlineA': 'Pristine Spaces,',
    'hero.headlineB': 'Peace of Mind.',
    'hero.subheadline':
      "Professional residential and commercial cleaning services tailored to Nashville's most demanding standards. We handle the dirt, you enjoy the time.",
    'hero.ctaPrimary': 'Book Your Cleaning',
    'hero.ctaSecondary': 'Explore Services',
    'hero.stat1Num': '500+',
    'hero.stat1Label': 'Homes Cleaned',
    'hero.stat2Num': '100%',
    'hero.stat2Label': 'Satisfaction',
    'hero.stat3Num': '5★',
    'hero.stat3Label': 'Local Rating',
    'hero.badgeInsuredTitle': 'Fully insured',
    'hero.badgeInsuredSub': 'Vetted local team',
    'hero.imageAlt': 'Pristine, professionally cleaned living room in Nashville',

    // ---- About ----
    'about.eyebrow': 'About Us',
    'about.title': 'Cleaning built on trust, delivered with care.',
    'about.intro':
      "We're a locally-owned Nashville cleaning company committed to transforming spaces and giving families and businesses their time back.",
    'about.missionLabel': 'Our Mission',
    'about.mission':
      "To transform Nashville's spaces into pristine and healthy environments, providing peace of mind and free time to our residential and commercial clients through professional, reliable, and top-quality cleaning services.",
    'about.visionLabel': 'Our Vision',
    'about.vision':
      'To establish ourselves as a comprehensive services corporation with a presence throughout the state — distinguished by our culture of respect and professional attention to detail, exceeding the expectations of the most demanding sectors and improving the quality of life for families and productivity for businesses in Nashville.',
    'about.highlight1.title': 'Professional & Reliable',
    'about.highlight1.body': 'Trained, attentive staff dedicated to delivering the best service.',
    'about.highlight2.title': 'Detail-Oriented',
    'about.highlight2.body': 'We sweat the small stuff so your space shines everywhere.',
    'about.highlight3.title': 'Nashville Local',
    'about.highlight3.body': 'Proudly serving Nashville homes and businesses since day one.',

    // ---- Services ----
    'services.eyebrow': 'Services',
    'services.title': 'Cleaning solutions for every space',
    'services.subtitle':
      'Choose the service that fits your home or business. Every visit is backed by our satisfaction guarantee.',
    'services.tabResidential': 'Residential',
    'services.tabCommercial': 'Commercial',

    // ---- Gallery ----
    'gallery.eyebrow': 'Before & After',
    'gallery.title': 'The Chely difference, in one drag.',
    'gallery.subtitle':
      "Real transformations from Nashville homes we've cleaned. Drag the slider to reveal the results.",
    'gallery.before': 'Before',
    'gallery.after': 'After',
    'gallery.hint': 'Drag the slider →',
    'gallery.item1': 'Kitchen Deep Clean',
    'gallery.item2': 'Bathroom Sanitization',

    // ---- Booking / Contact ----
    'booking.eyebrow': 'Contact & Booking',
    'booking.title': 'Book your cleaning in minutes.',
    'booking.subtitle':
      'Reach out or reserve your slot directly through our booking widget.',
    'contact.title': 'Get in touch',
    'contact.subtitle': 'We reply within a few hours during business days.',
    'contact.locationLabel': 'Location',
    'contact.location': 'Nashville, Tennessee and surrounding areas',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.hoursLabel': 'Hours',
    'contact.hours': 'Mon – Sat · 8:00 AM – 6:00 PM',
    'booking.promoKicker': 'Preferred by locals',
    'booking.promoText': '100% satisfaction guarantee on every clean.',
    'booking.widgetFallback': '[BookingKoala Reservation Widget Embedded Here]',
    'booking.widgetHint':
      'Set PUBLIC_BOOKINGKOALA_SUBDOMAIN in .env to load the live widget, or paste your BookingKoala iframe/script into the container with id "bookingkoala-widget".',
    'booking.step1': 'Choose service',
    'booking.step2': 'Pick date & time',
    'booking.step3': 'Confirm & pay',

    // ---- Contact form ----
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.email': 'Email',
    'form.address': 'Address',
    'form.phone': 'Phone Number',
    'form.message': 'Message',
    'form.send': 'Send',
    'form.sending': 'Sending…',
    'form.success': "Thanks! We've received your message and will get back to you shortly.",
    'form.error': 'Something went wrong. Please call or email us instead.',
    'form.followUs': 'Follow us',
    'form.imageAlt': 'Chely Cleaning team member wiping down a clean home surface',

    // ---- Footer ----
    'footer.entity': 'Services and Solutions LLC',
    'footer.blurb':
      'Professional residential and commercial cleaning across Nashville. Pristine spaces, peace of mind — every single visit.',
    'footer.explore': 'Explore',
    'footer.follow': 'Follow',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with care in Nashville, TN.',
  },

  es: {
    // ---- Site / SEO ----
    'site.name': 'Chely Cleaning Services and Solutions LLC',
    'site.shortName': 'Chely Cleaning',
    'site.tagline': 'Espacios impecables, tranquilidad total — Nashville, TN.',
    'site.description':
      'Limpieza profesional residencial y comercial en Nashville, TN. Limpieza estándar y profunda, mudanzas, post-construcción, oficinas, cuidado de pisos, ventanas y conserjería. Reserve en línea en minutos.',

    // ---- Nav ----
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.gallery': 'Antes y Después',
    'nav.contact': 'Contacto',
    'nav.cta': 'Reservar',
    'nav.skip': 'Saltar al contenido',
    'nav.menu': 'Abrir menú',
    'nav.langLabel': 'Idioma',

    // ---- Hero ----
    'hero.badge': 'Nashville, TN — Servicio Profesional de Limpieza',
    'hero.headlineA': 'Espacios Impecables,',
    'hero.headlineB': 'Tranquilidad Total.',
    'hero.subheadline':
      'Servicios profesionales de limpieza residencial y comercial a la altura de los estándares más exigentes de Nashville. Nosotros nos encargamos de la suciedad, usted disfruta su tiempo.',
    'hero.ctaPrimary': 'Reserva tu Limpieza',
    'hero.ctaSecondary': 'Ver Servicios',
    'hero.stat1Num': '500+',
    'hero.stat1Label': 'Hogares Limpiados',
    'hero.stat2Num': '100%',
    'hero.stat2Label': 'Satisfacción',
    'hero.stat3Num': '5★',
    'hero.stat3Label': 'Calificación Local',
    'hero.badgeInsuredTitle': 'Totalmente asegurados',
    'hero.badgeInsuredSub': 'Equipo local verificado',
    'hero.imageAlt': 'Sala de estar impecable y limpiada profesionalmente en Nashville',

    // ---- About ----
    'about.eyebrow': 'Nosotros',
    'about.title': 'Limpieza basada en la confianza, con dedicación en cada detalle.',
    'about.intro':
      'Somos una empresa de limpieza de Nashville, de propiedad local, comprometida con transformar espacios y devolverles su tiempo a las familias y los negocios.',
    'about.missionLabel': 'Nuestra Misión',
    'about.mission':
      'Transformar los espacios de Nashville en entornos impecables y saludables, brindando tranquilidad y tiempo libre a nuestros clientes residenciales y comerciales mediante servicios de limpieza profesionales, confiables y de la más alta calidad.',
    'about.visionLabel': 'Nuestra Visión',
    'about.vision':
      'Consolidarnos como una corporación integral de servicios con presencia en todo el estado, distinguidos por nuestra cultura de respeto y atención profesional al detalle, superando las expectativas de los sectores más exigentes y mejorando la calidad de vida de las familias y la productividad de las empresas de Nashville.',
    'about.highlight1.title': 'Profesional y Confiable',
    'about.highlight1.body': 'Personal capacitado y atento a dar el mejor servicio.',
    'about.highlight2.title': 'Atención al Detalle',
    'about.highlight2.body': 'Cuidamos lo más pequeño para que todo su espacio brille.',
    'about.highlight3.title': 'Local de Nashville',
    'about.highlight3.body': 'Con orgullo al servicio de hogares y negocios de Nashville desde el primer día.',

    // ---- Services ----
    'services.eyebrow': 'Servicios',
    'services.title': 'Soluciones de limpieza para cada espacio',
    'services.subtitle':
      'Elija el servicio que se adapte a su hogar o negocio. Cada visita está respaldada por nuestra garantía de satisfacción.',
    'services.tabResidential': 'Residencial',
    'services.tabCommercial': 'Comercial',

    // ---- Gallery ----
    'gallery.eyebrow': 'Antes y Después',
    'gallery.title': 'La diferencia Chely, en un solo deslizamiento.',
    'gallery.subtitle':
      'Transformaciones reales de hogares de Nashville que hemos limpiado. Arrastre el control para revelar los resultados.',
    'gallery.before': 'Antes',
    'gallery.after': 'Después',
    'gallery.hint': 'Arrastre el control →',
    'gallery.item1': 'Limpieza Profunda de Cocina',
    'gallery.item2': 'Sanitización de Baño',

    // ---- Booking / Contact ----
    'booking.eyebrow': 'Contacto y Reservas',
    'booking.title': 'Reserve su limpieza en minutos.',
    'booking.subtitle':
      'Contáctenos o reserve su cita directamente a través de nuestro widget de reservas.',
    'contact.title': 'Póngase en contacto',
    'contact.subtitle': 'Respondemos en pocas horas durante días hábiles.',
    'contact.locationLabel': 'Ubicación',
    'contact.location': 'Nashville, Tennessee y sus alrededores',
    'contact.phoneLabel': 'Teléfono',
    'contact.emailLabel': 'Correo',
    'contact.hoursLabel': 'Horario',
    'contact.hours': 'Lun – Sáb · 8:00 AM – 6:00 PM',
    'booking.promoKicker': 'La preferida de los locales',
    'booking.promoText': 'Garantía de satisfacción del 100% en cada limpieza.',
    'booking.widgetFallback': '[Widget de Reservas de BookingKoala aquí]',
    'booking.widgetHint':
      'Defina PUBLIC_BOOKINGKOALA_SUBDOMAIN en .env para cargar el widget en vivo, o pegue su iframe/script de BookingKoala en el contenedor con id "bookingkoala-widget".',
    'booking.step1': 'Elegir servicio',
    'booking.step2': 'Elegir fecha y hora',
    'booking.step3': 'Confirmar y pagar',

    // ---- Contact form ----
    'form.firstName': 'Nombre',
    'form.lastName': 'Apellido',
    'form.email': 'Correo',
    'form.address': 'Dirección',
    'form.phone': 'Teléfono',
    'form.message': 'Mensaje',
    'form.send': 'Enviar',
    'form.sending': 'Enviando…',
    'form.success': 'Gracias, recibimos su mensaje y le responderemos en breve.',
    'form.error': 'Algo salió mal. Por favor llámenos o escríbanos directamente.',
    'form.followUs': 'Síganos',
    'form.imageAlt': 'Miembro del equipo de Chely Cleaning limpiando una superficie del hogar',

    // ---- Footer ----
    'footer.entity': 'Services and Solutions LLC',
    'footer.blurb':
      'Limpieza profesional residencial y comercial en todo Nashville. Espacios impecables, tranquilidad total — en cada visita.',
    'footer.explore': 'Explorar',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con dedicación en Nashville, TN.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
