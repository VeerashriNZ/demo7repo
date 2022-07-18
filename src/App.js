//import logo from './logo.svg';
import logo from './awslogo.png';
import './App.css';
import React from 'react';
import TopNavigation from "@awsui/components-react/top-navigation";
import Form from "@awsui/components-react/form"
import FormField from "@awsui/components-react/form-field"
import SpaceBetween from "@awsui/components-react/space-between"
import Button from "@awsui/components-react/button"
import Header from "@awsui/components-react/header"
import Container from "@awsui/components-react/container"
import Input from "@awsui/components-react/input"
import Select  from '@awsui/components-react/select'
import Box  from '@awsui/components-react/box';
import Grid  from '@awsui/components-react/grid';
import ColumnLayout from '@awsui/components-react/column-layout';

function App() {
  const [
    selectedOption,
    setSelectedOption
  ] = React.useState({ label: "Select", value: "1" });

  
  return (
    <div className="App">
      
      <TopNavigation
      identity={{
        href: "#",
        title: "amazon E-migrate",
        logo: {
          src: require('./awslogo.png'),
        }
      }}
      utilities={[
        {
          type: "button",
          text: "AWS",
          href: "https://aws.amazon.com",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)"
        },
        
      ]}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />
<div class="custom-home__header custom-awsui-util-pt-xxxl awsui-row"><div class="col-xxs-12"><div class="awsui-row"><div class="custom-home__header-title col-xxs-10 offset-xxs-1 col-s-6 col-l-5 offset-l-2 col-xl-6"><div class="awsui-text-large"><h1 class="awsui-text-large"><strong style={{ color: "white" }}>Amazon E-migrate</strong></h1><div style={{ color: "white" }}>Calculate and compare data migration estimations.</div></div></div></div></div></div>


<Form>
        <Container
          header={
            <Header variant="h2">
              Enter the details
            </Header>
          }
        >
          
          <SpaceBetween direction="vertical" size="l">
            <FormField label="Region">
            <Select
      selectedOption={selectedOption}
      onChange={({ detail }) =>
        setSelectedOption(detail.selectedOption)
      }
      options={[
        { label: "Asia Pacific (Sydney)", value: "1" },
        { label: "Option 2", value: "2" },
        
      ]}
      selectedAriaLabel="Selected"
    />
            </FormField>
            <FormField label="Amount of data">
              <Input />
            </FormField>
            <FormField label="Connection Speed">
              <Input />
            </FormField>
            <FormField label="Network Utilisation (%) ">
            <Select
      selectedOption={selectedOption}
      onChange={({ detail }) =>
        setSelectedOption(detail.selectedOption)
      }
      options={[
        { label: "10 %", value: "1" },
        { label: "20 %", value: "2" },
        { label: "30 %", value: "3" },
        { label: "40 %", value: "4" },
        { label: "50 %", value: "5" },
        { label: "60 %", value: "6" },
        { label: "70 %", value: "7" },
        { label: "80 %", value: "8" },
        { label: "90 %", value: "9" },
        { label: "100 %", value: "10" }
      ]}
      selectedAriaLabel="Selected"
    />
            </FormField>
            <Button variant="primary">Calculate</Button>
            
        
          </SpaceBetween>

        </Container>
      </Form>  
      <br></br>
      <Form>
      
        
        <br></br>

        <ColumnLayout columns={3} variant="container-grid">
        <Container
      header={
        <Header
          variant="h2"
          description="Data transfer over the internet."
        >
          Internet
        </Header>
      }
    >
     Time
      <br></br>
      Cost
    </Container>
    <Container
      header={
        <Header
          variant="h2"
          description="Customers select a Direct Connect dedicated physical connection to accelerate network transfers between their datacenters and AWS datacenters."
        >
          Direct Connect 
        </Header>
      }
    >
      Time
      <br></br>
      Cost
    </Container>
    <Container
      header={
        <Header
          variant="h2"
          description="AWS Snowball is a petabyte-scale data transport and edge computing device that comes with on-board storage and compute capabilities."
        >
          Snowball
        </Header>
      }
    >
      Time
      <br></br>
      Cost
    </Container>
    </ColumnLayout>

        
      </Form>
    
    </div>
  );
}

export default App;
