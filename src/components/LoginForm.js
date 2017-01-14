import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@gmail.com" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password" 
                        secureTextEntry 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)} 
                        value={this.props.password} 
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

//email is produced by reducer!
const mapStatesToProps = ({ auth }) => {
    const { email, password, error } = auth;
    return { email, password, error };
};

export default connect(mapStatesToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);