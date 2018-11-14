import { createContext } from 'react';
import { Col, Row, FormGroup, Button, ButtonGroup } from 'patternfly-react';

const ComponentType = createContext('');

export default ComponentType;

const pf3Config = {
  Col,
  Row,
  FormGroup,
  Button,
  ButtonGroup
}

export const configureContext = (formType, customComponents = {}) => {
    return {
      formType: formType,
      commonComponents: {
        ...pf3Config
      }
    }
}
