import { parseISO, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatRelativeTime(date: string): string {
  const targetDate = parseISO(date)

  const distanceDate = formatDistanceToNowStrict(targetDate, {
    locale: ptBR,
    addSuffix: true,
  })

  const formatCapitalizeFirstLetter =
    distanceDate.charAt(0).toUpperCase() + distanceDate.slice(1).toLowerCase()

  return formatCapitalizeFirstLetter
}
