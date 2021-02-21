import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondComponent = () => {
  return (
    <section className="second-component">
      <div className="second-styled">
        check out this second component with all of the icons styled!
      </div>
      <FontAwesomeIcon
        icon={["fab", "apple"]}
        className="second-icon"
        rotation={90}
        flip="horizontal"
        size="lg"
      />
      <div className="second-spin">check out this spin animation!</div>
      <FontAwesomeIcon
        icon={["fab", "microsoft"]}
        className="second-icon"
        size="lg"
        spin
      />
      <div className="second-pulse">check out this pulse animation!</div>
      <FontAwesomeIcon
        icon={["fab", "google"]}
        className="second-icon"
        size="lg"
        pulse
      />
      <div className="second-regular">
        also we can just pull in the icons as is
      </div>
      <FontAwesomeIcon icon="check-square" className="second-icon" size="lg" />
    </section>
  );
};

export default SecondComponent;
