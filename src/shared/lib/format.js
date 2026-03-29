/**
 * Shared formatting utilities
 */

/**
 * Format date to Russian locale
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date string
 */
export function formatDateRu(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Strip HTML tags from string
 * @param {string} html - HTML string
 * @returns {string} - Plain text
 */
export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '')
}

/**
 * Truncate string to specified length
 * @param {string} str - String to truncate
 * @param {number} length - Max length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} - Truncated string
 */
export function truncate(str, length = 100, suffix = '...') {
  if (!str) return ''
  const plainText = stripHtml(str)
  if (plainText.length <= length) return plainText
  return plainText.slice(0, length) + suffix
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone
 */
export function formatPhone(phone) {
  if (!phone) return ''
  // Simple formatting for Belarusian numbers
  return phone.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4')
}
