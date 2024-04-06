import Link from 'next/link';
export default function FirstPost() {
    return (
        <>
            <h1>
                <a href="https://www.acmicpc.net/problem/29814">Professor Young has so many assignments</a>
            </h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}