import './App.css';
import { Button, Space } from 'antd-mobile'

function App() {
  return (
    <div>
      <Space wrap>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        <Button color='primary' fill='outline'>
          Outline
        </Button>
        <Button color='primary' fill='none'>
          None
        </Button>
      </Space>
      <div className="box width375"></div>
      <div className="box width750"></div>
    </div>
  );
}

export default App;
