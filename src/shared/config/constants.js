/**
 * Shared Configuration Constants
 */

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 6,
  MAX_PAGE_SIZE: 50,
}

// Social networks
export const SOCIAL_NETWORKS = ['odnoklassniki', 'twitter', 'telegram', 'vk', 'facebook']

// Social network icons mapping
export const SOCIAL_ICONS = {
  facebook: 'bx:bxl-facebook',
  vk: 'bx:bxl-vk',
  twitter: 'mingcute:twitter-fill',
  telegram: 'mingcute:telegram-fill',
  odnoklassniki: 'jam:odnoklassniki',
}

// Social share URLs
export const SOCIAL_SHARE_URLS = {
  odnoklassniki: (url, text) => 
    `https://connect.ok.ru/offer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
  twitter: (url, text) => 
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  telegram: (url, text) => 
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  vk: (url, text) => 
    `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
  facebook: (url) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
}

// Image sizes for optimization
export const IMAGE_SIZES = {
  thumbnail: 'sm:150px md:150px lg:150px',
  card: 'sm:300px md:300px lg:300px',
  preview: 'sm:350px md:350px lg:350px',
  full: 'sm:400px md:400px lg:400px',
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 700,
  tablet: 1024,
  desktop: 1200,
}
