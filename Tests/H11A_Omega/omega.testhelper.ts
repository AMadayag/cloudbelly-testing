import axios from "axios";

const API_URL = 'https://a683sqnr5m.execute-api.ap-southeast-2.amazonaws.com/';

// GET /data - weather station
export async function getDataWeatherStation(
  location: string,
  state: string,
  type: string,
  dateStart: string,
  dateEnd: string

) {
  try {
    const res = await axios.get(`${API_URL}?type=${type}&dateStart=${dateStart}&dateEnd=${dateEnd}&location=${location}&state=${state}`,
      {
        timeout: 10000,
      }
    )
    return res;
  } catch (error) {
    throw error;
  }
}

// GET /data - lat and long station
export async function getDataCoords(
  lat: string,
  long: string,
  type: string,
  dateStart: string,
  dateEnd: string

) {
  try {
    const res = await axios.get(`${API_URL}?type=${type}&dateStart=${dateStart}&dateEnd=${dateEnd}&&lat=${lat}&lon=${long}.`,
      {
        timeout: 10000,
      }
    )
    return res;
  } catch (error) {
    throw error;
  }
}
