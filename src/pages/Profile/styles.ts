import styled from "styled-components";

export const Container = styled.div`
	--horizontalPadding: 16px;
	--verticalPadding: 24px;

	padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div``;

export const LeftSide = styled.div`
	@media (min-width: 768px) {
		width: 25%;
	}
`;

export const RightSide = styled.div`
	@media (min-width: 768px) {
		width: 75%;
	}
`;