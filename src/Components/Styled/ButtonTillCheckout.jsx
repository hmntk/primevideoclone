import styled from 'styled-components'

const Button_LoginToPrime = styled.button`
    width: 259px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;
    margin-top: 47px;

    font-family: Amazon Ember;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;

    & > a{
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_getStarted = styled.button`
    width: 259px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;

    font-family: Amazon Ember;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_getPrimePerMonth = styled.button`
    width: 259px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;

    font-family: Amazon Ember;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_continueAtPayment = styled.button`
    width: 200px;
    height: 48px;
    background: #0f79af;
    border-radius: 4px;

    font-family: Amazon Ember;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_watchNow = styled.button`
    width: 131px;
    height: 41px;
    background: #0f79af;
    border-radius: 4px;

    font-family: Amazon Ember;
    font-style: normal;
    font-size: 14px;
    line-height: 150%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_Play = styled.button`
    width: 87px;
    height: 41px;
    background: #0f79af;

    font-family: Amazon Ember;
    font-style: normal;
    font-size: 14px;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #00a8e1;
    }
`;

const Button_playSignOnlyRound = styled.button`
    width: 40px;
    height: 40px;
    background: #252e39;
    border-radius: 50%;
    border: none;
    color: #ffffff;

    & > a {
        color: #ffffff;
    }

    &:hover {
        background: #4b5c70;
    }
`;

export {
    Button_LoginToPrime,
    Button_getStarted,
    Button_getPrimePerMonth,
    Button_continueAtPayment,
    Button_watchNow,
    Button_Play,
    Button_playSignOnlyRound,
};
