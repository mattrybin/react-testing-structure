export const softAssert = (condition: () => any | boolean, message?: string): void => {
  try {
    if (typeof condition === "function") {
      condition()
    } else {
      if (!condition) {
        throw new Error(message)
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      console.error("Hello Sentry or some other error reporting service: ", message)
    } else {
      throw error
    }
  }
}
