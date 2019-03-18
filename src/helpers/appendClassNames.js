export default function(...classNames) {
  return classNames.filter(name => !!name).join(' ').trim()
}
