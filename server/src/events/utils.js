const convertDegreesToRadians = degrees => degrees * (Math.PI / 180)

const getEarthRadius = () => 6371

export const getDistance = (origin, destination) => {
  const { latitude: lat1, longitude: lon1 } = origin
  const { latitude: lat2, longitude: lon2 } = destination

  const dLatRad = convertDegreesToRadians(lat2 - lat1)
  const dLonRad = convertDegreesToRadians(lon2 - lon1)

  const lat1Rad = convertDegreesToRadians(lat1)
  const lat2Rad = convertDegreesToRadians(lat2)

  const a = (Math.sin(dLatRad / 2) * Math.sin(dLatRad / 2)) + (Math.sin(dLonRad / 2) * Math.sin(dLonRad / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad))

  return getEarthRadius() * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export default { }
