import React from 'react';
import {
    MainContainer,
    BodyContainer,
    HeaderContainer,
    ForgotPasswordSpan,
    ContentContainer,
    ForgotPasswordInput,
    FooterContainer,
    ForgotPasswordButton,
    ForgotPasswordSelecter,
} from './styles';

export class ForgotPasswordView extends React.Component {
    render() {
        return (
            <MainContainer>
                <BodyContainer>
                    <HeaderContainer>
                        <ForgotPasswordSpan>Восстановление пароля</ForgotPasswordSpan>
                    </HeaderContainer>
                    <ContentContainer>
                        <ForgotPasswordInput placeholder="Введите фамилию" />
                        <ForgotPasswordInput placeholder="Введите имя" />
                        <ForgotPasswordInput placeholder="Введите отчество" />
                        <ForgotPasswordInput placeholder="Введите дату рождения" />
                        <ForgotPasswordSelecter>
                            <option>Мужской</option>
                            <option>Женский</option>
                        </ForgotPasswordSelecter>
                        <ForgotPasswordInput placeholder="Введите логин" />
                        <ForgotPasswordButton>Восстановить пароль</ForgotPasswordButton>
                    </ContentContainer>
                </BodyContainer>
                <FooterContainer></FooterContainer>
            </MainContainer>
        );
    }
}