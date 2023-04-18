import styled, { css } from "styled-components";
import {
	RiGroupLine,
	RiBuilding4Line,
	RiMapPin2Line,
	RiMailLine,
	RiLinksLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div`
	display: flex;
	align-items: center;

	> div {
		margin-left: 24px;

		> h1 {
			font-size: 24px;
			line-height: 1.25px;
			font-weight: 600;
			color: var(--gray-dark);
			margin-bottom: 8px;
		}

		> h2 {
			font-size: 20px;
			color: var(--username);
			font-weight: 300;
		}
	}
`;

export const Avatar = styled.img`
	width: 16%;
	border-radius: 50%;
`;

export const Row = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 20px 0;

	> li {
		display: flex;
		align-items: center;

		> span {
			font-size: 16px;
			color: var(--gray);
		}

		> * {
			margin-right: 4px;
		}
	}
`;

export const Column = styled.ul`
	li{
		display: flex;
		align-items: center;
		font-size: 16px;
	}

	li + li {
		margin-top: 8px;
	}

	span {
		margin-left: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const IconCSS = css`
	width: 16px;
	height: 16px;
	fill: var(--icon);
	flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
	${IconCSS}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
	${IconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
	${IconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
	${IconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
	${IconCSS}
`;
