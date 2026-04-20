import { getDataCoords, getDataWeatherStation } from "./omega.testhelper";

// three day range so that it's not too much data
const dateStart = '2026-01-02'
const dateEnd = '2026-01-05'

// test for getData
describe('getData', () => {
  test('successful getData, coords, temperature', async () => {
    const res = await getDataCoords(
      '-33',
      '151',
      'max_temperature',
      dateStart,
      dateEnd
    );
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.events)).toBe(true)
  });

  test('successful getData, weather station, temperature', async () => {
    const res = await getDataWeatherStation(
      'sydney_(observatory_hill)',
      'nsw',
      'max_temperature',
      dateStart,
      dateEnd
    );
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.events)).toBe(true)
  });

  test('successful getData, coords, rain', async () => {
    const res = await getDataCoords(
      '-33',
      '151',
      'rain',
      dateStart,
      dateEnd
    );
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.events)).toBe(true)
  });

  test('successful getData, weather station, rain', async () => {
    const res = await getDataWeatherStation(
      'sydney_(observatory_hill)',
      'nsw',
      'rain',
      dateStart,
      dateEnd
    );
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.events)).toBe(true)
  });

  test('invalid data type', async () => {
    try {
      await getDataCoords(
        '-33',
        '151',
        'lol',
        dateStart,
        dateEnd
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });

  test('invalid coords', async () => {
    try {
      await getDataCoords(
        'A',
        'B',
        'max_temperature',
        dateStart,
        dateEnd
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });

  test('invalid dates', async () => {
    try {
      await getDataCoords(
        '-33',
        '151',
        'max_temperature',
        'hkj',
        'jkl'
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });

  test('invalid weather station', async () => {
    try {
      await getDataWeatherStation(
        'sydney_(wahhhhh)',
        'nsw',
        'max_temperature',
        dateStart,
        dateEnd
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });
});
