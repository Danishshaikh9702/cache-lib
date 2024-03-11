export type StandardResponse = {
    status: string,
    message: string,
    data?: any,
    error?:any,
  }
  export type valueType = Exclude<any, null | undefined>;