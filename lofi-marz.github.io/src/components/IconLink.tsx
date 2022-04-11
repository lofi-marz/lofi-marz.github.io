
import styled from 'styled-components';
import {accent} from '../theme';
import React from 'react';

const Wrapper = styled.a` 
    color: ${props => props.theme.colors.white};
    transition-duration: 0.4s;
    
    :visited {
      color: ${props => props.theme.colors.white}
    }
    
    :hover {
      transform: translate(-2px, -2px);
      color: ${props => accent(props.theme)[900]}
    };
 `;

interface IconLinkProps {
    href: string;
    children: React.ReactNode
}

const IconLink: React.FC<IconLinkProps> = (props: IconLinkProps) => {
    return (
        <Wrapper href={props.href}>
            {props.children}
        </Wrapper>
    );
};



export default IconLink;