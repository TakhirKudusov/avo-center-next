import { HttpStatus, NotificationError } from "../enums"

export const getErrorMassage = (status: HttpStatus) => {
  return NotificationError[HttpStatus[status]];
}