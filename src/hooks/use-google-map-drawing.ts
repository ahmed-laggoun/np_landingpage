import { useEffect, useRef, useState } from 'react';
import { Coordinate, UseGoogleMapDrawingProps } from '@/lib/models';




export function useGoogleMapDrawing({
    isOpen,
    apiKey,
    onBoundaryChange,
    defaultCenter = { lat: 24.7237496, lng: 46.1929255 },
    defaultZoom = 8,
}: UseGoogleMapDrawingProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const googleMapInstance = useRef<google.maps.Map | null>(null);
    const currentPolygon = useRef<google.maps.Polygon | null>(null);

    // 1. Dynamically Load Google Maps API Script once
    useEffect(() => {
        if (window.google) {
            setMapLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing,geometry&v=3.64`;
        script.async = true;
        script.defer = true;
        script.onload = () => setMapLoaded(true);
        document.head.appendChild(script);

        return () => {
            // Clean up script reference if needed on unmount
        };
    }, [apiKey]);

    // 2. Initialize Map & Drawing Manager when modal view opens
    useEffect(() => {
        if (!isOpen || !mapLoaded || !mapRef.current) return;

        // Initialize Map
        const map = new google.maps.Map(mapRef.current, {
            center: defaultCenter,
            zoom: defaultZoom,
            mapTypeControl: false,
            streetViewControl: false,
        });
        googleMapInstance.current = map;

        // Configure Drawing Options
        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [google.maps.drawing.OverlayType.POLYGON],
            },
            polygonOptions: {
                fillColor: '#3b82f6',
                fillOpacity: 0.3,
                strokeColor: '#2563eb',
                strokeWeight: 2,
                clickable: true,
                editable: true,
                draggable: true,
            },
        });
        drawingManager.setMap(map);

        // Bind Drawing Actions
        google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon: google.maps.Polygon) => {
            if (currentPolygon.current) {
                currentPolygon.current.setMap(null);
            }
            currentPolygon.current = polygon;
            drawingManager.setDrawingMode(null); // Return to navigation cursor

            const updateCoordinates = () => {
                const path = polygon.getPath();
                const coords: Coordinate[] = [];
                for (let i = 0; i < path.getLength(); i++) {
                    const latLng = path.getAt(i);
                    coords.push({ lat: latLng.lat(), lng: latLng.lng() });
                }
                onBoundaryChange(coords);
            };

            updateCoordinates();

            // Track any real-time adjustments if user drags vertices
            const path = polygon.getPath();
            google.maps.event.addListener(path, 'set_at', updateCoordinates);
            google.maps.event.addListener(path, 'insert_at', updateCoordinates);
        });

        // Cleanup instance on modal close
        return () => {
            if (currentPolygon.current) {
                currentPolygon.current.setMap(null);
                currentPolygon.current = null;
            }
            googleMapInstance.current = null;
        };
    }, [isOpen, mapLoaded]);

    return {
        mapRef,
        mapLoaded,
    };
}
