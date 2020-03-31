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
} from './styles';

export class HomeView extends React.Component {
    state = {users: []}

    render() {
        const { trains } = this.props;

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