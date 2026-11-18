import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ladestack',
    title: 'LadeStack',
    category: 'Developer Ecosystem · Product Directory',
    status: 'Public Brand',
    shortDescription: 'A developer-friendly home for browser-first utilities, product documentation, and practical software.',
    overview: 'LadeStack is an independent software brand and the central home for a growing collection of developer utilities, productivity tools, and practical web applications. Its direction emphasizes browser-first access, useful free tooling, thoughtful interface design, and local processing where technically practical.',
    url: 'https://ladestack.in/',
    repository: 'https://github.com/girishlade111',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Static Rendering', 'i18n Routing', 'SEO Architecture'],
    capabilities: [
      'Multilingual content delivery supporting 9 global locales',
      'Centralized application catalog with direct web access',
      'Technical documentation and developer guides',
      'High performance static delivery with zero layout shift'
    ],
    useCases: [
      {
        title: 'Find the Right Tool for a Specific Task',
        description: 'Students and developers can browse a central catalog to discover browser-based IDEs, PDF processors, image optimizers, and productivity utilities.'
      },
      {
        title: 'Learn How Browser-First Tools Work',
        description: 'Read technical articles and architecture documentation explaining client-side storage, WebAssembly execution, and local-first privacy models.'
      },
      {
        title: 'Discover Open Software & Collaborate',
        description: 'Explore connected GitHub repositories, examine open source implementations, and propose improvements.'
      }
    ],
    limitations: 'Individual claims and uptime are monitored per product. Marketing statements on public pages are periodically refreshed against repository evidence.',
    cardStyle: {
      aspect: 'tall',
      theme: 'purple-shield',
      accentColor: '#7c3aed'
    }
  },
  {
    slug: 'gb-coder',
    title: 'GB Coder',
    category: 'Developer Tools · Browser IDE',
    status: 'Open Source',
    shortDescription: 'A Monaco-based browser IDE for static web prototyping and compatible Node.js/WebContainer workflows.',
    overview: 'GB Coder is a browser-based development studio for writing, editing, previewing, and experimenting with web applications. It includes a lightweight HTML, CSS, and JavaScript prototyping workflow alongside an advanced environment for compatible Node.js-oriented browser execution.',
    url: 'https://code.ladestack.in/',
    repository: 'https://github.com/girishlade111/GB-CODER-PUBLIC-ALPHA',
    stack: ['Monaco Editor', 'TypeScript', 'WebContainers', 'HTML5/CSS3', 'IndexedDB', 'ZIP Export'],
    capabilities: [
      'In-browser Monaco Editor with syntax highlighting, autocomplete, and diagnostics',
      'Instant sandboxed preview iframe with hot reloading',
      'Local persistence with IndexedDB for durable offline workspaces',
      'Full project packaging and one-click ZIP archive export'
    ],
    useCases: [
      {
        title: 'Prototype Interfaces Without Local Setup',
        description: 'Quickly experiment with frontend components, CSS animations, and DOM APIs without installing Node, npm, or local build tools.'
      },
      {
        title: 'Experiment With Framework Projects in the Browser',
        description: 'Test modern Node.js and React setups using WebContainer execution directly within supported desktop browsers.'
      },
      {
        title: 'Maintain & Export Portable Code Archives',
        description: 'Save development experiments locally and export complete source archives ready to open in VS Code or push to Git.'
      }
    ],
    limitations: 'Advanced terminal workflows depend on browser WebContainer support. Clearing browser site data removes locally cached unexported workspaces.',
    cardStyle: {
      aspect: 'tall',
      theme: 'retro-mac',
      accentColor: '#ec4899'
    }
  },
  {
    slug: 'ls-pdf',
    title: 'LS PDF',
    category: 'Documents · Client-Side PDF Toolkit',
    status: 'Repository-Documented',
    shortDescription: 'A local-first toolkit for editing, organizing, converting, and processing PDF documents.',
    overview: 'LS PDF is a browser-oriented PDF utility suite designed for common document operations while minimizing unnecessary server-side file handling. It provides 17 client-side functions including merging, splitting, compression, page rotation, image conversion, and metadata management.',
    url: 'https://pdf.ladestack.in/',
    repository: 'https://github.com/girishlade111/LS-PDF',
    stack: ['React', 'TypeScript', 'Vite', 'PDF.js', 'pdf-lib', 'Web Workers', 'JSZip'],
    capabilities: [
      'Local-first PDF manipulation executed strictly within browser memory',
      'Multi-page reordering, rotation, page extraction, and merging',
      'Image-to-PDF and PDF-to-image batch conversion workflows',
      'Web Worker multithreading for smooth UI during heavy file operations'
    ],
    useCases: [
      {
        title: 'Organize Everyday Application Packets',
        description: 'Combine multiple transcripts, identification scans, and receipts into a single clean PDF with reordered pages.'
      },
      {
        title: 'Prepare Documents for Email & Upload Limits',
        description: 'Compress oversized PDF documents and strip unnecessary metadata before submitting to portals with strict file size caps.'
      },
      {
        title: 'Handle Sensitive Documents Locally',
        description: 'Process confidential personal records and contracts entirely on your own device without uploading files to remote servers.'
      }
    ],
    limitations: 'Processing large multi-gigabyte files is constrained by browser tab memory limits. Certain cryptographic password features are subject to library versioning.',
    cardStyle: {
      aspect: 'standard',
      theme: 'feature-metrics',
      accentColor: '#3b82f6'
    }
  },
  {
    slug: 'md2pdf',
    title: 'MD2PDF',
    category: 'Documentation · Markdown Publishing',
    status: 'Repository-Documented',
    shortDescription: 'Turn Markdown and repository documentation into polished PDFs and organized documentation books.',
    overview: 'MD2PDF is a developer-friendly Markdown publishing tool for transforming Markdown text, local files, and compatible repository content into readable PDF documents. It supports chapter reordering, automated table of contents generation, code syntax highlighting, and mathematical typesetting.',
    url: 'https://md2pdf.ladestack.in/',
    repository: 'https://github.com/girishlade111/ReadmePDF',
    stack: ['Astro', 'TypeScript', 'DOMPurify', 'KaTeX', 'PrismJS', 'pdf-lib', 'JSZip'],
    capabilities: [
      'GitHub-Flavored Markdown parsing with sanitization and syntax highlighting',
      'Mathematical formula rendering via KaTeX integration',
      'Multi-chapter documentation consolidation with automated cover and TOC',
      'Browser-local draft history and ZIP archive export'
    ],
    useCases: [
      {
        title: 'Convert Technical READMEs into Handout PDFs',
        description: 'Transform project documentation and setup guides into styled, printable documents for client handoffs and offline review.'
      },
      {
        title: 'Assemble Multi-Chapter Documentation Books',
        description: 'Select and organize multiple Markdown files from a project into a single structured book with consistent headers and footers.'
      },
      {
        title: 'Format Academic & Engineering Notes',
        description: 'Author complex technical guides with inline equations, code snippets, and custom page numbering.'
      }
    ],
    limitations: 'Fetching external repository content requires explicit network requests to GitHub API. Production availability may reflect ongoing infrastructure updates.',
    cardStyle: {
      aspect: 'tall',
      theme: 'dark-editor',
      accentColor: '#10b981'
    }
  },
  {
    slug: 'bharat-land-converter',
    title: 'Bharat Land Converter',
    category: 'Engineering & Measurement · Regional Converter',
    status: 'Public Brand',
    shortDescription: 'Compare standard and regional Indian land-area units through a region-aware conversion interface.',
    overview: 'Bharat Land Converter helps users navigate the complexity of Indian land measurement systems. It translates regional terms such as Guntha, Bigha, Biswa, Kattha, Dhur, Kanal, and Marla into standard units like square feet, square meters, acres, and hectares.',
    url: 'https://land.ladestack.in/',
    repository: 'https://github.com/girishlade111',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Regional Measurement Formulas', 'Client Calculation'],
    capabilities: [
      'State-specific conversion factors accounting for regional variations in Bigha and Biswa',
      'Real-time bidirectional calculation across both traditional and metric units',
      'Responsive numeric interface optimized for mobile and field usage',
      'Clean explanatory notes highlighting state-level measurement assumptions'
    ],
    useCases: [
      {
        title: 'Compare Regional Property Listings with Metric Standards',
        description: 'Quickly convert rural land listings quoted in Gunthas or Bighas into square feet or acres for clear financial comparisons.'
      },
      {
        title: 'Understand Inter-State Land Discrepancies',
        description: 'Explore how traditional measurement definitions differ between Maharashtra, Uttar Pradesh, Bihar, and Punjab.'
      },
      {
        title: 'Preliminary Field Estimation',
        description: 'Perform rapid estimations on mobile devices prior to obtaining formal legal cadastral surveys.'
      }
    ],
    limitations: 'Calculations provide preliminary mathematical estimations and must not be used as official legal survey certificates or registration deeds.',
    cardStyle: {
      aspect: 'standard',
      theme: 'blue-symbols',
      accentColor: '#2563eb'
    }
  },
  {
    slug: 'swift-resume',
    title: 'Swift Resume',
    category: 'Career Productivity · Resume Builder',
    status: 'Repository-Documented',
    shortDescription: 'Create structured, recruiter-friendly resumes with live preview and PDF export.',
    overview: 'Swift Resume is a focused browser-based resume builder designed to simplify presenting professional experience, education, skills, and projects in a structured format. It provides live A4 preview rendering, client-side persistence, and PDF export without requiring account registration.',
    url: 'https://resume.ladestack.in/',
    repository: 'https://github.com/girishlade111/swift-resume-builder',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Print CSS', 'IndexedDB', 'PDF Generation'],
    capabilities: [
      'Structured form editor with real-time preview updating',
      'Clean typographic templates prioritizing readability and hierarchy',
      'Strict client-side persistence ensuring personal data remains on device',
      'Vector PDF export optimized for digital transmission and physical print'
    ],
    useCases: [
      {
        title: 'Build a First Professional Resume',
        description: 'College students and new graduates can compile academic history and coursework projects into a clean, well-spaced format.'
      },
      {
        title: 'Tailor Applications for Specific Positions',
        description: 'Quickly adjust summaries and bullet points to match target job descriptions while retaining consistent layout structure.'
      },
      {
        title: 'Export Private Application Documents',
        description: 'Generate clean PDF resumes directly in the browser without uploading personal contact information to third-party databases.'
      }
    ],
    limitations: 'ATS compatibility is a typographic design goal and does not guarantee automated parsing scores across all recruitment platforms.',
    cardStyle: {
      aspect: 'tall',
      theme: 'warm-plans',
      accentColor: '#f59e0b'
    }
  },
  {
    slug: 'ls-image-compressor',
    title: 'LS Image Compressor',
    category: 'Web Performance · Client-Side Utilities',
    status: 'Repository-Documented',
    shortDescription: 'Resize, optimize, and convert images through a privacy-conscious browser workflow.',
    overview: 'LS Image Compressor provides client-side image processing capabilities for optimizing web assets, compressing large camera photos, and converting between JPEG, PNG, and WebP formats. It leverages browser Canvas APIs and Web Workers for private on-device execution.',
    url: 'https://img.ladestack.in/',
    repository: 'https://github.com/girishlade111/Image-Compressor',
    stack: ['React', 'TypeScript', 'HTML5 Canvas', 'Web Workers', 'PWA Architecture'],
    capabilities: [
      'Target-size optimization algorithm for meeting specific kilobyte constraints',
      'Clipboard image paste detection and drag-and-drop batch processing',
      'Format conversion across WebP, JPEG, and PNG',
      'Metadata and EXIF stripping for privacy protection'
    ],
    useCases: [
      {
        title: 'Optimize Assets for Web Builds',
        description: 'Reduce the transfer footprint of high-resolution images prior to committing them into static website repositories.'
      },
      {
        title: 'Fit Portal Upload Limits',
        description: 'Compress scanned documents and photos to satisfy strict governmental or job application file size requirements.'
      },
      {
        title: 'Convert Graphic Formats Securely',
        description: 'Transform uncompressed PNG screenshots into lightweight WebP files without uploading assets to remote cloud servers.'
      }
    ],
    limitations: 'Browser memory dictates maximum batch sizes; ultra-high-resolution raw files may require progressive downsampling.',
    cardStyle: {
      aspect: 'standard',
      theme: 'context-menu',
      accentColor: '#06b6d4'
    }
  },
  {
    slug: 'gamehub',
    title: 'GameHub',
    category: 'Interactive Web · Browser Games',
    status: 'Open Source',
    shortDescription: 'Browse and play a repository-documented collection of small browser games.',
    overview: 'GameHub is an instant-play browser gaming hub built with Next.js and React. It brings together a catalog of 33 lightweight games spanning arcade, puzzle, word, strategy, and casual categories with zero installation requirements.',
    url: 'https://games-ladestack.vercel.app/',
    repository: 'https://github.com/girishlade111/games-ladestack',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'requestAnimationFrame'],
    capabilities: [
      'Dynamic lazy loading of individual game modules to minimize initial page payload',
      'Canvas-based 60 FPS animation loops for classic arcade titles',
      'Responsive touch and keyboard input handling across mobile and desktop',
      'Local score tracking and state restoration via browser storage'
    ],
    useCases: [
      {
        title: 'Instant Casual Entertainment',
        description: 'Play responsive puzzle and arcade games like 2048, Snake, and Tetris during short breaks with no downloads or logins.'
      },
      {
        title: 'Explore Lightweight Interactive Canvas Patterns',
        description: 'Study how game loops, collision detection, and canvas rendering are implemented cleanly in modern React and TypeScript.'
      },
      {
        title: 'Touch & Keyboard Cross-Play',
        description: 'Enjoy seamless control whether playing on a mobile touchscreen or with a desktop keyboard.'
      }
    ],
    limitations: 'Catalog size is based on repository implementation; performance depends on client hardware acceleration for canvas rendering.',
    cardStyle: {
      aspect: 'tall',
      theme: 'game-cottage',
      accentColor: '#8b5cf6'
    }
  },
  {
    slug: 'ladestack-drive',
    title: 'LadeStack Drive',
    category: 'Experimental · File Storage Explorations',
    status: 'Experimental / Verification Pending',
    shortDescription: 'An experimental file-management project exploring intuitive personal storage and organization.',
    overview: 'LadeStack Drive represents an active architectural exploration into digital asset organization, file management, and clean user interfaces. It explores modern browser storage paradigms, metadata indexing, and potential backend integration patterns.',
    url: 'https://drive.ladestack.in/',
    repository: 'https://github.com/girishlade111',
    stack: ['React', 'TypeScript', 'Storage APIs', 'Database Modeling', 'Authentication Concepts'],
    capabilities: [
      'Visual asset grid with sorting and category categorization concepts',
      'Responsive file previewer and metadata inspection interface',
      'Exploration of client-side caching and local-first persistence models',
      'Structured UI patterns for folder hierarchies and tag filtering'
    ],
    useCases: [
      {
        title: 'Organize Digital Assets Locally',
        description: 'A study in intuitive folder navigation and quick file filtering for everyday documents and project exports.'
      },
      {
        title: 'Evaluate Local-First Storage Tradeoffs',
        description: 'Testing browser storage persistence versus cloud synchronization overhead for personal file workflows.'
      },
      {
        title: 'Interface Prototyping for Cloud Storage',
        description: 'Refining interactions and keyboard navigation for web-based document management systems.'
      }
    ],
    limitations: 'This project is in experimental exploration status. Full cloud synchronization and file hosting features are subject to ongoing architectural verification.',
    cardStyle: {
      aspect: 'standard',
      theme: 'calendar-card',
      accentColor: '#6366f1'
    }
  },
  {
    slug: 'ladestack-labs',
    title: 'LadeStack Labs & Explorations',
    category: 'Research & Concepts · AI Workflows',
    status: 'Experimental / Verification Pending',
    shortDescription: 'Experimental concepts covering AI website builders, visual bookmark managers, and developer utilities.',
    overview: 'LadeStack Labs serves as the incubator for emerging concepts including Bring-Your-Own-Key (BYOK) AI assistants, deterministic URL-level bookmark managers, and developer API testing utilities. These prototypes prioritize explainable logic, user privacy, and zero vendor lock-in.',
    url: 'https://ladestack.in/docs',
    repository: 'https://github.com/girishlade111',
    stack: ['TypeScript', 'Model APIs', 'BYOK Architecture', 'Monaco', 'Web Workers'],
    capabilities: [
      'BYOK model orchestration with client-side key storage',
      'Deterministic rule engines for data organization and URL normalization',
      'Rapid prototype scaffolding across web technologies',
      'Continuous experimentation with AI coding assistants'
    ],
    useCases: [
      {
        title: 'Bring Your Own Key AI Prototyping',
        description: 'Interact with large language model APIs while maintaining full ownership of your credentials and data.'
      },
      {
        title: 'Reliable URL & Bookmark Organization',
        description: 'Organize vast collections of technical documentation links with normalized deduplication.'
      },
      {
        title: 'Test Cutting-Edge Browser Capabilities',
        description: 'Benchmark browser runtimes, WebAssembly libraries, and experimental APIs.'
      }
    ],
    limitations: 'Items in Labs represent active research, prototypes, and proposals. They are not marketed as fully launched production services.',
    cardStyle: {
      aspect: 'tall',
      theme: 'mystery-block',
      accentColor: '#14b8a6'
    }
  }
];
