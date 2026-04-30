const publishDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const longDateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatPublishDate(date) {
  return publishDateFormatter.format(date);
}

export function formatLongDate(date) {
  return longDateFormatter.format(date);
}
