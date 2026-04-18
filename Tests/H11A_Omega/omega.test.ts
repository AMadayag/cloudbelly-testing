import { getDataCoords, getDataWeatherStation } from "./omega.testhelper";

// three day range so that it's not too much data
const dateStart = '2026-01-02'
const dateEnd = '2026-01-05'

// test for getData
describe('getData', () => {
  test('successful getData, weather station, temperature', async () => {
    const res = await getDataCoords(
      'sydney_(observatory_hill)',
      'NSW',
      'temperature',
      dateStart,
      dateEnd
    );
    expect(res.status).toBe(200);
    expect(res.data.invoice).toStrictEqual(expect.any(String));
  });

  // test('missing fields', async () => {
  //   try {
  //     await createInvoiceReq(MISSING_FIELDS, token);
  //     fail('Did not throw expected error');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       const axiosError = error as any;
  //       expect(axiosError.response.status).toBe(400);
  //       expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
  //       expect(axiosError.response.data.error).toStrictEqual(expect.any(String));
  //     } else {
  //       throw error;
  //     }
  //   }
  // });

  // test('invalid token', async () => {
  //   try {
  //     await createInvoiceReq(MOCK_INVOICE, 'invalidToken');
  //     fail('Did not throw expected error');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       const axiosError = error as any;
  //       expect(axiosError.response.status).toBe(401);
  //       expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
  //       expect(axiosError.response.data.message).toStrictEqual(expect.any(String));
  //     } else {
  //       throw error;
  //     }
  //   }
  // });
  
});
