import styled from 'styled-components';

export const Container = styled.div`
  	padding: 3rem;
	background: var(--blue-700);
	text-align: center;
	border-radius: 0.3rem;

	.profile-picture {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		border: 2px solid var(--color-white);
		box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
		0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));

		display: flex;
		margin: -38px auto 12px;
	}

	section {
		font-size: 16px;
    	line-height: 1.5;
    	color: rgb(230, 230, 230);
   	 	margin: 1.5em 0px;
	}
	
	h1 {
		position: relative;
   	 	font-size: 24px;
    	font-weight: bold;
   	 	margin: 0px 0px 1.333em;
		color: var(--white);
	}
	h2 {
		width: 100%;
		text-align: center;
		letter-spacing: 0.015em;
		color: var(--gray-100);
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

export const Panel = styled.aside`
  //background: var(--rosa);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;