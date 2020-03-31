import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
`;

export const DiscriptionBox = styled.span`
    margin-left: 70px;
    margin-bottom: 20px;
    color: #ffffff;
`;

export const CustomText = styled.span`
    font-family: Helvetica;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 70px;
    margin-right: 100px;
`;

export const FromContainer = styled.div``;

export const ToContainer = styled.div``;

export const InputPoint = styled.input`
    outline: none;
    height: 28px;
    width: 170px;
    padding-left: 7px;
    border-radius: 5px;
    border: none;
`;

export const DateContainer = styled.div``;

export const InputDate = styled.input`
    outline: none;
    height: 28px;
    width: 170px;
    padding-left: 7px;
    border-radius: 5px;
    border: none;
`;

export const SearchContainer = styled.div``;

export const ButtonSearch = styled.button`
    outline: none;
    background-color: ${props => props.isActive? 'red': 'white'};
    height: 28px;
    width: 170px;
    padding-left: 7px;
    border-radius: 5px;
    border: none;
`;