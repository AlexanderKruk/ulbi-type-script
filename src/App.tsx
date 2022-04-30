import { Card, CardVariant } from "./component/Card";

function App() {
  return (
    <Card 
      width="200px" 
      height="200px" 
      variant={CardVariant.primary} 
      onClick={(num) => console.log('number', num )}>
      <button>Test</button>
    </Card>);
}

export default App;
