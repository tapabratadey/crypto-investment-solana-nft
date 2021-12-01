import React from 'react';
import RegisterViewModel from './RegisterViewModel';
import RegisterFormView from './RegisterFormView';
import { useHistory } from 'react-router-dom';

interface Props {}

const Register: React.FC<Props> = () => {
  const registerViewModel = new RegisterViewModel();

  return (
    <div className="App">
      <header className="App-header">
        <RegisterFormView
          viewModel={registerViewModel}
          history={useHistory()}
        />
      </header>
    </div>
  );
};

export default Register;
