import miqParse from './miqParser';
import inputJSON from '../../demo-schemas/manage-iq-schemas/input';
import outputJSON, { defaultValues } from '../../demo-schemas/manage-iq-schemas/output';

describe('miqParser', () => {
  it('Should parse schema and default values correctly ', () => {
    const output = miqParse(inputJSON);
    expect(output.schema).toEqual(outputJSON);
    expect(output.defaultValues).toEqual(defaultValues);
  });
});
