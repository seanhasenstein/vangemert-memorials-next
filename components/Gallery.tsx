'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

import { slugify } from '../utils';

import useLightbox from '../hooks/useLightbox';

import Lightbox from './Lightbox';

import { ImageMetadata } from '../types';

const navLinks = [
  {
    id: 1,
    slug: 'single-memorials',
    label: 'Single Memorials',
  },
  {
    id: 2,
    slug: 'double-memorials',
    label: 'Double Memorials',
  },
  {
    id: 3,
    slug: 'multiple-memorials',
    label: 'Multiple Memorials',
  },
  {
    id: 4,
    slug: 'slant-memorials',
    label: 'Slant Memorials',
  },
  {
    id: 5,
    slug: 'hmong-memorials',
    label: 'Hmong Memorials',
  },
  {
    id: 6,
    slug: 'etchings',
    label: 'Etchings',
  },
  {
    id: 7,
    slug: 'benches',
    label: 'Benches',
  },
  {
    id: 8,
    slug: 'civic',
    label: 'Civic',
  },
  {
    id: 9,
    slug: 'granite-colors',
    label: 'Granite Colors',
  },
];

type Props = {
  galleryImages: ImageMetadata[];
  galleryName: string;
};

export default function Gallery({ galleryImages, galleryName }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const galleryProps = useLightbox(galleryImages);
  const { handleClick, ...lightboxProps } = galleryProps;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/gallery/${e.target.value}`);
  };

  return (
    <>
      <GalleryStyles>
        <div className="container main">
          <aside>
            <nav>
              {navLinks.map(({ id, slug, label }) => (
                <Link
                  key={id}
                  href={`/gallery/${slug}`}
                  className={
                    pathname === `/gallery/${slug}` ? 'current-page' : ''
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="gallery">
            <h2>
              <span>{galleryName} Gallery</span>
            </h2>
            <div className="mobile-nav">
              <select
                onChange={handleSelectChange}
                value={slugify(galleryName)}
              >
                {navLinks.map(l => (
                  <option key={l.id} value={l.slug}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            {galleryProps.images.length === 0 ? (
              <div className="empty-message">
                There are currently no photos in this gallery
              </div>
            ) : (
              <div className="grid">
                {galleryProps.images.map((image, index) => (
                  <button
                    key={image.key}
                    onClick={e => handleClick(e, index)}
                    className="grid-item"
                  >
                    <img
                      src={image.url}
                      alt={`${galleryName} photo ${index + 1} of ${
                        galleryProps.images.length
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </GalleryStyles>
      <Lightbox {...lightboxProps} galleryName={galleryName} />
    </>
  );
}

const GalleryStyles = styled.div`
  padding: 5rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 64rem;
    width: 100%;
    display: flex;
    gap: 3rem;
  }

  h2 {
    margin: 0 0 2rem;
    position: relative;
    font-size: 1.25rem;
    text-align: center;
    user-select: none;

    span {
      padding: 0 1.5rem;
      position: relative;
      background-color: #f8fafc;
      z-index: 200;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0.875rem;
      width: 100%;
      height: 1px;
      background-color: #cbd5e1;
      z-index: 10;
    }
  }

  .gallery {
    width: 100%;
  }

  .grid {
    margin: 0 auto;
    max-width: 43rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(8rem, 1fr));
    gap: 0.875rem;
  }

  .grid-item {
    padding: 0;
    position: relative;
    aspect-ratio: 4 / 3;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    border: 5px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0.25);
      transition: box-shadow 200ms ease-in-out;
    }

    &:hover::after {
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
  }

  .empty-message {
    color: #64748b;
  }

  .mobile-nav {
    display: none;
  }

  aside {
    margin: 0.75rem auto 0;
    display: block;
    max-width: 500px;
    width: 32%;

    nav {
      padding: 0;
      margin: 0 1rem 0 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 0.125rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    a {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
      color: #526178;
      letter-spacing: 0.025em;
      border-radius: 1px;
      border-bottom: 1px solid #eef1ee;
      user-select: none;

      &:last-of-type {
        border: none;
      }

      &:hover,
      &.current-page {
        color: #111623;
      }

      &.current-page {
        font-weight: 500;

        &:before {
          content: '';
          position: absolute;
          left: 0px;
          height: 100%;
          width: 0.25rem;
          background-color: #4aa0bd;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    aside {
      display: none;
    }

    .mobile-nav {
      margin: 0 0 2rem;
      display: flex;
      justify-content: center;

      select {
        min-width: 15rem;
      }
    }
  }

  @media (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }

  @media (max-width: 500px) {
    h2 {
      span {
        padding: 0;
        background-color: transparent;
      }

      &::after {
        background-color: transparent;
      }
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.625rem;
    }

    .grid-item {
      border: 3px solid #fff;
    }

    .mobile-nav select {
      width: 100%;
    }
  }
`;
