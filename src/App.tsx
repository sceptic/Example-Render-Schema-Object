import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import Button from '../Button';
import { PageSchema } from '../PageSchema';
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
    {RenderComponentsSchema(PageSchema(state, events, {}))}
  </>;
};

