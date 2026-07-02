import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowLeftRight, Check, Eye } from "lucide-react";
import { BEFORE_AFTER_DATA } from "../data";

export default function BeforeAfterGallery() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_DATA[0].id);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_DATA.find((item) => item.id === activeId) || BEFORE_AFTER_DATA[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3 animate-slide-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green-50 text-brand-green-600 text-xs font-bold tracking-wider uppercase self-center border border-brand-green-100">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-500 animate-sparkle" />
            <span>Proven Transformations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Before & After Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Drag the comparison slider to see the CleanCamp difference. Our meticulous cleaning processes restore original brilliance to every surface.
          </p>
        </div>

        {/* Main Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Selector Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest mb-1 pl-1">
              Select Transformation Area
            </h3>
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {BEFORE_AFTER_DATA.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveId(item.id);
                      setSliderPosition(50); // reset position
                    }}
                    className={`flex flex-col text-left p-5 rounded-3xl transition-all duration-300 border cursor-pointer focus:outline-none ${
                      isActive
                        ? "bg-white border-brand-blue-600 shadow-xl shadow-slate-100/80 ring-2 ring-brand-blue-100"
                        : "bg-slate-50/50 hover:bg-slate-50 border-slate-200/60 shadow-sm"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-max mb-3 ${
                      isActive ? "bg-brand-blue-50 text-brand-blue-700" : "bg-white text-slate-500 border border-slate-200/50"
                    }`}>
                      {item.category}
                    </span>
                    <h4 className="font-display font-bold text-slate-900 text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className={`flex items-center gap-1.5 mt-4 text-xs font-bold transition-colors ${
                      isActive ? "text-brand-blue-600" : "text-slate-400"
                    }`}>
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isActive ? "Viewing Live" : "Click to Inspect"}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Image Slider Showcase */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50/60 p-4 sm:p-6 rounded-[32px] border border-slate-100/80">
              
              {/* Slider Container */}
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-100 shadow-inner"
              >
                {/* AFTER IMAGE (Bottom Layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={activeItem.afterImage}
                    alt="After Cleaning"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Sparkle highlights overlaid on the after side to look glistening */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-brand-blue-600/5 via-transparent to-brand-green-500/5" />
                </div>

                {/* BEFORE IMAGE (Top Layer, Clipped) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 w-full h-full min-w-full">
                    <img
                      src={activeItem.beforeImage}
                      alt="Before Cleaning"
                      className="w-full h-full object-cover filter saturate-50 brightness-75 contrast-90 sepia-[20%] blur-[0.4px]"
                      style={{
                        width: containerRef.current ? containerRef.current.offsetWidth : "100%",
                        height: containerRef.current ? containerRef.current.offsetHeight : "100%"
                      }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark dusty overlay grid pattern */}
                    <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                  </div>
                </div>

                {/* Before/After Badges */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full select-none pointer-events-none tracking-widest">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-brand-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full select-none pointer-events-none tracking-widest">
                  AFTER
                </div>

                {/* Slider bar line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize select-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Handle button */}
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onTouchStart={() => setIsDragging(true)}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-brand-blue-600 shadow-xl border border-slate-200 hover:scale-110 active:scale-95 transition-all select-none focus:outline-none cursor-pointer"
                    style={{ left: "50%" }}
                    aria-label="Drag slider"
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider Caption and instructions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-1">
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-lg flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green-500" />
                    {activeItem.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium mt-1">
                    {activeItem.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-slate-500 text-xs font-bold flex items-center gap-2 bg-white py-2 px-4 rounded-full border border-slate-100 shadow-sm">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-brand-blue-600" />
                  <span>Drag slider to compare</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
