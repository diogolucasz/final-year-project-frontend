import styled from 'styled-components';

export const Container = styled.div`
  	padding: 3rem;
	background: var(--blue-900);
	text-align: center;
	border-radius: 1rem;

	.profile-picture {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		display: flex;
		margin: -38px auto 12px;
	}

	section {
		font-size: 1rem;
    	line-height: 1.5;
    	color: rgb(230, 230, 230);
   	 	margin: 1.5em 0px;
	}
	
	h1 {
		position: relative;
   	 	font-size: 1.3rem;
    	font-weight: bold;
   	 	margin: 0px 0px 1.333em;
		color: var(--white);
	}

	h2 {
		width: 100%;
		text-align: center;
		letter-spacing: 0.015em;
		color: var(--white);
		font-weight: 500;
		font-size: 15px;
		font-style: normal;
	}
	.separator {
		width: 100%;
		border-bottom: 1px solid var(--white);
		margin: 16px 0 12px;
	}
	.key-value {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		margin: 0 12px;
		font-weight: 600;

		.key {
		color: var(--color-gray);
		}
		.value {
		color: var(--color-link);
		}
	}
`;

