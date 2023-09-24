import Box from "./Box";
import Button from "./Button";
import Input from "./Input";

export const PageSchema = (state, events, refs) => ({
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


