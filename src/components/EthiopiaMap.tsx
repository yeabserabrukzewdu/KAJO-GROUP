import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function EthiopiaMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    let isMounted = true;

    const map = L.map(mapContainerRef.current, {
      center: [9.145, 40.4896],
      zoom: 5.5,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false
    });

    mapRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18
    }).addTo(map);

    fetch('/ethiopia.geojson')
      .then((res) => res.json())
      .then((geojsonData) => {
        if (!isMounted || !mapRef.current) return;

        const boundaryLayer = L.geoJSON(geojsonData, {
          style: () => ({
            color: '#4A5D23',
            weight: 2.2,
            fillColor: '#A8B986',
            fillOpacity: 0.25
          })
        }).addTo(map);

        map.fitBounds(boundaryLayer.getBounds(), {
          padding: [12, 12]
        });
      })
      .catch((err) => {
        console.error('Failed to load Ethiopia GeoJSON boundary:', err);
      });

    const markersData = [
      {
        name: 'Addis Ababa • Corporate HQ',
        coords: [9.0249, 38.7469] as [number, number],
        description: 'Arada Sub City, Habtegiorgis Street — Kajo Group & illu Import Export HQ, Central Processing & Warehouses'
      },
      {
        name: 'Illubabor & Jimma Origins',
        coords: [7.6739, 36.8344] as [number, number],
        description: 'Owned Coffee Washing Stations, Dry Hulling Facilities & Highland Arabica Sourcing'
      },
      {
        name: 'Humera & Wollega Belt',
        coords: [14.2864, 36.6186] as [number, number],
        description: 'Premier Ethiopian Sesame Seeds, Oilseeds & Pulses Procurement Corridor'
      },
      {
        name: 'Southern Guji & Mineral Belt',
        coords: [5.9333, 38.9] as [number, number],
        description: 'Specialty Coffee Origins & Strategic Lithium Ore Export Corridor'
      }
    ];

    markersData.forEach((marker) => {
      L.circleMarker(marker.coords, {
        radius: 7,
        fillColor: '#2E1E15',
        color: '#FAF7F0',
        weight: 2,
        fillOpacity: 0.95
      })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: 'Plus Jakarta Sans', sans-serif; text-align: left; min-width: 160px;">
            <h4 style="margin: 0; font-weight: 700; color: #2E1E15; font-size: 13px;">${marker.name}</h4>
            <p style="margin: 4px 0 0; color: #634838; font-size: 11px; line-height: 1.35;">${marker.description}</p>
          </div>`
        );
    });

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapContainerRef.current);

    return () => {
      isMounted = false;
      resizeObserver.disconnect();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden border border-[#DCD0BC] shadow-inner">
      <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10 bg-[#F6F1E7]" />

      <div className="absolute bottom-2 left-2 bg-[#FAF7F0]/95 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[9px] font-mono font-bold text-[#2E1E15] z-20 border border-[#DCD0BC] shadow-xs pointer-events-none uppercase tracking-wide">
        Kajo Group • HQ & Origin Hubs
      </div>
    </div>
  );
}
