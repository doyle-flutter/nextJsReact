import Link from 'next/link'

const SApp = () => (
    <div>
        <Link href="/" as="/">
            <a>sApp1</a>
        </Link>
        <Link href="/[...s]" as="/s2Page">
            <a>sApp2</a>
        </Link>
        <style jsx>{`
            a{
                margin:20px;
            }
        `}</style>
    </div>
);

export default SApp