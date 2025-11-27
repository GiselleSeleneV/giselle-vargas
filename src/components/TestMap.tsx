"use client";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function TestMap() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    if (!isLoaded) return <p>Cargando...</p>;

    return (
        <GoogleMap
            mapContainerStyle={{ width: "100%", height: "500px" }}
            center={{ lat: 4.710989, lng: -74.07209 }}
            zoom={12}
        />
    );
}
