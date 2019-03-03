
class App extends React.Component {
    state = {
        active: true
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active,
        })
    }
    render() {
        return (
            <div>
                <Button active={this.state.active} click={this.handleClick} />
                {this.state.active && <Clock />}
                {console.log("chuju")}
            </div>
        )
    }

}
const Button = props => (

    <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>

)
class Clock extends React.Component {
    state = {
        time: this.getTime()
    }

    getTime() {
        const time = new Date();

        return ({
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),

        }
        )

    }
    setTime() {
        const time = this.getTime();
        this.setState({
            time
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setTime(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }



    render() {
        const { hours, minutes, seconds } = this.state.time;
        return (
            <div>
                {hours < 9 ? `0${hours}` : hours} : {minutes < 9 ? `0${minutes}` : minutes} : {seconds < 9 ? `0${seconds}` : seconds}
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));