// Dependencies
import { format } from "date-fns"

/**
 * Format the received date using [date-fns](https://date-fns.org/)
 * that is a lightweight library to format dates
 *
 * @param {String | Date} date - The date to format
 * @param {String} formatter - The way to format the date
 *
 * @returns The string with the formatted date
 */
export const formatDate = (date, formatter = "mm/dd/yyyy") => {
  return format(new Date(date), formatter)
}
