const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || 'ZE2NC2G44FwB5CTHyEX1yNy0DAwiwvJEI1RogZiOh4XDOGc9HhHFiOii';
const PEXELS_ENDPOINT = 'https://api.pexels.com/v1/search';

const FALLBACKS: Record<string, string> = {
  'luxury modern villa exterior': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
  'modern villa architecture': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  'luxury house exterior': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  'contemporary home design': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  'lakeside modern house': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  'luxury penthouse interior': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  'professional business portrait man': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  'happy woman portrait professional': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  'smiling man portrait business': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  'professional woman headshot': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  'luxury modern architecture building night': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
};

export async function fetchPexelsImage(
  query: string,
  size: 'large' | 'landscape' | 'original' = 'large'
): Promise<string> {
  const cacheKey = `pexels_img_${query.replace(/\s+/g, '_')}`;

  // Check localStorage cache (client-side only)
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        // Cache for 3 days
        if (Date.now() - parsed.timestamp < 3 * 24 * 60 * 60 * 1000) {
          return parsed.url;
        }
      }
    } catch {
      // Silently ignore cache read errors
    }
  }

  try {
    const url = `${PEXELS_ENDPOINT}?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      const imgUrl =
        size === 'landscape' && data.photos[0].src.landscape
          ? data.photos[0].src.landscape
          : data.photos[0].src[size] || data.photos[0].src.large;

      // Write to localStorage cache
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ url: imgUrl, timestamp: Date.now() })
          );
        } catch {
          // Silently ignore cache write errors
        }
      }

      return imgUrl;
    } else {
      throw new Error('No photos returned for query: ' + query);
    }
  } catch {
    // Fallback to curated Unsplash images
    return (
      FALLBACKS[query] ||
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    );
  }
}
