export function requiredMessage(title: string) {
  return `Поле ${title && `"${title}"`} обязательно для заполнения`
}
