import * as React from 'react';
import Map from './Map';

interface Props {}
interface State {}
class MapContainer extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Map/>
            </div>
        );
    }
};
export default MapContainer;
