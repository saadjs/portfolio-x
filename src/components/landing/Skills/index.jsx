import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import profileDetail from "assets/illustrations/profile-detail.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper id="about">
			<SkillsWrapper as={Container}>
				<Thumbnail>
					<img
						src={profileDetail}
						alt="I’m Saad and I’m a software  engineer!"
					/>
				</Thumbnail>
				<Details theme={theme}>
					<h1>More about me</h1>
					<p>
						I am a tech enthusiast. I love to explore new things and
						develop interactive websites.
						<br />
						💪 I am highly motivated, detail-oriented, self-driven
						engineer who is always trying to perfect and improve
						products.
						<br />
						🏔 I love nature, and I am inspired by scenic beauty. In
						my spare time, I enjoy travelling and long drives 🚘
						<br />
						✉️ Shoot me an email at{" "}
						<a href="mailto:saad@saadshaikh.dev">
							saad@saadshaikh.dev
						</a>{" "}
						to connect over a virtual coffee ☕️
					</p>
					<Button as={AnchorLink} href="#contact">
						Hire me
					</Button>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	);
};
