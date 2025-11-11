import { BookOpen, Heart, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-muted/30 mt-20 overflow-hidden">
      {/* Footer blobs */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-20 w-72 h-72 bg-eco-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-7xl px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-eco-green to-eco-blue flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Eco Heroes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Teaching kids to love and protect our planet, one story at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#stories-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Story Library
                </a>
              </li>
              <li>
                <a href="#about-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#parents-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  For Parents
                </a>
              </li>
            </ul>
          </div>

          {/* Resources for Parents */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Parents</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Teaching Tips
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Activity Guides
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Recycling Resources
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Eco Heroes Story Library. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for our little Eco Heroes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
