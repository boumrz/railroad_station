import React from 'react';
import { Redirect } from 'react-router';
import {
    MainContainer,
    HeaderContainer,
    LoginSpan,
    ContentContainer,
    LoginInput,
    PasswordInput,
    FooterContainer,
    ForgotPasswordButton,
    RegistrationButton,
    BodyContainer,
    LoginButton,
} from './styles';

export class LoginView extends React.Component {

    state = {
        login: '',
        password: '',
    }
    
    handleClickForgotPassword = () => {
        const { history } = this.props;

        history.push('/forgot-password');
    }

    handleClickRegistration = () => {
        const { history } = this.props;

        history.push('/registration');
    }

    handleClickLogin = () => {
        const { checkUser } = this.props;

        checkUser(this.state);
    }

    handleChangeInputLogin = (event) => {
        const value = event.target.value;

        switch(event.target.dataset.name) {
            case 'login': {
                this.setState({
                    login: value,
                });
            }
            case 'password': {
                this.setState({
                    password: value,
                });
            }
            default: {
                return null;
            }
        }
    }

    render() {
        const { isAuth } = this.props;

        if (isAuth) return <Redirect to="/office" />;

        return (
            <MainContainer>
                <form>
                    <BodyContainer>
                            <HeaderContainer>
                                <LoginSpan>Авторизация</LoginSpan>
                            </HeaderContainer>
                            <ContentContainer>
                                <LoginInput 
                                    onChange={this.handleChangeInputLogin} 
                                    data-name="login"
                                    placeholder="Введите логин" 
                                />
                                <PasswordInput 
                                    onChange={this.handleChangeInputLogin} 
                                    data-name="password"
                                    placeholder="Введите пароль" 
                                    type="password" 
                                />
                                <LoginButton onClick={this.handleClickLogin}>Войти</LoginButton>
                            </ContentContainer>
                            <FooterContainer>
                                <ForgotPasswordButton onClick={this.handleClickForgotPassword}>Забыли пароль</ForgotPasswordButton>
                                <RegistrationButton onClick={this.handleClickRegistration}>Зарегистрироваться</RegistrationButton>
                            </FooterContainer>
                    </BodyContainer>
                </form>
            </MainContainer>
        );
    }
}