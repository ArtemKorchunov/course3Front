export default function getRootUrl() {
  return process.env.REACT_API_URL  || process.env.REACT_APP_API_URL || "http://localhost:3000/";
}
