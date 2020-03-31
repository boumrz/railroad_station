import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TicketTrainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoTrainBox = styled.div`
    display: flex;
    flex: 1;
`;

export const TicketTrainBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export const HeaderInfoTrainBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    padding-right: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(0, 0, 0, 0.6);
`;