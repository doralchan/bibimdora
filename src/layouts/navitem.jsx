import {NavLink} from 'react-router-dom';

import styled from 'styled-components'
import Icon from '../components/icon'
import '../styles/theme.css'

function NavItem({className, src, to}) {
	const navigationActive = ({isActive}) => {
    return {
			backgroundColor: isActive ? '#7B50FF' : 'transparent',
			borderColor: isActive ? '#0A0A0A' : 'transparent',
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
