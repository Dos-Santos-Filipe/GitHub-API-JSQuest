import { baseURL, eventsQuantity } from "../variables.js";

async function getEvents(userName) {
  const response = await fetch(
    `${baseURL}/${userName}/events?per_page=${eventsQuantity}`
  );
  return await response.json();
}

export { getEvents };
