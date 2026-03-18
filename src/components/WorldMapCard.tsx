import { useState, useRef, useCallback } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import bostonImg from '../images/boston.jpg';
import boston2Img from '../images/boston2.jpg';
import punakhaImg from '../images/punakha.jpg';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Numeric ISO IDs from world-atlas for visited countries
const VISITED_IDS = new Set([840, 392, 36, 64, 116, 356, 360]);
const COUNTRY_COLORS: Record<number, string> = {
  840: '#FF8FAB', // USA — manga pink
  392: '#FFD166', // Japan — manga gold
  36:  '#06D6A0', // Australia — manga teal
  64:  '#A78BFA', // Bhutan — manga violet
  116: '#FF9F43', // Cambodia — manga orange
  356: '#FFC2D1', // India — manga rose
  360: '#74C0FC', // Indonesia — manga sky
};

// Ocean stripe: #528AAE primary
const OCEAN_BG = 'repeating-linear-gradient(-45deg, #528AAE 0px, #528AAE 7px, #447090 7px, #447090 14px)';

type MapView = { center: [number, number]; scale: number };
const WORLD: MapView = { center: [20, 10], scale: 110 };

const pins = [
  {
    name: 'Boston, USA',
    coords: [-71.1, 42.4] as [number, number],
    images: [bostonImg, boston2Img],
    caption: 'Was 20, in Boston for an internship — and somehow fell in love with the city.',
    zoom: { center: [-71.1, 42.5] as [number, number], scale: 1400 },
  },
  {
    name: 'Punakha, Bhutan',
    coords: [89.8, 27.5] as [number, number],
    images: [punakhaImg],
    caption: 'Punakha Dzong — the Palace of Great Happiness, constructed in 1637 by the 1st Zhabdrung Rinpoche.',
    zoom: { center: [89.8, 27.6] as [number, number], scale: 1400 },
  },
  {
    name: 'Walla Walla, WA',
    coords: [-118.3, 46.1] as [number, number],
    images: [],
    caption: 'Home for college — Whitman College, surrounded by wheat fields and wineries.',
    zoom: { center: [-118.3, 46.2] as [number, number], scale: 1200 },
  },
  {
    name: 'Nagano, Japan',
    coords: [138.2, 36.6] as [number, number],
    images: [],
    caption: 'High school in the Japanese Alps at UWC ISAK — where my world view cracked wide open.',
    zoom: { center: [138.2, 36.6] as [number, number], scale: 1200 },
  },
  {
    name: 'Phnom Penh, Cambodia',
    coords: [104.9, 11.6] as [number, number],
    images: [],
    caption: 'Taught Python at a code camp in Kirirom — >90% pass rate.',
    zoom: { center: [104.9, 11.6] as [number, number], scale: 1200 },
  },
  {
    name: 'Melbourne, Australia',
    coords: [144.9, -37.8] as [number, number],
    images: [],
    caption: 'A semester at the University of Melbourne — coffee culture and endless sunshine.',
    zoom: { center: [144.9, -37.8] as [number, number], scale: 1100 },
  },
  {
    name: 'India',
    coords: [78.9, 20.6] as [number, number],
    images: [],
    caption: 'Visited India — a collision of color, noise, and warmth unlike anywhere else.',
    zoom: { center: [78.9, 20.6] as [number, number], scale: 700 },
  },
  {
    name: 'Bali, Indonesia',
    coords: [115.2, -8.4] as [number, number],
    images: [],
    caption: 'Bali — temples, rice terraces, and the most welcoming people.',
    zoom: { center: [115.2, -8.4] as [number, number], scale: 1100 },
  },
];

type Pin = typeof pins[number];

