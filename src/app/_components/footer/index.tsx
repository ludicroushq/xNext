import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-6 border-t py-6">
      <div className="container mx-auto">
        <footer className="footer">
          <nav>
            <h6 className="footer-title">
              &copy; {year} TODO. All rights reserved.
            </h6>
            <div>
              Powered by{" "}
              <Link
                className="link-hover link"
                href="https://www.xnext.dev"
                target="_blank"
              >
                xNext
              </Link>
              .
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}
