import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;

	> p {
		font-size: 16px;
		color: var(--gray);
	}
`;

export const BreadCrump = styled.div`
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	font-size: 20px;

	> a {
		color: var(--link);
		text-decoration: none;

		&:hover,
		&:focus {
			text-decoration: underline;
			transition: 0.2s;
		}
	}

	.username {
		margin-left: 8px;
	}

	.reponame {
		font-weight: 600;
	}

	> span {
		padding: 0 4px;
	}
`;

export const Stats = styled.ul`
	margin-top: 16px;
	display: flex;
	align-items: center;

	> li {
		display: flex;
		align-items: center;
		margin-right: 8px;

		> * {
			margin-right: 8px;
			color: var(--gray);
		}
	}
`;

export const LinkButton = styled.a`
	margin-top: 20px;
	background: var(--gray-dark);
	padding: 8px 16px;
	border-radius: 24px;
	width: max-content;
	display: flex;
	align-items: center;

	> span {
		text-decoration: none;
		margin-left: 8px;
		color: var(--primary);
	}

	&:hover,
	&:focus {
		opacity: 0.8;
		transition: 0.2s;
	}

	>svg{
		fill: var(--primary);
		margin-right: 4px;
		margin-top: -3px;
	}
`;

const IconCSS = css`
	width: 16px;
	height: 16px;
	fill: var(--icon);
	flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
	${IconCSS}
`;

export const StarIcon = styled(RiStarLine)`
	${IconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
	${IconCSS}
`;

export const GitHubIcon = styled(FaGithub)`
	${IconCSS}
`;
