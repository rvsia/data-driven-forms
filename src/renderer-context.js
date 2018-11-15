import React, { createContext } from 'react';
import { Col, Row, FormGroup, Button, ButtonGroup, Icon, HelpBlock } from 'patternfly-react';
import { Button as Pf4Button, Grid, GridItem, ActionGroup, ToolbarGroup, TextContent, Text, TextVariants } from '@patternfly/react-core';
import { CloseIcon, PlusIcon} from '@patternfly/react-icons'

const ComponentType = createContext('');

export default ComponentType;

const pf3Config = {
  Col,
  Row,
  FormGroup,
  Button,
  ButtonGroup,
  Icon,
  HelpBlock
}

const mapPf4icons = name => ({
  close: props => <CloseIcon {...props}/>,
  plus: props => <PlusIcon {...props}/>
})[name]

const pf4Config = {
  Button: ({ bsStyle, children, ...rest }) => <Pf4Button {...rest} variant={bsStyle || rest.variant}>{children}</Pf4Button>,
  Col: ({ children, xs, md, ...rest }) => <GridItem span={xs || md}>{children}</GridItem>,
  FormGroup: ({children, ...props}) => <ActionGroup>{children}</ActionGroup>,
  ButtonGroup: ({ children, ...props }) => <ToolbarGroup>{children}</ToolbarGroup>,
  Row: ({ children }) => <Grid>{children}</Grid>,
  Icon: ({ name }) => mapPf4icons(name)(),
  HelpBlock: ({ children }) => <TextContent><Text component={ TextVariants.p }>{children}</Text></TextContent>
}

const configMapper = formType => ({
  pf3: pf3Config,
  pf4: pf4Config
})[formType]

export const configureContext = (formType, customComponents = {}) => {
    return {
      formType: formType,
      commonComponents: {
        ...(configMapper(formType)),
        ...customComponents
      }
    }
}
