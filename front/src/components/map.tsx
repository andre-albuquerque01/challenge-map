'use client'
import type { LatLngExpression } from 'leaflet'
import L from 'leaflet'
import { MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MapsGeoJSON = ({ geoJsonData }: { geoJsonData: any }) => {
  const icon = L.icon({ iconUrl: '/images/marker-icon.png' })

  if (
    !geoJsonData ||
    !geoJsonData.geometry ||
    !geoJsonData.geometry.coordinates
  ) {
    return <p>No GeoJSON data available</p>
  }

  const firstCoordinates = geoJsonData.geometry.coordinates[0][0]

  if (!firstCoordinates || firstCoordinates.length < 2) {
    return <p>Invalid GeoJSON data</p>
  }

  const [longitude, latitude] = firstCoordinates
  const leafletCoordinates: LatLngExpression = [latitude, longitude]

  return (
    <div className="w-full">
      <MapContainer
        className="h-[480px] w-[90%]"
        zoom={19}
        // scrollWheelZoom={true}
        center={leafletCoordinates}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={leafletCoordinates} icon={icon}>
          <Popup>Início da Rota</Popup>
        </Marker>
        <GeoJSON data={geoJsonData} />
      </MapContainer>
    </div>
  )
}

export default MapsGeoJSON
