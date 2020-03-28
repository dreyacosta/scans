import ScanDataBuilder from '../../../src/domain/ScanDataBuilder';
import GetScansPresenter from '../../../src/presentation/GetScansPresenter';
import ScanPresentationSerializer from '../../../src/presentation/ScanPresenterSerializer';

describe('GetScansPresenter', () => {
  test('returns scans for the view', async () => {
    const scans = [
      new ScanDataBuilder().build(),
      new ScanDataBuilder().build(),
    ];
    const getScans = jest.fn().mockReturnValue(scans);
    const getScansPresenter = GetScansPresenter({ getScans });

    const scansViewResult = await getScansPresenter();

    expect(scansViewResult).toEqual({
      props: {
        scans: scans.map(ScanPresentationSerializer.toJSON),
      }
    });
  });
});