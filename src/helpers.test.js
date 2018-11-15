import { composeValidators, validationError } from './helpers';

describe('Form helpers', () => {
  describe('Compose validators helper', () => {
    it('should return undefined when no validators given', () => {
      expect(composeValidators()('foo')).toEqual(undefined);
    });

    it('should not return validation error', () => {
      const firstValidator = value => value === 'foo' ? undefined : 'First validator message';
      const secondValidator = value => value.length === 3 ? undefined : 'Second validator message';
      expect(composeValidators(firstValidator, secondValidator)('foo')).toBeUndefined();
    });

    it('should return first validation error from arguments', () => {
      const expectedError = 'First validator message';
      const sucessfullValidator = () => undefined;
      const firstFailingValidator = value => value !== 'foo' ? expectedError : undefined;
      const secondFailingValidator = value => value !== 'foo' ? 'Second validator message' : undefined;
      expect(composeValidators(sucessfullValidator, firstFailingValidator, secondFailingValidator)('not foo')).toEqual(expectedError);
    });

    it('should not run arguments that are not functions', () => {
      const failingValidator = () => 'Foo';
      const nonsense = { foo: 'bar' };
      expect(composeValidators(nonsense, failingValidator)('foo')).toEqual('Foo');
    });
  });

  describe('Validation error helper', () => {
    let meta;
    beforeEach(() => {
      meta = {
        error: undefined,
        touched: false
      };
    });

    it('should not return validation error message', () => {
      expect(validationError(meta, false)).toBeFalsy();
    });

    it('should not return validation error message when validate on mount is set', () => {
      expect(validationError(meta, true)).toBeFalsy();
    });

    it('should not return validation error message if the field is not touched', () => {
      expect(validationError({ ...meta, error: 'Foo'  }, false)).toBeFalsy();
    });

    it('should return validation error message if the field is not touched and validate on mount is set', () => {
      expect(validationError({ ...meta, error: 'Foo'  }, true)).toEqual('Foo');
    });

    it('should return validation error message if the field is touched', () => {
      expect(validationError({ ...meta, error: 'Foo', touched: true  }, false)).toEqual('Foo');
    });
  });
});
