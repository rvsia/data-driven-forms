import { createContext } from 'react';
import { Col, Row } from 'patternfly-react';

const ComponentType = createContext('');

export default ComponentType;

const pf3Config = {
  Col: Col,
  Row: Row
}

export const configureContext = (formType, customComponents = {}) => {
    return {
      formType: formType,
      commonComponents: {
        ...pf3Config
      }
    }
}
