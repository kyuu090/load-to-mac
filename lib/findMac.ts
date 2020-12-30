export default async function findMac(lat: number, lng: number, radius: number, apikey: string) {
    const preEncodedUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=restaurant&keyword=マクドナルド&key=${apikey}`
    const url = encodeURI(preEncodedUrl)
    
    return await fetch(url,
     {
       mode: "cors"
     })
     .then(res => res.text())
     .then(body => body);
}