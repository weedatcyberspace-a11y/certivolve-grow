import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">CertifyPro</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering professionals worldwide with industry-recognized 
                certifications and cutting-edge training programs.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-secondary-light">Programs</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Data Analytics</li>
              <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Project Management</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Computing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-secondary-light">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Student Portal</li>
              <li className="hover:text-white cursor-pointer transition-colors">Career Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community Forum</li>
              <li className="hover:text-white cursor-pointer transition-colors">Technical Support</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-secondary-light">Contact Us</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@certifypro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Learning Ave, Education City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">
              © 2024 CertifyPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-300">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;