import Link from "next/link"

export function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Column */}
          <div>
            <h3>Product</h3>
            <ul>
              {["Features", "Pricing", "Security"].map((item) => (
                <li key={item}>
                  <Link href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3>Company</h3>
            <ul>
              {["About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3>Resources</h3>
            <ul>
              {["Help Center", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <Link href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3>Legal</h3>
            <ul>
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <p>
            © 2025 Knowledge Vault. All rights reserved.
          </p>

          <div>
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <Link
                key={social}
                href="#"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
