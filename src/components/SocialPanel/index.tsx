import { Links } from "./styles";

export default function SocialPanel() {
    return (
        <Links>
            <div>
                <img src="./assets/map-pin.svg" alt="Localização" />
                <a>São Paulo, Brasil</a>
            </div>
            <div>
                <img src="./assets/briefcase.svg" alt="Trabalho" />
                <a>Metalfrio Solutions S/A</a>
            </div>
            <div>
                <img src="./assets/github.svg" alt="Github" />
                <a>https://github.com/PhOmena</a>
            </div>
            <div>
                <img src="./assets/linkedin.svg" alt="LinkedIn" />
                <a>https://www.linkedin.com/in/phelipe-omena/</a>
            </div>
            <div>
                <img src="./assets/twitter.svg" alt="Twitter" />
                <a>phelipe-omena</a>
            </div>
            <div>
                <img src="./assets/globe.svg" alt="Site" />
                <a>https://www.omena.com.br</a>
            </div>
            <div>
                <img src="./assets/mail.svg" alt="Email" />
                <a>Phomena_2016@outlook.com</a>
            </div>
        </Links>
    )
}