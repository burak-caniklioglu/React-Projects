import React from 'react';
import Header from './header/Header';
import MyButton from './MyButton/MyButton';
import Wrapper from './wrapper/Wrapper';

const StyledComponent = () => (
	<div>
		<Wrapper bgColor>
			<Header baslikRenk>Merhaba</Header>
			<MyButton >Tıkla</MyButton>
			<MyButton renk>proplu</MyButton>
		</Wrapper>

	</div>);

export default StyledComponent;
