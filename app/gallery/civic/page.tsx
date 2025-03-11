import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function CvicGalleryPage() {
  const images = await getImages('civic');

  return <Gallery galleryImages={images} galleryName="Civic Memorials" />;
}
