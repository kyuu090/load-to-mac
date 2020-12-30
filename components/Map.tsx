import GoogleMapReact from 'google-map-react'

export default function Create({ lat, lng }: {lat: number, lng: number}) {
  const defaultLatLng = { lat, lng }

  const key: string = process.env.MAPS_API_KEY as string
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key }} defaultCenter={defaultLatLng} defaultZoom={16} />
    </div>
  )
}
