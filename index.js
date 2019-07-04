const findMaxIndex = (s, a, b) => {
  const stringIsValid = typeof s === 'string' && s.length
  const isValid = arg => arg != null
  return stringIsValid
    ? Math.max(
        isValid(a) && a.length ? s.lastIndexOf(a) : -1,
        isValid(b) && b.length ? s.lastIndexOf(b) : -1
      )
    : -1
}
