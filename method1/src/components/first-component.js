import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const FirstComponent = () => {
  return (
    <section>
      <div>check out this first component</div>
      <FontAwesomeIcon icon={faCoffee} />
    </section>
  );
};

export default FirstComponent;
