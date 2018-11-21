import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Button, ButtonGroup, Icon, HelpBlock } from 'patternfly-react';
import { Button as Pf4Button, Grid, GridItem, ActionGroup, ToolbarGroup, TextContent, Text, TextVariants } from '@patternfly/react-core';
import { CloseIcon, PlusIcon } from '@patternfly/react-icons';

const ComponentType = createContext('');

export default ComponentType;

const pf3Config = {
  Col,
  Row,
  FormGroup,
  Button,
  ButtonGroup,
  Icon,
  HelpBlock,
};

const mapPf4icons = name => ({
  close: props => <CloseIcon { ...props }/>,
  plus: props => <PlusIcon { ...props }/>,
})[name];

const ColPf4 = ({ children, xs, md }) => <GridItem span={ xs || md }>{ children }</GridItem>;

ColPf4.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const FormGroupPf4 = ({ children }) => <ActionGroup>{ children }</ActionGroup>;

FormGroupPf4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const ButtonGroupPf4 = ({ children }) => <ToolbarGroup>{ children }</ToolbarGroup>;

ButtonGroupPf4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const RowPf4 = ({ children }) => <Grid>{ children }</Grid>;

RowPf4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const HelpBlockPf4 = ({ children }) => <TextContent><Text component={ TextVariants.p }>{ children }</Text></TextContent>;

HelpBlockPf4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const pf4Config = {
  Button: ({ bsStyle, children, ...rest }) => <Pf4Button { ...rest } variant={ bsStyle || rest.variant }>{ children }</Pf4Button>,
  Col: ColPf4,
  FormGroup: FormGroupPf4,
  ButtonGroup: ButtonGroupPf4,
  Row: RowPf4,
  Icon: ({ name }) => mapPf4icons(name)(),
  HelpBlock: HelpBlockPf4,
};

const configMapper = formType => ({
  pf3: pf3Config,
  pf4: pf4Config,
})[formType];

export const configureContext = ({ formType, customComponents = {}, customComponentMapper = () => undefined }) => {
  return {
    formType,
    commonComponents: {
      ...(configMapper(formType)),
      ...customComponents,
    },
    componentMapper: customComponentMapper,
  };
};
