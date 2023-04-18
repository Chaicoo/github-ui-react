import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
	return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData 
						username={"Chaicoo"}
						name={"Francisco Gabriel"}
						avatarUrl={"https://avatars.githubusercontent.com/u/55364296?v=4"}
						followers={1}
						following={1}
						company={"Federal Institute of Maranhão"}
						location={"Caxias, Brazil"}
						email={"123@email.com"}
						blog={undefined}
					/>
				</LeftSide>

				<RightSide>

				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
