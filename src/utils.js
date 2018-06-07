export const slugify = text => '/' + text.toString().toLowerCase() /* eslint-disable */
  .replace(/\s+/g, '-')           // Replace spaces with -
  .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '')             // Trim - from start of text
  .replace(/-+$/, '');            // Trim - from end of text

export const randomInt = (max, min = 0) => Math.floor(Math.random() * (max - min +1)) + min;
