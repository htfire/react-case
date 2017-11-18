import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
        Warning!
        </div>
    );
}

class If extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showWarning: true
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <Greeting isLoggedIn={isLoggedIn} />
                <div> The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. </div>
                {button}
            </div>
        );
    }
}

export default If;