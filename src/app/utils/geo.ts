import type { Branch } from "../data/branches";

function toRad(d: number) {
  return (d * Math.PI) / 180;
}

/** Great-circle distance in kilometres */
export function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export function findNearestBranchId(
  list: Branch[],
  userLat: number,
  userLng: number
): string | null {
  const withCoords = list.filter((b): b is Branch & { lat: number; lng: number } =>
    b.lat != null && b.lng != null
  );
  if (withCoords.length === 0) return null;
  let bestId = withCoords[0].id;
  let bestD = Infinity;
  for (const b of withCoords) {
    const d = haversineKm(userLat, userLng, b.lat, b.lng);
    if (d < bestD) {
      bestD = d;
      bestId = b.id;
    }
  }
  return bestId;
}
