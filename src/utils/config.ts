export function checkCurrentEnvironment(): string {
  let mongoURL = process.env.MONGODB_LOCAL_URL_CONNECTION; 

  if (process.env.NODE_ENV === "production") {
    mongoURL = process.env.MONGODB_PRODUCTION_URL_CONNECTION; 
  }

  return `${mongoURL}`;
}