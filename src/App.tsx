import React, { useState } from 'react';
import { FC } from 'react';
import Button from '../Button';

const Box = React.lazy(() => import('../Box'));
const Input = React.lazy(() => import('../Input'));

export const App: FC<{ name: string }> = ({ name }) => {
  const [state, setState] = useState({
    name: 'Adrian',
    email: '',
    type: '',
    showRow: false,
  });

  const events = {
    name: {
      onChange: (e) =>
        setState({
          ...state,
          name: e.currentTarget.value,
        }),
    },
    email: {
      onChange: (e) =>
        setState({
          ...state,
          email: e.currentTarget.value,
          name: 'Ok',
        }),
    },
    submit: {
      onClick: () =>
        setState({
          ...state,
          showRow: !state.showRow,
        }),
    },
  };

  return RenderComponentBuilder(ComponentSchema(state, events));
};

const ComponentSchema = (state, events) => ({
  header: {
    component: () => <h1>Título Componente</h1>,
  },
  row0: {
    component: Box,
    props: {
      children: 'HOLA MUNDO',
    },
  },
  row1: {
    component: Box,
    children: {
      name: {
        component: Input,
        props: {
          id: '1',
          value: state.name,
          ...events.name,
        },
      },
      email: {
        component: Input,
        props: {
          id: '2',
          value: state.email,
          ...events.email,
        },
      },
    },
  },
  row2: {
    display: state.showRow,
    component: Box,
    children: {
      name2: {
        component: Input,
        props: {
          id: 'r2Name',
          value: state.name,
          ...events.name,
        },
      },
      email2: {
        component: Input,
        props: {
          id: 'r2Email',
          value: state.email,
          ...events.email,
        },
      },
    },
  },
  submit: {
    component: Button,
    props: {
      children: 'Hola mundo',
      ...events.submit,
    },
  },
});

const RenderComponentBuilder = (ComponentSchema) =>
  Object.keys(ComponentSchema).map((key) => {
    const item = ComponentSchema[key];
    if (item.display === false) return null;
    const Component = item.component;
    const { children, ...props } = item.props ?? {};
    if (item.children)
      return (
        <Component {...props}>
          {RenderComponentBuilder(item.children)}
        </Component>
      );
    return <Component {...props}>{children}</Component>;
  });
