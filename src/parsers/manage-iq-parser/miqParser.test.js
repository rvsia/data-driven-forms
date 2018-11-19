import miqParse from './miqParser';
import inputJSON from '../../demo-schemas/manage-iq-schemas/input';
import outputJSON, {
  defaultValues,
} from '../../demo-schemas/manage-iq-schemas/output';
import { neededAttributes, componentMap } from './constants';

describe('miqParser', () => {
  it('Should parse schema and default values correctly ', () => {
    const output = miqParse(inputJSON, neededAttributes, componentMap);
    expect(output.schema).toEqual(outputJSON);
    expect(output.defaultValues).toEqual(defaultValues);
  });
});
