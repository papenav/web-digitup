"use client";

const techs = [
  {
    name: "Kubernetes",
    path: "M12 0L15.09 6.26L22 7.27L17 12.14L18.18 19L12 15.77L5.82 19L7 12.14L2 7.27L8.91 6.26L12 0Z",
  },
  {
    name: "GitLab",
    path: "M22.5 12.6L12 23L1.5 12.6L4.3 3H19.7L22.5 12.6Z",
  },
  {
    name: "Azure",
    path: "M13.5 0L24 24H18L13.5 12L9 24H0L10.5 0H13.5Z",
  },
  {
    name: "Power BI",
    path: "M2 2H6V22H2V2ZM8 6H12V22H8V6ZM14 10H18V22H14V10ZM20 14H24V22H20V14Z",
  },
  {
    name: "Power Apps",
    path: "M12 2L22 7V17L12 22L2 17V7L12 2Z",
  },
];

export default function TechCarousel() {
  return (
    <div className="overflow-hidden mt-8 sm:mt-10">
      <div className="flex gap-10 sm:gap-16 animate-scroll whitespace-nowrap items-center">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[120px] gap-2 sm:gap-3"
          >
            <svg
              viewBox="0 0 24 24"
              width={36}
              height={36}
              className="sm:w-12 sm:h-12"
              aria-hidden="true"
            >
              <path d={tech.path} fill="#444" />
            </svg>

            <span className="text-xs sm:text-sm text-gray-600 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}