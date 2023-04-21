import React from "react";

import {
	Container,
	Main,
	LeftSide,
	RightSide,
	Repos,
	CalendarHeading,
	RepoIcon,
	Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
	const TabContent = () => (
		<div className="content">
			<RepoIcon />
			<span className="label">Repositories</span>
			<span className="number">16</span>
		</div>
	);

	return (
		<Container>
			<Tab className="desktop">
				<div className="wrapper">
					<span className="offset"/>
					<TabContent />
				</div>
				<span className="line"></span>
			</Tab>

			<Main>
				<LeftSide>
					<ProfileData
						username={"Chaicoo"}
						name={"Francisco Gabriel"}
						avatarUrl={
							"https://avatars.githubusercontent.com/u/55364296?v=4"
						}
						followers={1}
						following={1}
						company={"Federal Institute of Maranhão"}
						location={"Caxias, Brazil"}
						email={"123@email.com"}
						blog={undefined}
					/>
				</LeftSide>

				<RightSide>
					<Tab className="mobile">
						<TabContent />
						<span className="line"></span>
					</Tab>
					<Repos>
						<h2>Random repos</h2>

						<div>
							{[1, 2, 3, 4, 5, 6].map((n) => (
								<RepoCard
									key={n}
									username={"Chaicoo"}
									reponame={"random-repo"}
									description={"Random description"}
									language={
										n % 3 === 0
											? "JavaScript"
											: "TypeScript"
									}
									stars={8}
									forks={4}
								/>
							))}
						</div>
					</Repos>

					<CalendarHeading>
						Random calendar (do not represent actual data)
					</CalendarHeading>

					<RandomCalendar />
				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
