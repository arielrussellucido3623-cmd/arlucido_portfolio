export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <p>
          © {year} <a href="/">Lucido</a> — Built with Next.js &amp; passion.
        </p>
      </div>
    </footer>
  )
}
