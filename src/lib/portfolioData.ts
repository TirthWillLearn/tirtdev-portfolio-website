// ── COLORS ────────────────────────────────────────────────────
export const C = {
  bg: "#05080f",
  surface: "#0a0f1c",
  surface2: "#0e1525",
  border: "#182038",
  border2: "#243050",
  green: "#00ff88",
  greenDim: "#00994d",
  blue: "#4da6ff",
  amber: "#ffcc44",
  red: "#ff4466",
  text: "#b8cce0",
  muted: "#3d5272",
  dim: "#1e2d45",
};

// ── TYPES ─────────────────────────────────────────────────────
export type BootLineType =
  | "cmd"
  | "blank"
  | "init"
  | "ok"
  | "route"
  | "div"
  | "ready"
  | "status";
export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface BootLine {
  t: string;
  type: BootLineType;
}

export interface Endpoint {
  m: HttpMethod;
  r: string;
  n: string;
}

export interface Project {
  file: string;
  title: string;
  tag: string | null;
  desc: string;
  stack: string[];
  endpoints: Endpoint[];
  arch: string;
  github: string;
  live: string | null;
}

export interface Concept {
  title: string;
  body: string;
}

// ── BOOT SEQUENCE ─────────────────────────────────────────────
export const BOOT_LINES: BootLine[] = [
  { t: "$ node portfolio.js --env=production", type: "cmd" },
  { t: "", type: "blank" },
  { t: "[  INIT  ] Bootstrapping runtime...", type: "init" },
  { t: "[   OK   ] Node.js v20.11.0", type: "ok" },
  { t: "[  INIT  ] Establishing database connection...", type: "init" },
  { t: "[   OK   ] PostgreSQL connected (AWS RDS)", type: "ok" },
  { t: "[  INIT  ] Warming Redis cache...", type: "init" },
  { t: "[   OK   ] Redis: ready, 0 keys loaded", type: "ok" },
  { t: "[  INIT  ] Registering middleware stack...", type: "init" },
  { t: "[   OK   ] JWT Authentication middleware", type: "ok" },
  { t: "[   OK   ] RBAC authorization layer", type: "ok" },
  { t: "[   OK   ] Rate limiter: 100 req / 15 min", type: "ok" },
  { t: "[   OK   ] Global error handler", type: "ok" },
  { t: "[   OK   ] Request validation (Zod)", type: "ok" },
  { t: "[  INIT  ] Mounting API routes...", type: "init" },
  { t: "[   OK   ] POST   /api/auth/register", type: "route" },
  { t: "[   OK   ] POST   /api/auth/login", type: "route" },
  { t: "[   OK   ] GET    /api/orders          (paginated)", type: "route" },
  {
    t: "[   OK   ] POST   /api/orders          (transactional)",
    type: "route",
  },
  { t: "[   OK   ] PATCH  /api/orders/:id/status", type: "route" },
  { t: "[   OK   ] DELETE /api/orders/:id", type: "route" },
  { t: "", type: "blank" },
  { t: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", type: "div" },
  { t: "  Portfolio server ready on port 3000", type: "ready" },
  { t: "  Developer  →  Tirth Patel", type: "ready" },
  { t: "  Role       →  Backend Developer", type: "ready" },
  { t: "  Status     →  available_for_hire ✓", type: "status" },
  { t: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", type: "div" },
];

// ── TERMINAL JSON ─────────────────────────────────────────────
export const TERMINAL_JSON = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "name": "Tirth Patel",
  "role": "Backend Developer",
  "stack": [
    "Node.js", "Express", "TypeScript",
    "PostgreSQL", "Redis", "Docker", "AWS"
  ],
  "location": "Mumbai, India",
  "status": "available_for_hire",
  "open_to": [
    "Backend Developer",
    "Node.js Developer"
  ],
  "github": "github.com/TirthWillLearn",
  "portfolio": "tirthdev.in"
}`;

// ── PROJECTS ─────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    file: "order-management-api.ts",
    title: "Multi-Vendor Order Management API",
    tag: "Flagship",
    desc: "Full order lifecycle API for a multi-vendor marketplace. Buyers browse products and create orders. Sellers manage inventory and fulfil. Built with strict data consistency at its core.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    endpoints: [
      { m: "POST", r: "/api/auth/register", n: "Register as buyer or seller" },
      { m: "POST", r: "/api/auth/login", n: "Returns signed JWT" },
      { m: "GET", r: "/api/products", n: "Paginated + filtered catalog" },
      { m: "POST", r: "/api/orders", n: "Creates order in SQL transaction" },
      { m: "GET", r: "/api/orders/:id", n: "RBAC — own orders only" },
      {
        m: "PATCH",
        r: "/api/orders/:id/status",
        n: "Seller updates fulfillment",
      },
      { m: "DELETE", r: "/api/orders/:id", n: "Buyer cancels pending order" },
    ],
    arch: "Order creation runs inside a PostgreSQL transaction with SELECT FOR UPDATE row-level locking to prevent race conditions on concurrent stock updates. Rate limiting on auth routes. Centralized error middleware returns structured JSON for all failures.",
    github: "https://github.com/TirthWillLearn/Order-Management-API",
    live: "https://order-management-api-ruqo.onrender.com",
  },
  {
    file: "bookstore-api.ts",
    title: "Bookstore API",
    tag: null,
    desc: "RESTful API for managing books, users, reviews and payments. Cloud-hosted MySQL on AWS RDS. Stripe integrated for purchases.",
    stack: ["Node.js", "Express", "MySQL", "JWT", "Stripe", "AWS RDS"],
    endpoints: [
      { m: "POST", r: "/api/auth/register", n: "Role: reader or admin" },
      { m: "GET", r: "/api/books", n: "Filter by genre, price, rating" },
      { m: "POST", r: "/api/books/:id/review", n: "Authenticated users only" },
      { m: "POST", r: "/api/checkout", n: "Stripe payment intent" },
      { m: "GET", r: "/api/orders/history", n: "Purchase history per user" },
    ],
    arch: "Database hosted on AWS RDS (MySQL). RBAC separates admin and reader permissions at the middleware level. Stripe webhook handler verifies signature before updating order status — prevents fraudulent status injection.",
    github: "https://github.com/TirthWillLearn/bookstore-api",
    live: "https://bookstore-api-czay.onrender.com",
  },
  {
    file: "job-portal-api.ts",
    title: "Job Portal API",
    tag: null,
    desc: "Backend for a job portal — employers post listings, candidates apply. Role-based access, search and filter endpoints.",
    stack: ["Node.js", "Express.js", "MySQL", "JWT"],
    endpoints: [
      { m: "POST", r: "/api/auth/register", n: "Role: employer or candidate" },
      { m: "POST", r: "/api/jobs", n: "Employer creates listing" },
      { m: "GET", r: "/api/jobs", n: "Search + filter by title/city" },
      { m: "POST", r: "/api/jobs/:id/apply", n: "Candidate applies" },
      {
        m: "GET",
        r: "/api/employer/applications",
        n: "Employer views all applicants",
      },
    ],
    arch: "Middleware checks role before every write operation. Employers cannot apply; candidates cannot post. Search uses parameterized SQL with optional WHERE clauses built dynamically to avoid N+1 queries.",
    github: "https://github.com/TirthWillLearn/job-portal-api",
    live: null,
  },
];

// ── STACK ─────────────────────────────────────────────────────
export const STACK_JSON: Record<string, string[]> = {
  runtime: ["Node.js v20", "Express.js", "REST APIs"],
  language: ["TypeScript", "JavaScript ES6+", "SQL"],
  database: ["PostgreSQL", "MySQL", "Redis"],
  orm: ["Raw SQL", "Query Builder", "Prisma (learning)"],
  auth: ["JWT", "RBAC", "bcrypt", "OAuth2 (basic)"],
  realtime: ["Socket.io", "WebSockets", "Redis Pub/Sub"],
  cloud: ["AWS EC2", "AWS RDS", "AWS S3 (basic)"],
  devops: ["Docker", "Docker Compose", "Render", "Vercel"],
  api_design: ["REST", "Pagination", "Rate Limiting", "Versioning"],
  testing: ["Postman", "Thunder Client", "Manual API testing"],
  tools: ["Git", "GitHub", "Linux", "VS Code"],
  learning: ["System Design", "DSA in Java", "PostgreSQL internals"],
};

// ── CONCEPTS ─────────────────────────────────────────────────
export const CONCEPTS: Concept[] = [
  {
    title: "SQL Transactions",
    body: "BEGIN / COMMIT / ROLLBACK for atomic order ops. Any failure rolls back — no partial writes.",
  },
  {
    title: "Row-Level Locking",
    body: "SELECT FOR UPDATE on stock rows before decrement. Prevents two requests from overselling the same inventory.",
  },
  {
    title: "RBAC",
    body: "Role middleware runs before route handler. Enforced at every sensitive endpoint — not just checked in the controller.",
  },
  {
    title: "Query Optimization",
    body: "JOIN-based queries instead of N+1 loops. Indexes on foreign keys and filtered columns. Measured with EXPLAIN ANALYZE.",
  },
  {
    title: "Pagination",
    body: "Offset pagination with page size config. Returns total count, current page, hasNext flag for consumers.",
  },
  {
    title: "Global Error Handler",
    body: "Centralized Express middleware catches everything. Returns { success: false, message, code } consistently.",
  },
  {
    title: "Rate Limiting",
    body: "express-rate-limit on auth routes. 10 requests / 15 min per IP. Prevents brute-force on login.",
  },
  {
    title: "Redis",
    body: "Used in Real-Time Chat App for Socket.io session data. JWT invalidation on logout via Redis key expiry.",
  },
];

// ── METHOD COLORS ─────────────────────────────────────────────
export const METHOD_COLORS: Record<HttpMethod, { bg: string; color: string }> =
  {
    GET: { bg: "rgba(77,166,255,0.12)", color: "#4da6ff" },
    POST: { bg: "rgba(0,255,136,0.10)", color: "#00ff88" },
    PATCH: { bg: "rgba(255,204,68,0.12)", color: "#ffcc44" },
    DELETE: { bg: "rgba(255,68,102,0.12)", color: "#ff4466" },
  };

// ── GLOBAL CSS ────────────────────────────────────────────────
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&family=Oxanium:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body, #root {
    background: ${C.bg};
    color: ${C.text};
    font-family: 'JetBrains Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.border2}; border-radius: 3px; }

  @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes bootFadeOut { from{opacity:1} to{opacity:0} }
  @keyframes slideInRight { from{opacity:0;transform:translateX(100%)} to{opacity:1;transform:translateX(0)} }

  .cursor {
    display: inline-block; width: 8px; height: 14px;
    background: ${C.green}; margin-left: 2px; vertical-align: middle;
    animation: blink 1s step-end infinite;
  }
  .bg-grid {
    background-image:
      linear-gradient(${C.border}55 1px, transparent 1px),
      linear-gradient(90deg, ${C.border}55 1px, transparent 1px);
    background-size: 50px 50px;
  }
  .scanline {
    position: fixed; inset: 0; pointer-events: none; z-index: 9998;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px);
  }
  .sidebar-item { transition: background 0.15s; cursor: pointer; user-select: none; }
  .sidebar-item:hover { background: ${C.dim}; }
  .project-card { transition: border-color 0.2s, box-shadow 0.2s; }
  .project-card:hover { border-color: ${C.border2}; box-shadow: 0 0 30px rgba(0,255,136,0.04); }
  .concept-card { transition: border-color 0.2s, background 0.2s; cursor: default; }
  .concept-card:hover { border-color: ${C.border2}; background: ${C.surface2}; }
  .contact-card { transition: background 0.2s; }
  .contact-card:hover { background: ${C.surface2}; }
  .btn-primary  { transition: background 0.2s, box-shadow 0.2s; }
  .btn-primary:hover  { background: #33ffaa !important; box-shadow: 0 0 20px rgba(0,255,136,0.3); }
  .btn-secondary { transition: border-color 0.2s, color 0.2s; }
  .btn-secondary:hover { border-color: ${C.muted} !important; color: ${C.text} !important; }
`;
