import GoogleMapReact from 'google-map-react';

export default function Create() {
    const defaultLatLng = {
        lat: 35.7022589,
        lng: 139.7744733,
    };

    const key: any = process.env.MAPS_API_KEY
    return (
        <div style={{ height: '300px', width: '300px' }}>
            <GoogleMapReact
                bootstrapURLKeys={ key }
                defaultCenter={defaultLatLng}
                defaultZoom={16}
            />
        </div>
    );
}