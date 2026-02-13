import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
            <h2>bizz</h2>
            <nav>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </nav>

            <button>Login</button>
            <button>Get Started</button>
        </header>
    );
}
