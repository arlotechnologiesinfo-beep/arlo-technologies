export interface AuthGalleryImage {
  src: string;
  alt: string;
}

/**
 * Square images for the sign-up page gallery, served from /public/images/auth-gallery.
 * Add entries like { src: '/images/auth-gallery/01.jpg', alt: '' } (use 1:1 images, ~800x800).
 * While this list is empty the gallery renders soft gradient tiles instead.
 */
export const authGalleryImages: AuthGalleryImage[] = [];
