import {
  siDocker,
  siGithub,
  siGoogle,
  siKubernetes,
  siNextdotjs,
  siPostgresql,
  siPython,
  type SimpleIcon,
} from "simple-icons";

type Tech =
  | { kind: "icon"; icon: SimpleIcon }
  | { kind: "office365" }
  | { kind: "azure" }
  | { kind: "powerbi" }
  | { kind: "sharepoint" }
  | { kind: "teams" }
  | { kind: "ppm" }
  | { kind: "ai" }
  | { kind: "sqlserver" }
  | { kind: "oracledb" };

const techs: Tech[] = [
  { kind: "office365" },
  { kind: "icon", icon: siGoogle },
  { kind: "azure" },
  { kind: "powerbi" },
  { kind: "sharepoint" },
  { kind: "teams" },
  { kind: "ppm" },
  { kind: "sqlserver" },
  { kind: "oracledb" },
  { kind: "icon", icon: siPython },
  { kind: "icon", icon: siPostgresql },
  { kind: "icon", icon: siKubernetes },
  { kind: "icon", icon: siNextdotjs },
  { kind: "icon", icon: siGithub },
  { kind: "icon", icon: siDocker },
  { kind: "ai" },
];

function TechLogo({ tech }: { tech: Tech }) {
  if (tech.kind === "office365") {
    return (
      <>
        <span className="grid h-[30px] w-[30px] grid-cols-2 gap-0.5">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </span>
        <span className="text-sm font-semibold text-[#123036]">
          Office 365
        </span>
      </>
    );
  }

  if (tech.kind === "azure") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <path d="M13.6 3 5.4 17.2h7.1L8.9 21h8.5L13.6 3Z" fill="#0078d4" />
          <path d="M14.7 5.9 19 21h-5.9l2.7-3.8-2.8-5Z" fill="#50a7e9" />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">Azure</span>
      </>
    );
  }

  if (tech.kind === "powerbi") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <rect x="3" y="11" width="4" height="9" rx="1" fill="#f2c811" />
          <rect x="10" y="7" width="4" height="13" rx="1" fill="#d9a300" />
          <rect x="17" y="3" width="4" height="17" rx="1" fill="#b88700" />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">Power BI</span>
      </>
    );
  }

  if (tech.kind === "sharepoint") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="#038387" />
          <circle cx="16.5" cy="9" r="4.2" fill="#37c6d0" opacity="0.9" />
          <text x="8" y="16" fill="white" fontSize="9" fontWeight="700">
            S
          </text>
        </svg>
        <span className="text-sm font-semibold text-[#123036]">SharePoint</span>
      </>
    );
  }

  if (tech.kind === "teams") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <rect x="3" y="7" width="12" height="12" rx="2" fill="#6264a7" />
          <circle cx="17" cy="8" r="3" fill="#7b83eb" />
          <text x="7" y="16" fill="white" fontSize="8" fontWeight="700">
            T
          </text>
        </svg>
        <span className="text-sm font-semibold text-[#123036]">Teams</span>
      </>
    );
  }

  if (tech.kind === "sqlserver") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7" ry="3" fill="#cc2927" />
          <path d="M5 6v9c0 1.7 3.1 3 7 3s7-1.3 7-3V6" fill="#e34f4d" />
          <ellipse cx="12" cy="15" rx="7" ry="3" fill="#cc2927" />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">SQL Server</span>
      </>
    );
  }

  if (tech.kind === "ppm") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <rect x="3" y="5" width="7" height="6" rx="1.3" fill="#1f6f82" />
          <rect x="14" y="5" width="7" height="6" rx="1.3" fill="#4da3b3" />
          <rect x="8.5" y="15" width="7" height="6" rx="1.3" fill="#0e2f3a" />
          <path
            d="M10 8h4M17.5 11v2.5h-11V11"
            fill="none"
            stroke="#6ca6c1"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">PPM</span>
      </>
    );
  }

  if (tech.kind === "oracledb") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7" ry="3" fill="#c74634" />
          <path d="M5 6v9c0 1.7 3.1 3 7 3s7-1.3 7-3V6" fill="#f15b45" />
          <ellipse cx="12" cy="15" rx="7" ry="3" fill="#c74634" />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">Oracle DB</span>
      </>
    );
  }

  if (tech.kind === "ai") {
    return (
      <>
        <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
          <rect x="5" y="5" width="14" height="14" rx="4" fill="#0e2f3a" />
          <path
            d="M8.5 12h7M12 8.5v7M7 5V3M12 5V3M17 5V3M7 21v-2M12 21v-2M17 21v-2M5 7H3M5 12H3M5 17H3M21 7h-2M21 12h-2M21 17h-2"
            fill="none"
            stroke="#4da3b3"
            strokeLinecap="round"
            strokeWidth="1.3"
          />
        </svg>
        <span className="text-sm font-semibold text-[#123036]">IA</span>
      </>
    );
  }

  return (
    <>
      <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
        <path d={tech.icon.path} fill={`#${tech.icon.hex}`} />
      </svg>

      <span className="text-sm font-semibold text-[#123036]">
        {tech.icon.title}
      </span>
    </>
  );
}

export default function TechCarousel() {
  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-scroll items-center gap-5 whitespace-nowrap">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center gap-5">
            {techs.map((tech) => (
              <div
                key={`${group}-${tech.kind === "icon" ? tech.icon.title : tech.kind}`}
                className="flex min-w-[148px] shrink-0 items-center gap-3 rounded-lg border border-[#d7e2e8] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(14,47,58,0.04)]"
              >
                <TechLogo tech={tech} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
