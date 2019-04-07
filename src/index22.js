import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './components/select_component';
import InputComponent from './components/InputComponent';
import Toggle from  './components/toggle'
const emailServerOptions = [
  { value: 'QuestionPro-Default',label : 'QuestionPro-Default'},
  { value: 'SMTP', label : 'SMTP'}
];

const ssoAuthenticationOptions = [
  { value: 'Default', label: 'Default' },
  { value: 'HMAC-SHA1', label: 'HMAC-SHA1' },
  { value: 'SAML-(Unsigned)', label: 'SAML (Unsigned)' },
  { value: 'SAML Signed', label: 'SAML Signed' }
];

const surveyAuthenticationOptions = [
  { value: 'Default', label: 'Default' },
  { value: 'HMAC-SHA1', label: 'HMAC-SHA1' },
  { value: 'SAMLSingleSignOn', label: 'SAML (Single Sign On))' }
];

const webIntegrationOptions = [
  { value: 'none', label: 'None' },
  { value: 'low', label: 'Low' },
  { value: 'high', label: 'High' }
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'emailServerSelected' : emailServerOptions[1],
      'ssoAuthSelected' : ssoAuthenticationOptions[1],
      'surveyAuthSelected' : surveyAuthenticationOptions[0],
      'webIntegrationSelected' : webIntegrationOptions[2],
      'firstName':'team p',
      'emailAddress' : 'teamp@questionpro.com',
      temp : true
    };

  }

  render () {
    return (

      <div>InputComponent

        <SelectComponent
          label={'Send Via'}
          selectOptions={emailServerOptions}
          selectedOption={this.state.emailServerSelected}
          onSelect={(emailServerSelected) => this.setState({emailServerSelected})}/>

          <SelectComponent
            label={'SSO Authentication'}
            selectOptions={ssoAuthenticationOptions}
            selectedOption={this.state.ssoAuthSelected}
            onSelect={(ssoAuthSelected) => this.setState({ssoAuthSelected})}/>

            <SelectComponent
              label={'Survey Authentication'}
              selectOptions={surveyAuthenticationOptions}
              selectedOption={this.state.surveyAuthSelected}
              onSelect={(surveyAuthSelected) => this.setState({surveyAuthSelected})}/>

              <SelectComponent
                label={'WebService Integration '}
                selectOptions={webIntegrationOptions}
                selectedOption={this.state.webIntegrationSelected}
                onSelect={(webIntegrationSelected) => this.setState({webIntegrationSelected})}/>

                <InputComponent  label = {'First Name : '}
                defaultValue={this.state.firstName}
                onInputChange={(firstName) => this.setState({firstName})}/>

                <InputComponent  label = {'Email Address : '}
                defaultValue={this.state.emailAddress}
                onInputChange={(emailAddress) => this.setState({emailAddress})}/>
                <Toggle onChange={(temp) => this.setState({temp})} checked={true}/>

      </div>
    );
  }
}
//put the created component into dom
ReactDOM.render(<App />, document.querySelector('.container'));
