import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 10px;
    margin-left: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2); 
`;

export const HomePageRedirect = styled.span`
    font-family: Helvetica;

    &:Hover {
        color: grey;
        cursor: pointer;
    }
`;

export const LogOffPageRedirect = styled.span`
    font-family: Helvetica;

    &:Hover {
        color: grey;
        cursor: pointer;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TripsOptionMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
    margin-right: 40px;
    margin-left: 40px;
`;

export const ScheduledTripsButton = styled.button`
    font-family: Helvetica;
    margin-right: 100px;
    width: 300px;
    height: 30px;
    margin: 15px;
    outline: none;
    border: none;
    font-size: 18px;
    ${props => props.isActiveScheduled && `border-bottom: 3px solid black`} 

    ${props => !props.isActiveScheduled && `
        &:Hover {
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
    `}
`;

export const PastTripsButton = styled.button`
    font-family: Helvetica;
    margin-left: 100px;
    width: 300px;
    height: 30px;
    margin: 15px;
    outline: none;
    border: none;
    font-size: 18px;
    ${props => props.isActivePast && `border-bottom: 3px solid black`} 

    ${props => !props.isActivePast && `
        &:Hover {
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
    `}
`;

export const TripsInfoPopup = styled.div`
    width: 1000px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
`;

export const PersonalOfficeSpan = styled.span`
    font-family: Helvetica;
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoTickets = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
`;

export const DateTickets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const AppointmentTickets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
`;

export const AmountTickets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
`;

export const DateDeparture = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
`;

export const Text = styled.span`
    font-family: Helvetica;
    color: white;
    margin-right: 10px;
    margin-left: 10px;
`;

export const TextMain = styled.span`
    font-family: Helvetica;
    color: #2F4F4F;
    margin-right: 10px;
    margin-left: 10px;
`;

export const DateArrival = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    font-family: Helvetica;
`;

export const Date = styled.span`
    margin-right: 20px;
    font-family: Helvetica;
`;

export const Time = styled.span`
    font-family: Helvetica;
`;

export const FromStation = styled.div`
    display: flex;
    font-family: Helvetica;
`;

export const ToStation = styled.div`
    display: flex;
    font-family: Helvetica;
`;

export const FromBox = styled.div`
    display: flex;
    font-family: Helvetica;
`;

export const ToBox = styled.div`
    display: flex;
    margin-right: 30px;
    font-family: Helvetica;
`;

export const CarBox = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Helvetica;
`;

export const TrainNumber = styled.span`
    display: flex;
    font-family: Helvetica;
`;

export const CarNumber = styled.span`
    display: flex;
    font-family: Helvetica;
`;

export const PlaceNumber = styled.span`
    display: flex;
    font-family: Helvetica;
`;

export const TicketPrice = styled.span``;

export const TypeCar = styled.span``;