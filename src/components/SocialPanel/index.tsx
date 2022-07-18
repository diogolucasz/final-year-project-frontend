import { useContext } from "react";
import { FiGithub, FiMail, FiAnchor } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { Links } from "./styles";

export default function SocialPanel() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <Links>
            <div>
                <FiAnchor size="2rem"/>
                <a>Porto</a>
            </div>
            <div>
                <FiGithub size="2rem"/>
                <a>diogolucasz</a>
            </div>
            {/* <div>
                <img src="./assets/github.svg" alt="Github" />
                <a>https://github.com/PhOmena</a>
            </div>
            <div>
                <img src="./assets/linkedin.svg" alt="LinkedIn" />
                <a>https://www.linkedin.com/in/phelipe-omena/</a>
            </div> */}
            <div>
                <FiMail size="2rem"/>
                <a>{user?.email}</a>
            </div>
        </Links>
    )
}