import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function HmongGalleryPage() {
  const images = await getImages('hmong-memorials');

  return <Gallery galleryImages={images} galleryName="Hmong Memorials" />;
}
