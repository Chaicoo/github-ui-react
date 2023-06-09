import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	overflow: hidden;
	padding: 16px 20px 0 12px;
	border: 1px solid var(--border);
	border-radius: 8px;

	.wrapper {
		.scale-0 {
			fill: var(--calendar-scale-0);
		}
		.scale-1 {
			fill: var(--calendar-scale-1);
		}
		.scale-2 {
			fill: var(--calendar-scale-2);
		}
		.scale-3 {
			fill: var(--calendar-scale-3);
		}
		.scale-4 {
			fill: var(--calendar-scale-4);
		}
		.scale-5 {
			fill: var(--calendar-scale-5);
		}
		.scale-6 {
			fill: var(--calendar-scale-6);
		}

		width: 893px;
	}

	span{
		font-size: 12px;
		color: var(--link);
		margin-top: -24px;
		margin-left: 8px;
		padding-bottom: 16px;
		align-self: flex-start;	
	}
`;
