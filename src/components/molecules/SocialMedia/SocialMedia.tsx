import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <div className="flex gap-5 mr-16">
      <Link className="icon" to="https://wa.me/5212721839540">
        <RiWhatsappFill size={25}  color="#63aa5d" />
      </Link>
      <Link className="icon" to="https://www.facebook.com/profile.php?id=100089373082369
">
        <FaFacebookSquare size={25}  color="#2b65e2" />
      </Link>
      <Link className="icon" to="https://www.instagram.com/el_girasol19?igsh=ZGUzMzM3NWJiOQ==">
        <PiInstagramLogoFill
        size={25}
          color="#f85c8e"
        />
      </Link>
    </div>
  );
}
