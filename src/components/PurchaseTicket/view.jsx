import React from 'react';
import {
    MainContainer,
    ContentContainer,
    FooterContainer,
    InfoTravel,
    NumberTrain,
    DateTrain,
    FromTrain,
    ToTrain,
    RegisterTicketButton,
    FormButtonRegisterTicket,
} from './styles';

export class PurchaseTicketView extends React.Component {

    render() {
        const { 
            targetTicket, 
            handleClickRegister, 
            isRegister, 
            renderRegisterTicket 
        } = this.props;

        return (
            <MainContainer>
                {targetTicket && (
                    <ContentContainer>
                        <InfoTravel>
                            <NumberTrain>
                                Номер состава: {targetTicket.train_number}
                            </NumberTrain>
                            <DateTrain>
                                Дата отправления: {targetTicket.train_departure_date}
                            </DateTrain>
                            <FromTrain>
                                Станция отправления: {targetTicket.from_station}
                            </FromTrain>
                            <ToTrain>
                                Станция следования: {targetTicket.to_station}
                            </ToTrain>
                        </InfoTravel>
                        <RegisterTicketButton>
                            {isRegister ? renderRegisterTicket(): (
                                <FormButtonRegisterTicket 
                                    onClick={handleClickRegister}
                                >
                                    Начать оформление билета
                                </FormButtonRegisterTicket>
                            )}
                        </RegisterTicketButton>
                    </ContentContainer>
                )}
                <FooterContainer>

                </FooterContainer>
            </MainContainer>
        );
    }
}