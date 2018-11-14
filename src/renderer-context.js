import { createContext } from 'react';
import { Col, Row, FormGroup, Button, ButtonGroup, Icon } from 'patternfly-react';

const ComponentType = createContext('');

export default ComponentType;

const pf3Config = {
  Col,
  Row,
  FormGroup,
  Button,
  ButtonGroup,
  Icon
}

export const configureContext = (formType, customComponents = {}) => {
    return {
      formType: formType,
      commonComponents: {
        ...pf3Config
      }
    }
}
