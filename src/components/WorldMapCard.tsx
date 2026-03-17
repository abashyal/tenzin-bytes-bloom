import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const pins = [
  { name: 'Boston',        coords: [-71.1,   42.4]  as [number, number], images: ['src/images/boston.jpg', 'src/images/boston2.jpg'], caption: 'I was 20 and in Boston interning with Dell Technologies when I grew fonder with Boston' },
  { name: 'Washington',    coords: [-120.5,  47.5]  as [number, number], images: [], caption: '' },
  { name: 'Bar Harbor',    coords: [-68.2,   44.4]  as [number, number], images: [], caption: '' },
  { name: 'Los Angeles',   coords: [-118.2,  34.1]  as [number, number], images: [], caption: '' },
  { name: 'Nagano, Japan',         coords: [138.2,   36.6]  as [number, number], images: [], caption: '' },
  { name: 'Kirirom, Cambodia',  coords: [104.9, 11.6] as [number, number], images: [], caption: '' },
  { name: 'Punakha, Bhutan',    coords: [89.8,  27.5] as [number, number], images: ['src/images/punakha.jpg'], caption: 'Punakha Dzong, also known as the "Palace of Great Happiness," is an architectural masterpiece and the current administrative centre of Punakha District. Constructed in 1637 by Ngawang Namgyal, the 1st Zhabdrung Rinpoche, it holds the distinction of being Bhutans second-oldest and second-largest dzong' },
  { name: 'India',     coords: [78.9,  20.6] as [number, number], images: [], caption: '' },
  { name: 'Australia', coords: [133.8, -25.3] as [number, number], images: [], caption: '' },
  { name: 'Indonesia', coords: [115.2, 8.4] as [number, number],  images: [], caption: '' },
];

type Pin = typeof pins[number];

const WorldMapCard = () => {
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);

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
              onClick={() => pin.images.length > 0 && setSelectedPin(pin)}
              style={{ cursor: pin.images.length > 0 ? 'pointer' : 'default' }}
            >
              <circle r={4} fill="#8b2535" stroke="#fff" strokeWidth={1} />
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

      <Dialog open={!!selectedPin} onOpenChange={(open) => !open && setSelectedPin(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedPin?.name}</DialogTitle>
          </DialogHeader>
          {selectedPin?.caption && (
            <p className="text-sm text-muted-foreground">{selectedPin.caption}</p>
          )}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {selectedPin?.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${selectedPin.name} ${i + 1}`}
                className="w-full h-40 object-cover rounded-md"
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorldMapCard;
