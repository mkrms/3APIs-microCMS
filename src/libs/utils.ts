export const toDate = (dateInfo: Date) => {
  const year = dateInfo.getFullYear()
  const month = ('00' + dateInfo.getMonth()).slice(-2)
  const date = ('00' + dateInfo.getDate()).slice(-2)

  return (year + '/' + month + '/' + date).toString()
}