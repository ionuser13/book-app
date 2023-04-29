import { Container } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[100px] bg-black">
      <Container sx={{height: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p className="text-gray-300 h-fit my-auto">
          Made by John Chacpi -&nbsp;
          <Link href={'https://github.com/ionuser13'} target="_blank" title="My GitHub Profile" className="hover:text-white">
            @ionuser13
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
