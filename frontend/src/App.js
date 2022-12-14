// import './App.css';
import Card from './components/Card';
import Content from './components/Content';
import Header from './components/Header';
import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Button } from 'antd'
import CreateEvent from './components/events/CreateEvent';
function App() {

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className="App">
      <Header />
      <Content />
      <Card />

      <Button
        type='primary'
        icon={<PlusCircleOutlined style={{ fontSize: 40 }} />}
        data-testid='add-contact-button'
        onClick={() => setShowDrawer(true)}
        style={{ float: 'right', fontSize: 20, marginBottom: '15px', paddingBottom: '15px', width: '4%', height: '8.5vh', backgroundColor: 'rgb(216, 50, 50)', borderRadius: '50%' }}
      >
      </Button>

      <CreateEvent
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
      />
    </div>
  );
}

export default App;



