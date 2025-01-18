import {NavLink} from 'react-router-dom';

import styled from 'styled-components'
import Icon from '../components/icon'
import '../styles/theme.css'

function NavItem({className, src, to}) {
	const navigationActive = ({isActive}) => {
    return {
			borderColor: isActive ? '#D6CCFF' : 'transparent',
			opacity: isActive ? '1' : '0.5',
    };
  };

	return (
		<NavItemStyles style={navigationActive} to={to} className={className}>
			<Icon src={src}/>
		</NavItemStyles>
	);
}

const NavItemStyles = styled(NavLink)`
	display: flex;
	border-radius: var(--radius);
	cursor: pointer;
	border: 1px solid transparent;
	border-bottom-width: 3px;
	background: transparent;
	color: var(--purple);
	text-decoration: none;
	position: relative;
	aspect-ratio: 1/1;
	width: 100%;
	max-height: 100%;
	justify-content: center;
	align-items: center;
	}
`;

export default NavItem;
