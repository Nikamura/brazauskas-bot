import { URL } from "url";

export function findUrls(message: string): string[] {
  if (!message) return [];
  const parts = message.split(/\s+/);
  return parts.filter((potentialUrl) => {
    try {
      return new URL(potentialUrl).toString() === potentialUrl;
    } catch (e) {
      return false;
    }
  });
}
