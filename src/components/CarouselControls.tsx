import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselControls({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <div
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-25 w-12 h-12 
        hover:bg-gray-200 backdrop-blur-sm rounded-full flex items-center justify-center 
        bg-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </div>

      <div
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-25 w-12 h-12 
        hover:bg-gray-200 backdrop-blur-sm rounded-full flex items-center justify-center 
        bg-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-slate-800" />
      </div>
    </div>
  );
}
