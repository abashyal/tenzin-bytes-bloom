import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const pins = [
  {
    name: 'Bhutan',
    flag: '🇧🇹',
    coords: [90.4, 27.5] as [number, number],
    fact: "Bhutan is the only country that measures success by Gross National Happiness. Plastic bags are banned, the country is carbon-negative, and it was doing sustainability before it was cool.",
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    coords: [139.7, 35.7] as [number, number],
    fact: "Japan has over 6,800 islands and experiences around 1,500 earthquakes a year — most too small to feel. There are more vending machines here than people in some countries.",
  },
  {
    name: 'Cambodia',
    flag: '🇰🇭',
    coords: [104.9, 12.6] as [number, number],
    fact: "Angkor Wat is the largest religious monument on Earth — built in the 12th century, it still appears on the Cambodian flag today. The temple complex is larger than the entire city of Paris.",
  },
  {
    name: 'India',
    flag: '🇮🇳',
    coords: [78.9, 20.6] as [number, number],
    fact: "India is the birthplace of zero, chess, and Snakes & Ladders. It has the world's largest vegetarian population and over 1,600 spoken languages.",
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    coords: [133.8, -25.3] as [number, number],
    fact: "Australia is wider than the moon, home to 21 of the world's 25 most venomous snakes, and has a feral camel population in the hundreds of thousands roaming the outback.",
  },
  {
    name: 'USA',
    flag: '🇺🇸',
    coords: [-95.7, 37.1] as [number, number],
    fact: "The US has no official language at the federal level — English just won by popularity. It also has more public libraries than McDonald's restaurants.",
  },
];

type Pin = typeof pins[number];

const WorldMapCard = () => {
  const [selected, setSelected] = useState<Pin | null>(null);

  return (
    <div className="flex flex-col h-full relative">
      <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-2">
        Places Visited · tap a pin
      </div>

      {/* Map */}
      <div className="flex-1 relative min-h-[180px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 110, center: [20, 10] }}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="hsl(35, 14%, 76%)"
                  stroke="hsl(35, 12%, 68%)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: 'hsl(148, 18%, 72%)' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {pins.map((pin) => (
            <Marker
              key={pin.name}
              coordinates={pin.coords}
              onClick={() => setSelected(selected?.name === pin.name ? null : pin)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                r={selected?.name === pin.name ? 6 : 4}
                fill={selected?.name === pin.name ? 'hsl(12, 48%, 48%)' : 'hsl(12, 42%, 58%)'}
                stroke="hsl(42, 32%, 90%)"
                strokeWidth={1.5}
                style={{ transition: 'all 0.2s ease' }}
              />
              <text
                textAnchor="middle"
                y={-9}
                style={{
                  fontSize: '6px',
                  fill: 'hsl(25, 18%, 18%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  pointerEvents: 'none',
                }}
              >
                {pin.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Fun fact panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          selected ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        {selected && (
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/8 border border-black/10">
            <span className="text-2xl leading-none mt-0.5 shrink-0">{selected.flag}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold mb-1">{selected.name}</div>
              <p className="text-xs opacity-65 leading-relaxed">{selected.fact}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-xs opacity-30 hover:opacity-70 transition-opacity shrink-0 mt-0.5"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMapCard;
