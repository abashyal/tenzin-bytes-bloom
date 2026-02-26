import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const pins = [
  { name: 'USA',       coords: [-95.7, 37.1] as [number, number] },
  { name: 'Japan',     coords: [139.7, 35.7] as [number, number] },
  { name: 'Cambodia',  coords: [104.9, 12.6] as [number, number] },
  { name: 'Bhutan',    coords: [90.4,  27.5] as [number, number] },
  { name: 'India',     coords: [78.9,  20.6] as [number, number] },
  { name: 'Australia', coords: [133.8, -25.3] as [number, number] },
];

const WorldMapCard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mb-2">
        Places Visited
      </div>
      <div className="flex-1 relative">
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
                  fill="#3a4232"
                  stroke="#2a3022"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#4a5240' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
          {pins.map(({ name, coords }) => (
            <Marker key={name} coordinates={coords}>
              <circle r={4} fill="#8b2535" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y={-8}
                style={{ fontSize: '6px', fill: '#e2ddd2', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMapCard;
