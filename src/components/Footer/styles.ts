import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 32px;
`;

export const Line = styled.div`
	max-width: 1280px;
	width: 100%;
	border-top: 1px solid var(--border);
`;

export const GitHubLogo = styled(FaGithub)`
	margin-top: 24px;
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	fill: var(--border);
`;
