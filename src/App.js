import React from 'react';
import Calendar from './components/Calendar';
import GlobalStyle from './GlobalStyle';

class App extends React.Component {

    render() {
        return (
            <>
                <GlobalStyle/>
                <Calendar />
            </>
         )
    }
}

export default App;