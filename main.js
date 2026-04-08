// ── Translations ──
const translations = {
  es: {
    lang_label:     'EN',
    nav_home:       'Inicio',
    nav_projects:   'Proyectos',
    nav_stack:      'Stack',
    nav_certs:      'Cursos',
    nav_contact:    'Contacto',
    hero_greeting:  'Hola, soy',
    hero_role_prefix: 'Soy: ',
    bio:            'Construyo sistemas backend en producción: APIs, servicios en tiempo real, integraciones con LLMs y pipelines de automatización. Trabajo con problemas reales, no con tutoriales.',
    btn_projects:   'Ver proyectos',
    projects_title: 'Proyectos',
    projects_sub:   'Sistemas reales, en producción',
    burgerli_desc:  'Plataforma de pedidos en tiempo real para restaurantes.',
    burgerli_1:     'Servidor WebSocket manejando pedidos concurrentes y actualizaciones en vivo para cocina',
    burgerli_2:     'Backend en FastAPI con ciclo de vida de pedidos y control de acceso por roles',
    burgerli_3:     'Deploy en VPS con Docker + Nginx',
    tranett_desc:   'SaaS para operadores de turismo — reservas, liquidaciones y gestión.',
    tranett_1:      'Backend multi-tenant gestionando reservas, pagos e informes por operador',
    tranett_2:      'Lógica de liquidaciones entre proveedores y servicios',
    tranett_3:      'API REST consumida por frontend web e integraciones externas',
    vitalis_desc:   'Sistema de gestión médica con manejo de documentos y control de acceso.',
    vitalis_1:      'Sistema RBAC con permisos granulares para pacientes, staff y administradores',
    vitalis_2:      'Pipeline de carga, almacenamiento y recuperación de documentos médicos',
    vitalis_3:      'Backend en FastAPI con separación de dominios estructurada',
    stack_title:    'Stack',
    stack_sub:      'Tecnologías con las que trabajo',
    s_backend:      'Backend',
    s_db:           'Base de datos',
    s_infra:        'Infraestructura',
    s_rt:           'Tiempo real',
    s_auto:         'Automatización',
    s_ai:           'IA / Integraciones',
    alexisevt_desc: 'Plataforma de reservas multi-vendor con liquidaciones, notificaciones y gestión de paquetes.',
    alexisevt_1:    '9 módulos: auth, usuarios, paquetes, reservas, liquidaciones, notificaciones, cartelera, uploads y config',
    alexisevt_2:    'Rate limiting, migraciones con Alembic y seed automático de base de datos al iniciar',
    alexisevt_3:    'Full-stack: FastAPI + Next.js + Docker Compose, con tests de sistema',
    serena_desc:    'Backend para agencia de viajes — autenticación, gestión de datos y deploy en VPS.',
    serena_1:       'API REST con FastAPI: CRUD completo y login con usuario pre-cargado en base de datos',
    serena_2:       'MySQL como base de datos con modelos Pydantic para validación de datos',
    serena_3:       'Dockerizado y desplegado en servidor privado',
    barelectro_desc:'Backend para e-commerce de productos electrónicos.',
    barelectro_1:   'API REST con FastAPI: catálogo de productos y formulario de contacto',
    barelectro_2:   'Arquitectura modular con routers separados por dominio',
    barelectro_3:   'Dockerizado con soporte multi-frontend vía CORS',
    zonaquintas_desc:'Plataforma de gestión de propiedades rurales con autenticación y billetera virtual.',
    zonaquintas_1:  'Sistema de autenticación y gestión de usuarios',
    zonaquintas_2:  'Módulo de propiedades con imágenes servidas estáticamente',
    zonaquintas_3:  'Wallet para transacciones financieras entre usuarios',
    certs_title:    'Cursos',
    certs_sub:      'Formación complementaria',
    cert1_name:     'Iniciación al Desarrollo con IA',
    cert2_name:     'Introducción a Data Science',
    cert3_name:     'Introducción a IA Generativa',
    cert_view:      'Ver certificado ↗',
    cert5_name:     'Programming with JavaScript',
    cert6_name:     'JavaScript Algorithms and Data Structures',
    cert7_name:     'Introduction to Front-End Development',
    cert8_name:     'Responsive Web Design',
    contact_title:  'Contacto',
    contact_sub:    '¿Trabajamos juntos?',
    contact_text:   'Disponible para roles como Backend o AI Engineer.',
    contact_btn:    'Escribime',
    footer:         'Facundo Demarco · Argentina · 2025',
  },
  en: {
    lang_label:     'ES',
    nav_home:       'Home',
    nav_projects:   'Projects',
    nav_stack:      'Stack',
    nav_certs:      'Courses',
    nav_contact:    'Contact',
    hero_greeting:  "Hi, I'm",
    hero_role_prefix: "I'm a: ",
    bio:            'I build production-grade backend systems — APIs, real-time services, LLM integrations, and automation pipelines. Real problems, not tutorials.',
    btn_projects:   'View projects',
    projects_title: 'Projects',
    projects_sub:   'Real systems, in production',
    burgerli_desc:  'Real-time food ordering platform for restaurants.',
    burgerli_1:     'WebSocket server handling concurrent orders and live kitchen updates',
    burgerli_2:     'FastAPI backend with order lifecycle management and role-based access',
    burgerli_3:     'Deployed on VPS with Docker + Nginx',
    tranett_desc:   'SaaS for tourism operators — reservations, liquidations, and management.',
    tranett_1:      'Multi-tenant backend handling reservations, payments, and operator reporting',
    tranett_2:      'Business logic for liquidation calculations across providers and services',
    tranett_3:      'REST API consumed by a web frontend and external integrations',
    vitalis_desc:   'Medical management system with document handling and role-based access control.',
    vitalis_1:      'RBAC system with granular permissions across patient, staff, and admin roles',
    vitalis_2:      'Document upload, storage, and retrieval pipeline for medical records',
    vitalis_3:      'FastAPI backend with structured domain separation',
    stack_title:    'Stack',
    stack_sub:      'Technologies I work with',
    s_backend:      'Backend',
    s_db:           'Database',
    s_infra:        'Infrastructure',
    s_rt:           'Real-time',
    s_auto:         'Automation',
    s_ai:           'AI / Integrations',
    alexisevt_desc: 'Multi-vendor booking platform with settlements, notifications, and package management.',
    alexisevt_1:    '9 modules: auth, users, packages, bookings, settlements, notifications, board, uploads, and config',
    alexisevt_2:    'Rate limiting, Alembic migrations, and automatic database seeding on startup',
    alexisevt_3:    'Full-stack: FastAPI + Next.js + Docker Compose, with system tests',
    serena_desc:    'Backend for a travel agency — authentication, data management, and VPS deployment.',
    serena_1:       'REST API with FastAPI: full CRUD and pre-loaded user login stored in database',
    serena_2:       'MySQL database with Pydantic models for data validation',
    serena_3:       'Dockerized and deployed on a private server',
    barelectro_desc:'Backend for an electronics e-commerce platform.',
    barelectro_1:   'REST API with FastAPI: product catalog and contact form',
    barelectro_2:   'Modular architecture with domain-separated routers',
    barelectro_3:   'Dockerized with multi-frontend CORS support',
    zonaquintas_desc:'Rural property management platform with authentication and virtual wallet.',
    zonaquintas_1:  'Authentication system and user management',
    zonaquintas_2:  'Property module with statically served images',
    zonaquintas_3:  'Wallet module for financial transactions between users',
    certs_title:    'Courses',
    certs_sub:      'Complementary training',
    cert1_name:     'Development with AI Initiation',
    cert2_name:     'Introduction to Data Science',
    cert3_name:     'Introduction to Generative AI',
    cert_view:      'View certificate ↗',
    cert5_name:     'Programming with JavaScript',
    cert6_name:     'JavaScript Algorithms and Data Structures',
    cert7_name:     'Introduction to Front-End Development',
    cert8_name:     'Responsive Web Design',
    contact_title:  'Contact',
    contact_sub:    'Want to work together?',
    contact_text:   'Available for roles as Backend or AI Engineer.',
    contact_btn:    'Get in touch',
    footer:         'Facundo Demarco · Argentina · 2025',
  }
};

// ── Typewriter ──
const rolesEs = ['Backend Engineer', 'AI Engineer', 'Builder'];
const rolesEn = ['Backend Engineer', 'AI Engineer', 'Builder'];
let twIndex = 0, twChar = 0, twDeleting = false;

function typewrite() {
  const lang = document.documentElement.dataset.lang || 'es';
  const roles = lang === 'es' ? rolesEs : rolesEn;
  const el = document.getElementById('typewriter');
  if (!el) return;
  const current = roles[twIndex];

  if (twDeleting) {
    twChar--;
    el.textContent = current.slice(0, twChar);
    if (twChar === 0) { twDeleting = false; twIndex = (twIndex + 1) % roles.length; setTimeout(typewrite, 400); return; }
    setTimeout(typewrite, 50);
  } else {
    twChar++;
    el.textContent = current.slice(0, twChar);
    if (twChar === current.length) { twDeleting = true; setTimeout(typewrite, 1800); return; }
    setTimeout(typewrite, 90);
  }
}

// ── Theme ──
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.dataset.theme = savedTheme;

// ── Language ──
const langBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  html.lang = lang;
  html.dataset.lang = lang;
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

langBtn.addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

applyLang(currentLang);
setTimeout(typewrite, 600);
