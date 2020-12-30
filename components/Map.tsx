import GoogleMapReact from 'google-map-react'

const key: string = process.env.NEXT_PUBLIC_MAPS_API_KEY as string

export default function Create({ lat, lng }: {lat: number, lng: number}) {
  const defaultLatLng = { lat, lng }

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key }} defaultCenter={defaultLatLng} defaultZoom={16} />
    </div>
  )
}
