import React from "react";

import {
	Container,
	BreadCrump,
	RepoIcon,
	Stats,
	StarIcon,
	ForkIcon,
	LinkButton,
	GitHubIcon,
} from "./styles";
import { Link } from "react-router-dom";

const Repo: React.FC = () => {
	return (
		<Container>
			<BreadCrump>
				<RepoIcon />
				<Link className={"username"} to={"/Chaicoo"}>
					Chaicoo
				</Link>

				<span>/</span>

				<Link className={"reponame"} to={"/Chaicoo/Chaicoo"}>
					Chaicoo
				</Link>
			</BreadCrump>
			<p>repository description Lorem ipsum dolor sit amet consectetur</p>

			<Stats>
				<li>
					<StarIcon />
					<b>9</b>
					<span>starts</span>
				</li>
				<li>
					<ForkIcon />
					<b>9</b>
					<span>forks</span>
				</li>
			</Stats>

			<LinkButton href={"https://github.com/Chaicoo/Chaicoo"}>
				<GitHubIcon />
				<span>View on Github</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
