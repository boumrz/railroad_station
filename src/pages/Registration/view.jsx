import React from 'react';
import { isEmptyObject } from '../../utils/isEmptyObject';
import {
    MainContainer,
    BodyContainer,
    HeaderContainer,
    RegistrationSpan,
    ContentContainer,
    FooterContainer,
    RegistrationInput,
    RegistrationSubmitButton,
    RegistrationSelecter,
} from './styles';

export class RegistrationView extends React.Component {

    state = {
        surname: '',
        firstname: '',
        midname: '',
        dateBirth: '',
        sex: 'Мужской',
        login: '',
        password: '',
    }

    handleChangeInputRegisterUser = (event) => {
        const value = event.target.value;

        switch(event.target.dataset.name) {
            case 'firstname': {
                this.setState({
                    firstname: value,
                });

                return;
            }
            case 'surname': {
                this.setState({
                    surname: value,
                });

                return;
            }
            case 'midname': {
                this.setState({
                    midname: value,
                });

                return;
            }
            case 'sex': {
                this.setState({
                    sex: value,
                });

                return;
            }
            case 'login': {
                this.setState({
                    login: value,
                });

                return;
            }
            case 'password': {
                this.setState({
                    password: value,
                });

                return;
            }
            case 'dateBirth': {
                this.setState({
                    dateBirth: value,
                });

                return;
            }
            default: {
                return null;
            }
        }
    }

    handleClickRegistration = () => {
        const { addUser } = this.props;

        addUser(this.state);
    }

    render() {
        const { currentUser, switchPageRegistration, history } = this.props;

        if (!isEmptyObject(currentUser)) {
            switchPageRegistration(currentUser);
            history.push('/login');
        }

        return (
            <MainContainer>
                <BodyContainer>
                    <HeaderContainer>
                        <RegistrationSpan>Регистрация</RegistrationSpan>
                    </HeaderContainer>
                    <ContentContainer>
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser}
                            data-name="surname" 
                            placeholder="Фамилия" 
                        />
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser} 
                            data-name="firstname"
                            placeholder="Имя" 
                        />
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser} 
                            data-name="midname"
                            placeholder="Отчество" 
                        />
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser} 
                            data-name="dateBirth"
                            type='date' placeholder="Дата рождения" 
                        />
                        <RegistrationSelecter onChange={this.handleChangeInputRegisterUser} data-name="sex">
                            <option>Мужской</option>
                            <option>Женский</option>
                        </RegistrationSelecter>
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser} 
                            data-name="login"
                            placeholder="Логин" 
                        />
                        <RegistrationInput 
                            onChange={this.handleChangeInputRegisterUser} 
                            data-name="password"
                            type='password' 
                            placeholder="Пароль" 
                        />
                        <RegistrationSubmitButton onClick={this.handleClickRegistration}>
                            Зарегистрироваться
                        </RegistrationSubmitButton>
                    </ContentContainer>
                </BodyContainer>
                <FooterContainer>

                </FooterContainer>
            </MainContainer>
        );
    }
}