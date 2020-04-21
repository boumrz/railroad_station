import React from 'react';
import PurchasePopup from '../PurchasePopup';
import TicketsPopup from '../ViewTickets';
import {
    MainContainer,
    HeaderContainer,
    ContentContainer,
    BoxServices,
    CustomText,
    BoxBuyTickets,
    FooterContainer,
    BuyTickets,
    BoxDescription,
    DivDescription,
    BackgroundContainer,
    BoxOffice,
    BoxSignOffice,
} from './styles';

export class HomeView extends React.Component {
    state = {users: []}

    handleClickOffice = () => {
        const { history } = this.props;

        history.push('/office');
    }

    handleClickLogin = () => {
        const { history } = this.props;

        history.push('/login');
    }

    componentDidMount = () => {
        const { isAuth, onAuthChange } = this.props;

        if (localStorage.getItem('IS_AUTH') === 'true') {
            onAuthChange();
        }
    }

    render() {
        const { isAuth } = this.props;

        return (
            <MainContainer>
                <BackgroundContainer>
                    <HeaderContainer>
                        <BoxServices>
                            <CustomText>ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</CustomText>
                        </BoxServices>
                        <BoxServices>
                            <CustomText>ПОЕЗДА</CustomText>
                        </BoxServices>
                        <BoxServices>
                            <CustomText>ВЕРНУТЬ БИЛЕТ</CustomText>
                        </BoxServices>
                        <BoxOffice>
                            {isAuth ? (
                                <BoxSignOffice onClick={this.handleClickOffice}>Личный кабинет</BoxSignOffice>
                            ): (
                                <BoxSignOffice onClick={this.handleClickLogin}>Войти</BoxSignOffice>
                            )}
                        </BoxOffice>
                    </HeaderContainer>
                    <ContentContainer>
                        <BoxDescription>
                            <DivDescription></DivDescription>
                        </BoxDescription>
                        <BoxBuyTickets>
                            <BuyTickets>
                                <PurchasePopup />
                            </BuyTickets>
                        </BoxBuyTickets>
                    </ContentContainer>
                </BackgroundContainer>
                <FooterContainer>
                    <TicketsPopup />
                </FooterContainer>
            </MainContainer>
        );
    }
}