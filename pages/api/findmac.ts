import type { NextApiRequest, NextApiResponse } from 'next'
import findMac from '../../lib/findMac'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lat = Number(req.query.lat)
  const lng = Number(req.query.lng)
  const radius = 1500
  const resp = await findMac(lat, lng, radius, process.env.NEXT_PUBLIC_MAPS_API_KEY as string)
  // console.log("resp: " + resp.results)
  console.log("resp: " + resp)

  res.status(200).json(resp)
}