import { cloneDeep, cloneObject, isEmpty } from '.';

describe('utils', () => {
  describe('misc', () => {
    it('cloneDeep function', () => {
      const obj = {
        '1': 1,
        '2': 2,
      };
      const result = {
        '1': 1,
        '2': 2,
      };
      expect(cloneDeep(obj)).toEqual(result);
    });

    it('cloneObject function', () => {
      const obj = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
      };
      const result = {
        '1': 1,
        '2': 2,
        '3': 3,
      };
      expect(cloneObject(obj, '1', '2', '3')).toEqual(result);
    });

    it("isEmpty function object isn't empty", () => {
      const obj = {
        '1': 1,
        '2': 2,
      };

      expect(isEmpty(obj)).toEqual(false);
    });

    it('isEmpty({})', () => {
      const obj = {};

      expect(isEmpty(obj)).toEqual(true);
    });

    it('isEmpty([1, 2])', () => {
      const obj = [1, 2];

      expect(isEmpty(obj)).toEqual(false);
    });

    it('isEmpty(null)', () => {
      // @ts-ignore
      expect(isEmpty(null)).toEqual(false);
    });

    it('isEmpty(NaN)', () => {
      // @ts-ignore
      expect(isEmpty(NaN)).toEqual(false);
    });

    it('isEmpty(0)', () => {
      // @ts-ignore
      expect(isEmpty(0)).toEqual(false);
    });

    it('isEmpty(false)', () => {
      // @ts-ignore
      expect(isEmpty(false)).toEqual(false);
    });

    it("isEmpty('')", () => {
      // @ts-ignore
      expect(isEmpty('')).toEqual(false);
    });
  });
});
