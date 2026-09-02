import { cn } from "@/lib/utils";

const shapes = {
  wave: ["M0 48L48 42.7C96 37 192 27 288 26.7C384 27 480 37 576 42.7C672 48 768 48 864 42.7C960 37 1056 27 1152 24C1248 21 1344 27 1392 29.3L1440 32V96H0Z"],
  curve: ["M0 0C240 84 480 96 720 64C960 32 1200 16 1440 64V96H0Z"],
  tilt: ["M0 60L1440 0V96H0Z"],
  asymmetric: ["M0 76C220 30 410 21 640 48C910 80 1110 75 1440 8V96H0Z"],
  layeredWave: [
    "M0 46C180 84 360 84 540 48C720 12 900 12 1080 48C1260 84 1380 70 1440 54V96H0Z",
    "M0 66C220 28 430 38 630 68C850 100 1060 76 1230 48C1320 33 1390 38 1440 48V96H0Z",
  ],
} as const;

type ShapeDividerProps = {
  position?: "top" | "bottom";
  variant?: keyof typeof shapes;
  fill?: string;
  className?: string;
};

export function ShapeDivider({
  position = "bottom",
  variant = "wave",
  fill = "#ffffff",
  className,
}: ShapeDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 h-12 overflow-hidden leading-none sm:h-16 lg:h-24",
        position === "top" ? "top-0 -translate-y-px rotate-180" : "bottom-0 translate-y-px",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block h-full w-full"
        focusable="false"
      >
        {shapes[variant].map((path, index) => (
          <path
            key={path}
            d={path}
            fill={fill}
            fillOpacity={variant === "layeredWave" && index === 0 ? 0.45 : 1}
          />
        ))}
      </svg>
    </div>
  );
}
