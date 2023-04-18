import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
	display: flex;
	align-items: center;
	background: var(--header);
	padding: 12px 16px;
`;

export const GithubLogo = styled(FaGithub)`
	fill: var(--logo);
	width: 32px;
	height: 32px;
	flex-shrink: 0;
`;

export const SearchForm = styled.form`
	padding-left: 16px;
	width: 100%;

	input {
		background: var(--search);
		outline: 0;
		border-radius: 8px;
		padding: 8px 12px;
		width: 100%;
		color: var(--primary);

		&:focus {
			width: 318px;

			&::placeholder {
				text-align: center;
			}
		}

		transition: width 0.2s ease-out, color 0.2s ease-out; 
	}
`;