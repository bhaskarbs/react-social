import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/index3">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about3">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;