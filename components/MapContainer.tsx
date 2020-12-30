import * as React from 'react';
import Map from './Map';
import GoogleMapReact from 'google-map-react'
import findMac from '../lib/findMac'

interface Props {}
interface State {
    lat: number,
    lng: number
}
class MapContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            lat: -1,
            lng: -1
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const ret = await fetch(`http://localhost:3000/api/findmac?lat=${position.coords.latitude}&lng=${position.coords.longitude}`, { mode: "cors"})
                    // const macList: Array<Object> = ret.results;
                    
                    this.setState({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                },
                error => {
                    switch(error.code) {
                        case 1: // PERMISSION_DENIED
                          alert("位置情報の利用が許可されていません");
                          break;
                        case 2: // POSITION_UNAVAILABLE
                          alert("現在位置が取得できませんでした");
                          break;
                        case 3: // TIMEOUT
                          alert("タイムアウトになりました");
                          break;
                        default:
                          alert("その他のエラー(エラーコード:"+error.code+")");
                          break;
                      }
                }
            )
        } else {
            alert("この端末では位置情報が取得できません");
        }
        
    }

    render() {
        return <Map lat={this.state.lat} lng={this.state.lng} />
    }
};
export default MapContainer;