const WorldMapCard = () => {
  const [mapView, setMapView] = useState<MapView>(WORLD);
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  // lightboxVisible drives the fixed-position image overlay
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const rafRef = useRef<number | null>(null);
  const viewRef = useRef<MapView>(WORLD);

  const animateTo = useCallback((target: MapView, onDone?: () => void) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = { ...viewRef.current };
    const startTime = performance.now();
    const duration = 750;

    const step = (now: number) => {
      const raw = Math.min((now - startTime) / duration, 1);
      const t = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;

      const next: MapView = {
        center: [
          start.center[0] + (target.center[0] - start.center[0]) * t,
          start.center[1] + (target.center[1] - start.center[1]) * t,
        ],
        scale: start.scale + (target.scale - start.scale) * t,
      };
      viewRef.current = next;
      setMapView({ ...next });

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const handlePinClick = (pin: Pin) => {
    setLightboxVisible(false);
    setImgIndex(0);
    setSelectedPin(pin);
    // Fly to location, then pop the lightbox
    animateTo(pin.zoom, () => {
      requestAnimationFrame(() => requestAnimationFrame(() => setLightboxVisible(true)));
    });
  };

  const handleClose = () => {
    setLightboxVisible(false);
    setTimeout(() => {
      setSelectedPin(null);
      animateTo(WORLD);
    }, 300);
  };

  const prevImg = () =>
    setImgIndex((i) => (i - 1 + (selectedPin?.images.length ?? 1)) % (selectedPin?.images.length ?? 1));
  const nextImg = () =>
    setImgIndex((i) => (i + 1) % (selectedPin?.images.length ?? 1));

  return (
    <>
      {/* ── Map card content ── */}
      <div className="flex flex-col" style={{ minHeight: 260 }}>
        <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-2 shrink-0">
          Places Visited · tap a pin
        </div>

        {/* Map with manga ocean */}
        <div
          className="relative rounded-xl overflow-hidden flex-1"
          style={{ minHeight: 200, background: OCEAN_BG }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: mapView.scale, center: mapView.center }}
            style={{ width: '100%', height: '100%', minHeight: 'inherit' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = Number(geo.id);
                  const isVisited = VISITED_IDS.has(id);
                  const visitedColor = COUNTRY_COLORS[id] ?? '#FF8FAB';
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isVisited ? visitedColor : '#FFFDE7'}
                      stroke="#2D3748"
                      strokeWidth={isVisited ? 1.2 : 0.6}
                      style={{
                        default: { outline: 'none' },
                        hover:   { outline: 'none', filter: 'brightness(0.9)' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {pins.map((pin) => {
              const isSelected = selectedPin?.name === pin.name;
              return (
                <Marker
                  key={pin.name}
                  coordinates={pin.coords}
                  onClick={() => handlePinClick(pin)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    r={isSelected ? 7 : 5}
                    fill={isSelected ? '#e63946' : '#1a1a2e'}
                    stroke="#fff"
                    strokeWidth={isSelected ? 2 : 1.5}
                    style={{ transition: 'r 0.3s ease, fill 0.3s ease' }}
                  />
                  {isSelected && (
                    <circle
                      r={11} fill="none" stroke="#e63946" strokeWidth={1.5} opacity={0.5}
                      style={{ animation: 'ping 1.2s cubic-bezier(0,0,0.2,1) infinite' }}
                    />
                  )}
                  <text
                    textAnchor="middle" y={-10}
                    style={{
                      fontSize: mapView.scale > 400 ? '9px' : '6px',
                      fill: '#1a1a2e',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      pointerEvents: 'none',
                      paintOrder: 'stroke',
                      stroke: 'white',
                      strokeWidth: '2.5px',
                      transition: 'font-size 0.3s ease',
                    }}
                  >
                    {pin.name}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>

          {/* Legend */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-white/85 backdrop-blur-sm rounded-lg px-2 py-1 border border-black/20">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: '#FF8FAB', border: '1px solid #2D3748' }} />
            <span className="text-[8px] font-bold opacity-70">visited</span>
            <div className="w-2.5 h-2.5 rounded-sm ml-1" style={{ background: '#FFFDE7', border: '1px solid #2D3748' }} />
            <span className="text-[8px] font-bold opacity-70">world</span>
          </div>
        </div>
      </div>

      {/* ── Fixed-position lightbox (renders outside grid constraints) ── */}
      {selectedPin && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(3px)',
              opacity: lightboxVisible ? 1 : 0,
              transition: 'opacity 0.25s ease',
              pointerEvents: lightboxVisible ? 'auto' : 'none',
            }}
            onClick={handleClose}
          />

          {/* Panel — slides up from bottom */}
          <div
            style={{
              position: 'fixed',
              bottom: 0, left: '50%',
              transform: `translateX(-50%) translateY(${lightboxVisible ? '0%' : '100%'})`,
              transition: 'transform 0.38s cubic-bezier(0.34, 1.28, 0.64, 1)',
              zIndex: 51,
              width: '100%',
              maxWidth: 480,
              background: 'hsl(45 55% 94%)',
              border: '3px solid #1a1a1a',
              borderBottom: 'none',
              boxShadow: '0 -5px 0 #1a1a1a',
              borderRadius: '16px 16px 0 0',
              padding: '12px 20px 32px',
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center mb-3">
              <div style={{ width: 40, height: 4, borderRadius: 2, background: 'rgba(0,0,0,0.2)' }} />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-comic text-2xl leading-tight" style={{ color: 'hsl(215 45% 12%)' }}>
                  {selectedPin.name}
                </div>
                {selectedPin.caption && (
                  <p className="text-xs opacity-65 leading-snug mt-1 max-w-sm">{selectedPin.caption}</p>
                )}
              </div>
              <button
                onClick={handleClose}
                className="shrink-0 ml-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/15 transition-colors border border-black/20"
                style={{ background: 'rgba(0,0,0,0.08)' }}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Images */}
            {selectedPin.images.length > 0 ? (
              <div className="relative mt-3">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ height: 200, border: '2.5px solid #1a1a1a', boxShadow: '3px 3px 0 #1a1a1a' }}
                >
                  <img
                    key={imgIndex}
                    src={selectedPin.images[imgIndex]}
                    alt={`${selectedPin.name} ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    style={{ animation: 'panel-reveal 0.3s ease forwards' }}
                  />
                </div>
                {selectedPin.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="flex justify-center gap-2 mt-2">
                      {selectedPin.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIndex(i)}
                          style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: i === imgIndex ? '#1a1a1a' : 'rgba(0,0,0,0.2)',
                            border: 'none', cursor: 'pointer', transition: 'background 0.2s',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div
                className="mt-3 flex items-center justify-center text-xs opacity-40"
                style={{ height: 60, border: '2px dashed rgba(0,0,0,0.2)', borderRadius: 12 }}
              >
                No photos yet — coming soon
              </div>
            )}
          </div>
        </>
      )}

      <style>{`
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
      `}</style>
    </>
  );
};

export default WorldMapCard;
