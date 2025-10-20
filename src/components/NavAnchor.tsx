import { Anchor } from "@mantine/core";
import { useMatch, Link } from "react-router-dom";

interface NavAnchorProps {
  to: string;
  children: React.ReactNode;
}

const NavAnchor = ({ to, children }: NavAnchorProps) => {
  const match = useMatch(to);

  return (
    <Anchor
      component={Link}
      to={to}
      underline='never' 
      c={match ? 'blue' : 'gray'} 
      style={{
        fontFamily: match ? 'OpenSansSemiBold' : 'OpenSansRegular',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }}
    >
      {children}
    </Anchor>
  );
};

export default NavAnchor;
