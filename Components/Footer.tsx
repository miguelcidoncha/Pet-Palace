import { styled } from "styled-components";

const Footer1 = styled.footer `
background-color: #202027;
color: white;
display: flex;
& div {
    display:flex;
    margin-left: 900px;
& ul li {list-style:none;
margin-left:50px}
a {color: white;
text-decoration:none;}
}
`

export const Footer = () => {
    return (
        <Footer1>
                <li>
                        <a href="#">About Us</a>
                </li>
                <li>
                        <a href="#">Contact</a>
                </li>
                <div>

                <img src="twitter.svg"></img>
                <p>Twitter</p>
                <img src="facebook.svg"></img>
                <p>Facebook</p>
                </div>
        </Footer1>
    );
};