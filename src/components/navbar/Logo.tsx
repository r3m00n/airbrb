import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Airbrb Logo"
        className="hidden cursor-pointer md:block"
        height="100"
        width="100"
        src="/images/logo.png"
      />
    </Link>
  );
};

export default Logo;
