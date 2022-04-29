import { Navbar } from 'reactstrap'
import styled from 'styled-components'

export const StyledSideBard = styled(Navbar)`
    
    background-color:#7A2B91 !important;
    ul.navbar-nav {
        li.nav-item {
            width: fit-content !important;
            button {
                display: flex !important;
                justify-content: flex-start !important;
                align-items: center;
                gap: 10px;
                min-width: 258px !important;
                padding: 10px;
                height: 40px;
                font-style: normal;
                font-weight: 400;
                font-size: 17px;
                line-height: 20px;
                border-radius: 10px !important;
                background-color: transparent;
                border: 0px;
                box-shadow: none !important;
                color: #fff !important;
                .signo-btn {
                    width: 7px;
                    height: 15px;
                    background-color: rgba(255, 255, 255, 0.29) !important;
                    border-radius: 15px;
                }

                &.active{
                    background-color: rgba(255, 255, 255, 0.17) !important;

                }
            }
        }
        gap: 10px;
        align-items: center !important;
    }
    @media (min-width: 576px) {
        max-width: 100% !important;
    }
    
    @media (min-width: 768px) {
        max-width: 100% !important;
    }
    
    @media (min-width: 992px) {
        max-width: 311px !important;
        border-radius: 0 30px 30px 0;
    }

    @media (min-width: 1200px) {
        border-radius: 0 30px 30px 0;
        max-width: 311px !important;
    }

`;