import { cn } from "@/lib/cn";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className, flip }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-none text-sand",
        flip && "-scale-y-100",
        className,
      )}
      aria-hidden
    >
      <svg
        className={cn(
          "relative block w-[200%] text-sand [&>path]:fill-current",
          "wave-layer-1",
        )}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path d="M0 40 Q150 70 300 45 T600 42 T900 52 T1200 35 V80 H0 Z" />
      </svg>
      <svg
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 block w-[200%] opacity-85 text-wave [&>path]:fill-current",
          "wave-layer-2",
        )}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path d="M0 52 Q175 28 340 54 T690 42 T970 62 T1200 48 V80 H0 Z" />
      </svg>
      <svg
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 block w-[200%] opacity-60 text-chalk [&>path]:fill-current",
          "wave-layer-3",
        )}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path d="M0 60 Q200 32 430 54 T790 42 T1180 38 L1200 35 V80 H0 Z" />
      </svg>
    </div>
  );
}
