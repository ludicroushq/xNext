function getCurrentYear() {
  return new Date().getFullYear();
}

export function Footer() {
  const year = getCurrentYear();

  return (
    <div className="border-t border-t-base-300 py-6">
      <div className="container mx-auto">
        <footer className="footer">
          <nav>
            <h6 className="footer-title">
              &copy; {year} TODO. All rights reserved.
            </h6>
          </nav>
        </footer>
      </div>
    </div>
  );
}
