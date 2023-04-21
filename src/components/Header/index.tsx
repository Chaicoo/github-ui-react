import React, { useState } from "react";

import { Container, GithubLogo, SearchForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/themes";

interface Props {
	themeName: ThemeName;
	setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		navigate("/" + search.toLowerCase().trim());
	}

	function toggleTheme() {
		setThemeName(themeName === "dark" ? "light" : "dark");
	}

	return (
		<Container>
			<GithubLogo onClick={toggleTheme}/>
			<SearchForm onSubmit={handleSubmit}>
				<input
					placeholder="Enter username of repo..."
					value={search}
					onChange={(res) => setSearch(res.currentTarget.value)}
				/>
			</SearchForm>
		</Container>
	);
};

export default Header;
