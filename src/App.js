import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl="https://raw.githubusercontent.com/Mozart-Fintech/mozapi-docs/main/openapi.yml?token=GHSAT0AAAAAACTQNIWL2DSYZ3SNTKFCX4HKZXCK4OQ" />
    </div>
  );
}

export default App;
