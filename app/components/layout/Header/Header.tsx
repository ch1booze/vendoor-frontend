import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div>
                <Image src="/logo.png" alt="Logo" width={25} height={25} />
                <span>bizz</span>
            </div>

            <nav>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </nav>

            <div>
                <button>Login</button>
                <button>Get Started</button>
            </div>
        </header>
    );
}
