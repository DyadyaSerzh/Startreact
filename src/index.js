const Todo = (props) => {
    return React.createElement('div', {}, [
        React.createElement('p', {}, props.title),
        React.createElement('p', {}, props.date)
    ])
}

const App = () => {
    return React.createElement('div', {
            id: 'parent'
        },
        React.createElement('div', {}, 'hello world', [
            React.createElement('h1', {id: 'time'}, ),
            React.createElement('h2', {}, 'hello world'),
            React.createElement(Todo, { title: 'learn', date: '01.01.2011' }),
        ]))
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))

function time() {
    console.log(document.getElementById('timeClass'))
    let date = new Date().toLocaleTimeString();
    const timeElement = (
        React.createElement('span', {},'time is '+ date )
        );
    // ReactDOM.render(React.createElement(App), document.getElementsByClassName('timeClass'));
    ReactDOM.render(timeElement, document.getElementById('time'))
}
setInterval( time,1000)