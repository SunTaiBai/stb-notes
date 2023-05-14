import dateFn, { type ConfigType } from 'dayjs'
import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc.js'
import relativeTime from 'dayjs/plugin/relativeTime'

const DATE_TIME_TEMPLATE = 'YYYY-MM-DD HH:mm:ss'
const DATE_TEMPLATE = 'YYYY-MM-DD'
dayjs.extend(utc)
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

/**
 * @description 格式化日期时间
 * @param date 待格式化的日期时间
 * @param format 格式化的方式
 * @returns 格式化后的日期字符串，默认：YYYY-MM-DD HH:mm:ss
 */
function formatDate(date?: ConfigType, format = DATE_TEMPLATE): string {
  return dateFn(date).format(format)
}

/**
 * @description 格式化日期时间
 * @param date 待格式化的日期时间
 * @returns 格式化后的日期字符串
 */
function formatDateTime(date?: ConfigType): string {
  return formatDate(date, DATE_TIME_TEMPLATE)
}

function getDate(date: string | Date | undefined): string | null {
  if (date) {
    const time = dayjs(date instanceof Date ? date : date.trim())
    if (time.isValid()) {
      const currentTime = dayjs(date).utc().local().format('YYYY-MM-DD')
      return currentTime
    }
  }
  return null
}

function getFromNow(date: string | Date): string | null {
  if (date)
    return dayjs(date).utc().local().fromNow()

  return null
}

export { dateFn, formatDate, formatDateTime, getDate, getFromNow }
