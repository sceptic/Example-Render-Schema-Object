import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import Button from '../Button';
import { RenderComponentsSchema } from './RenderComponentsSchema';

const Box = React.lazy(() => import('../Box'));
const Input = React.lazy(() => import('../Input'));


export const App = () => {
  return <Page />
}

export const Page =  () => {
  const [state, setState] = useState({
    name: 'Adrian',
    email: '',
    type: '',
    showRow: false,
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => setState({
      ...state,
      loading: false,
    }), 1300);
  }, []);

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
    modal: {

    }
  };

  return <>
    {RenderComponentsSchema(ComponentSchema(state, events, {}))}
  </>;
};

const ComponentSchema = (state, events, refs) => ({
  header: {
    component: () => <h1>Título Componente</h1>,
  },
  row0: {
    component: Box,
    props: {
      children: 'HOLA MUNDO',
    },
  },
  loader: {
    show: state.loading,
    component: () => <h3>Cargando...</h3>,
  },
  row1: {
    show: !state.loading,
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
    show: state.showRow,
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
  modals: {
    component: ({children}) => <>{children}</>,
    children: {
      modal1: {
        component: () => "Modal 1"
      }
    }
  }
});


