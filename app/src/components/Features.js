import "../styles/features.scss";
import FeatureItem from "./FeatureItem";

function Features(props) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem topic="priority" />
      <FeatureItem topic="money" />
      <FeatureItem topic="security" />
    </section>
  );
}

export default Features;
