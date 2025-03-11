import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function MultipleGalleryPage() {
  const images = await getImages('multiple-memorials');

  return <Gallery galleryImages={images} galleryName="Multiple Memorials" />;
}
