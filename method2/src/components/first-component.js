import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FirstComponent = () => {
  return (
    <section className="first-component">
      <div>
        check out this first component with everything pulled from a library!
      </div>
      <FontAwesomeIcon
        icon={["fab", "apple"]}
        className="first-icon"
        size="lg"
      />
      <FontAwesomeIcon
        icon={["fab", "microsoft"]}
        className="first-icon"
        size="lg"
      />
      <FontAwesomeIcon
        icon={["fab", "google"]}
        className="first-icon"
        size="lg"
      />
      <FontAwesomeIcon icon="check-square" className="first-icon" size="lg" />
    </section>
  );
};

export default FirstComponent;
