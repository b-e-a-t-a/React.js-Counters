var Counter = React.createClass({

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  getDefaultProps: function() {
    console.log('Ustawia domyślne wartości props nieprzekazane do komponentu');
  },

  componentWillMount: function() {
    console.log('Inicjalizacja komponentu przed wykonaniem render');
  },

  componentDidMount: function() {
    console.log('Wywoływana po wykonaniu render, manipulacje, jQuery, pobieranie danych');
  },

  componentWIllReceiveProps: function() {
    console.log('aktualizuje stan komponentu gdy nowe właściwości komponentu');
  },

  shouldComponentUpdate: function() {
    console.log('sprawdza czy trzeba jeszcze raz przerysować komponent, w celu optymalizacji');
    return true;
  },

  componentWIllUpdate: function() {
    console.log('gdy poprzednia metoda zwróci true; przygotowanie na przerenderowanie');
  },

  componentDIdUpdate: function() {
    console.log('manipulacje na DOM po przerysowaniu komponentu');
  },

  componentWillUnmount: function() {
    console.log('posprzątanie przed usunięciem komponentu, odpinanie timerów, nasłuchiwań zdarzeń');
  },



  render: function() {
        return React.createElement('div', {className: 'container'},
            React.createElement('h1', {}, 'COUNTER'),
            React.createElement('button', {
                className: 'btn btn-lg btn-primary',
                onClick: this.increment
            }, 'increment +'),
            React.createElement('span', {}, 'counter: ' + this.state.counter),
            React.createElement('button', {
                className: 'btn btn-lg btn-warning',
                onClick: this.decrement
            }, 'decrement -'),
        );
    }
});




var element =
    React.createElement('div', {},
        React.createElement(Counter, {}),
        React.createElement(Counter, {}),
        React.createElement(Counter, {})
    );

ReactDOM.render(element, document.getElementById('app'));